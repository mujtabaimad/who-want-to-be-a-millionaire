import { FC, useEffect, useState } from "react";
import { initialLevels, levelType, questionsPool, questionType } from "../../constants/initialValues";
import { changeLevels, localStorageKeys } from "../../services/initial";
import Progress from "../Progress/Progress";
import Question from "../Question/Question";
import "./MainLayout.scss";

const MainLayout: FC = () => {



    const [levels, setLevels] = useState<levelType[]>(() => {
        const localStorage = window.localStorage;
        const levelsItem = localStorage.getItem(localStorageKeys.levels);
        if (levelsItem) {
            const levels = JSON.parse(levelsItem);
            return levels;
        } else {
            return initialLevels;
        }
    });

    const [questions] = useState<questionType[]>(() => {
        const localStorage = window.localStorage;
        const questionsItem = localStorage.getItem(localStorageKeys.questions);
        if (questionsItem) {
            const questions = JSON.parse(questionsItem);
            return questions;
        } else {
            return questionsPool;
        }
    });


    const [currentLevel, setCurrentLevel] = useState<levelType>();


    useEffect(() => {
        if (levels?.length) {
            const cLevel = levels.find(l => l.status === 'current');
            if (cLevel) {
                setCurrentLevel(cLevel);
            } else {
                setCurrentLevel({ ...levels[0], status: 'current' });
            }
        }
    }, [levels]);


    return (
        <div className="p-4 main-layout h-screen">
            <div className="flex justify-end items-start h-2/3">
                <Progress levels={levels} />
            </div>
            <div className="h-1/3">
                <Question
                    currentLevel={currentLevel}
                    questions={questions}
                    onQuestionChange={(newQuestion) => {
                        const filteredLevels = levels.filter(l => l.order !== currentLevel?.order)
                        const newLevels = [...filteredLevels, {
                            ...currentLevel,
                            questionId: newQuestion.id
                        } as levelType];
                        setLevels(newLevels);
                        changeLevels(newLevels);
                    }}
                    onNextLevel={() => {
                        if (currentLevel) {
                            const filteredLevels = levels.filter(l => l.order !== currentLevel?.order);
                            const cLevel: levelType = { ...currentLevel, status: "passed" }
                            const newLevels = [...filteredLevels, cLevel];
                            newLevels.sort((a, b) => a.order - b.order);
                            let nextLevelIndex:number;
                            newLevels.forEach((l, index)=> {
                                if(l.order > cLevel.order && nextLevelIndex === undefined){
                                    nextLevelIndex = index;
                                    newLevels[nextLevelIndex].status = "current";
                                }
                            })

                            console.log({newLevels});
                            setLevels(newLevels);
                            changeLevels(newLevels);
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default MainLayout;