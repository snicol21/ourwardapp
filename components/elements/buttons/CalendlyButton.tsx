import { openPopupWidget } from "react-calendly"
import { PopupWidgetOptions } from "react-calendly/typings/components/PopupText/PopupText"

const CalendlyButton = ({ children, styles, url, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`${styles} ${disabled ? "disabled:opacity-50" : ""}`}
      onClick={() => openPopupWidget({ url, pageSettings: {} } as PopupWidgetOptions)}
    >
      {children}
    </button>
  )
}
export default CalendlyButton
