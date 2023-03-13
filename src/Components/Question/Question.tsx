import "./Question.scss";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { levelType, optionType, questionType } from "../../constants/initialValues";

const Question: FC<{
    currentLevel?: levelType,
    questions: questionType[],
    onQuestionChange: (newQuestion: questionType) => void,
    onNextLevel: () => void,
}> = ({ currentLevel, questions, onQuestionChange, onNextLevel }) => {

    const [question, setQuestion] = useState<questionType>();
    const [selectedAnswer, setSelectedAnswer] = useState<optionType>();
    const [answerConfirmed, setAnswerConfirmed] = useState<boolean>(false);
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

    const resetState = () => {
        setQuestion(undefined);
        setSelectedAnswer(undefined);
        setAnswerConfirmed(false);
        setRevealAnswer(false);
    }

    useEffect(() => {
        if (questions.length) {
            if (currentLevel?.questionId) {
                const currentQuestion = questions.find(q => q.id === currentLevel.questionId);
                if (currentQuestion) {
                    setQuestion(currentQuestion)
                }
            } else {
                const defaultLevelQuestions = questions.filter(q => q.difficulty === currentLevel?.difficulty);
                // TODO question should not be selecteed before
                if (defaultLevelQuestions.length) {
                    const randQustionIndex = Math.floor(Math.random() * defaultLevelQuestions.length);
                    setQuestion(questions[randQustionIndex])
                    onQuestionChange(questions[randQustionIndex])
                }
            }
        }
    }, [questions, currentLevel?.questionId, currentLevel?.difficulty, onQuestionChange]);


    const answerOption = useCallback((option: optionType) => {

        const isSelected = selectedAnswer?.order === option.order;
        let customClassName = `${isSelected ? 'q-selected-answer' : ''} ${answerConfirmed ? 'q-confirmed' : ''} ${revealAnswer ? 'reveal-answer' : ''} ${option.isCorrect ? 'q-correct-answer' : ''}`;

        return (
            <button
                className={`p-4 flex-1 text-center rounded-full border-2 ${customClassName}`}
                key={option.text}
                onClick={() => {
                    if (!answerConfirmed) {
                        setSelectedAnswer(option);
                    }
                }}
                onDoubleClick={() => {
                    if (isSelected) {
                        if (answerConfirmed) {
                            setRevealAnswer(true)
                        } else {
                            setAnswerConfirmed(true);
                        }
                    }
                }}
            >
                {option.text}
            </button>
        )

    }, [selectedAnswer, answerConfirmed, revealAnswer]);

    const actions = useMemo(() => {
        if (revealAnswer) {
            return (
                <div className="flex justify-between gap-4">
                    <button className="px-8  py-2  text-center rounded-full bg-red-500">
                        End game
                    </button>
                    {selectedAnswer?.isCorrect &&
                        <button
                            className="px-8 py-2 text-center rounded-full bg-teal-600"
                            onClick={() => {
                                resetState();
                                onNextLevel();
                            }}
                        >
                            Next question
                        </button>}
                </div>
            )
        }
    }, [revealAnswer, onNextLevel, selectedAnswer?.isCorrect])

    return (
        <div className="flex flex-col h-full justify-end px-4 gap-4 text-white  font-medium text-2xl">
            {actions}
            <button className="p-4 text-center rounded-full border-2">
                {question?.question}
            </button>
            <div className="grid grid-cols-2 gap-4">
                {question?.options.map((option) => answerOption(option))}
            </div>
        </div>
    )
}

export default Question;