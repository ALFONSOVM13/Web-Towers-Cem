
export const LoadingCircle = ({ className="" }) => {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className={`border-4 text-4xl animate-spin border-gray-200 flex items-center justify-center border-t-gray-400 rounded-full ${ className }`}>
            </div>
        </div>
    )
}
