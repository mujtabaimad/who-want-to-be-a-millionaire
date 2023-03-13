import numeral from "numeral";
import { FC, useMemo } from "react";
import { levelType } from "../../constants/initialValues";
import "./Progress.scss";


const Progress: FC<{levels: levelType[]}> = ({levels}) => {

    const levelsList = useMemo(() => {

        const reversedLevels = [...levels];
        reversedLevels.sort((a, b) => b.prize - a.prize);

        return reversedLevels.map((level) => {
            return (
                <button key={level.prize} className={`px-2 flex-1 text-right progress-list-item text-xl ${level.status}`}>
                    {numeral(level.prize).format("0,0")} SDG
                </button>
            )
        })
    }, [levels]);

    return (
        <div className="flex flex-col p-4 text-white w-64 progress-list">
            {levelsList}
        </div>
    )
}

export default Progress;