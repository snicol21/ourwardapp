import { openPopupWidget } from "react-calendly"
import { PopupWidgetOptions } from "react-calendly/typings/components/PopupText/PopupText"

const CalendlyButton = ({ children, styles, url, disabled }) => {
  return (
    <button disabled={disabled} type="button" className={styles} onClick={() => openPopupWidget({ url, pageSettings: {} } as PopupWidgetOptions)}>
      {children}
    </button>
  )
}
export default CalendlyButton
