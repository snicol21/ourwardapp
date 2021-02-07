import Link from "next/link"
import { openPopupWidget } from "react-calendly"
import { PopupWidgetOptions } from "react-calendly/typings/components/PopupText/PopupText"

const PrimaryButton = ({ children, disabled = false, href = "", passHref = false, className = "", type = "dark", calendly = false }) => {
  const baseStyles = `focus:outline-none ${className} border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium `
  const dark = "bg-primary text-white hover:bg-primary-700"
  const light = "bg-white text-primary-600 hover:bg-primary-50"
  let styles: string
  switch (type) {
    case "dark":
      styles = `${baseStyles} ${dark}`
      break
    case "light":
      styles = `${baseStyles} ${light}`
      break
    default:
      styles = `${baseStyles} ${dark}`
  }

  if (calendly) {
    const popupWidgetOptions: PopupWidgetOptions = {
      url: href,
    }
    return (
      <button disabled={disabled} type="button" className={styles} onClick={() => openPopupWidget(popupWidgetOptions)}>
        {children}
      </button>
    )
  } else {
    return (
      <Link href={href} passHref={passHref}>
        <button disabled={disabled} type="button" className={styles}>
          {children}
        </button>
      </Link>
    )
  }
}
export default PrimaryButton
