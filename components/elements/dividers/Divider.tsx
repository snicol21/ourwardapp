export type IDivider = {
  text?: string
  className?: string
}

const Divider = ({ text, className = "" }: IDivider) => {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      {text && (
        <div className="relative flex justify-center">
          <span className="px-2 bg-gray-100 text-sm text-gray-500">{text}</span>
        </div>
      )}
    </div>
  )
}
export default Divider
