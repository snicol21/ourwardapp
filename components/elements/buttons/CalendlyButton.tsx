import { openPopupWidget } from "react-calendly"
import { Props } from "react-calendly/typings/components/PopupWidget/PopupWidget"

const CalendlyButton = ({ children, styles, url, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles} ${disabled ? "disabled:opacity-50" : ""}`}
      onClick={() => openPopupWidget({ url, pageSettings: {} } as Props)}
    >
      {children}
    </button>
  )
}
export default CalendlyButton
