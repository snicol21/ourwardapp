import Link from "next/link"

const LightButton = ({ children, disabled = false, href = "", passHref = false, className = "" }) => {
  return (
    <Link href={href} passHref={passHref}>
      <button
        disabled={disabled}
        type="button"
        className={`focus:outline-none ${className} bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-primary-600 hover:bg-primary-50`}
      >
        {children}
      </button>
    </Link>
  )
}
export default LightButton
