export type IIcon = {
  name: "chevron-down" | "chevron-left" | ""
  className?: string
}

const Icon = ({ name = "", className = "" }: IIcon) => {
  const getIcon = () => {
    switch (name) {
      case "chevron-down":
        return <ChevronDown className={className} />
      case "chevron-left":
        return <ChevronLeft className={className} />
      default:
        return <div></div>
    }
  }
  return <>{getIcon()}</>
}
export default Icon

const ChevronDown = ({ className }) => {
  return (
    <svg className={`-mr-1 ml-2 h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const ChevronLeft = ({ className }) => {
  return (
    <svg className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
