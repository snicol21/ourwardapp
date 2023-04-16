export type IAgendaDivider = {
    text?: string
    className?: string,
    fontClass?: string
}

const AgendaDivider = ({ text, className = "", fontClass = ""}: IAgendaDivider) => {
    return (
        <div className={`${className} relative`}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700"></div>
            </div>
            {text && (
                <div className="relative flex justify-center">
                    <span className={`${fontClass} px-2 bg-gray-100`}>{text}</span>
                </div>
            )}
        </div>
    )
}
export default AgendaDivider
