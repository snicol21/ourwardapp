export type IAgendaDivider = {
  text?: string
  className?: string
  fontClass?: string
  borderClass?: string
}

const AgendaDivider = ({ text, className = "", fontClass = "", borderClass = "border-gray-700" }: IAgendaDivider) => {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className={`w-full border-t ${borderClass}`}></div>
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
