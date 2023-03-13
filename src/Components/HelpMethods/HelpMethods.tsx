import { FC } from "react";

const HelpMethods: FC = () => {
    return (
        <div className="flex flex-col p-4 gap-4 text-white">
            <button className="p-4 text-center rounded-[50%] border-2">
                50:50
            </button>
            <button className="p-4 text-center rounded-[50%] border-2">
                Call
            </button>
            <button className="p-4 text-center rounded-[50%] border-2">
                Audience
            </button>
        </div>
    )
}

export default HelpMethods;