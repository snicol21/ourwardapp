import { IHref, IButtonColor, IModal } from "../shared/Interfaces"
import CalendlyButton from "./CalendlyButton"
import LinkButton from "./LinkButton"
import MenuButton from "./MenuButton"
import ModalButton from "./ModalButton"

export type IPrimaryButton = {
  children: React.ReactNode
  color?: IButtonColor
  disabled?: boolean
  href?: IHref | IHref[]
  className?: string
  type?: "dark" | "light" | "link"
  modal?: IModal
}

const getColor = {
  dark: {
    primary: "bg-primary-500 hover:bg-primary-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
    green: "bg-green-500 hover:bg-green-700",
    gray: "bg-gray-500 hover:bg-gray-700",
  },
  light: {
    primary: "text-primary-600 hover:bg-primary-50",
    blue: "text-blue-600 hover:bg-blue-50",
    red: "text-red-600 hover:bg-red-50",
    green: "text-green-600 hover:bg-green-50",
    gray: "text-gray-600 hover:bg-gray-50",
  },
  link: {
    primary: "text-primary-700 hover:text-primary-500",
    blue: "text-blue-700 hover:text-blue-500",
    red: "text-red-700 hover:text-red-500",
    green: "text-green-700 hover:text-green-500",
    gray: "text-gray-700 hover:text-gray-500",
  },
}

const PrimaryButton = ({
  children,
  color = "primary",
  href = { url: "", calendly: false },
  disabled = false,
  className = "",
  type = "dark",
  modal = undefined,
}: IPrimaryButton) => {
  const baseStyles = `${className} font-medium focus:outline-none border border-transparent rounded-md inline-flex items-center text-base`
  let styles: string
  switch (type) {
    case "light":
      styles = `${baseStyles} ${getColor.light[color]} px-6 py-3 shadow bg-white`
      break
    case "link":
      styles = `${baseStyles} ${getColor.link[color]}`
      break
    case "dark":
    default:
      styles = `${baseStyles} ${getColor.dark[color]} px-6 py-3 shadow text-white`
  }

  if (modal) {
    return (
      <ModalButton styles={styles} disabled={disabled} modal={modal}>
        {children}
      </ModalButton>
    )
  } else if (Array.isArray(href)) {
    return (
      <MenuButton styles={styles} refs={href}>
        {children}
      </MenuButton>
    )
  } else {
    return href.calendly ? (
      <CalendlyButton styles={styles} url={href.url} disabled={disabled}>
        {children}
      </CalendlyButton>
    ) : (
      <LinkButton styles={styles} url={href.url} external={!!href.external} disabled={disabled}>
        {children}
      </LinkButton>
    )
  }
}
export default PrimaryButton
