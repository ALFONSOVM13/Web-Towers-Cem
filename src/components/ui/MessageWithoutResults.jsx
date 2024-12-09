import { BsDatabaseSlash } from "react-icons/bs";

export const MessageWithoutResults = ({ message }) => {
    return (
        <div className="w-full h-full min-h-[20rem] flex flex-col justify-center items-center gap-2 text-gray-400">
            <BsDatabaseSlash className="text-3xl" />
            <p className="text-base sm:text-lg max-w-[44rem] text-center">
                { message }
            </p>
        </div>
    )
}
