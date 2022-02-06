import { IColor, ILink, IModal } from "../../../shared/types"
import CalendlyButton from "./CalendlyButton"
import LinkButton from "./LinkButton"
import MenuButton from "./MenuButton"
import ModalButton from "./ModalButton"

export type IPrimaryButton = {
  children: React.ReactNode
  color?: IColor
  disabled?: boolean
  link?: ILink | ILink[]
  className?: string
  type?: "dark" | "light" | "link" | "pass-thru"
  size?: "xs" | "sm" | "md" | "lg"
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

const getSize = {
  xs: "text-xs px-6 py-1 lg:py-2",
  sm: "text-sm px-6 py-1 lg:py-2",
  md: "text-base px-12 py-2 lg:py-3",
  lg: "text-lg px-16 py-3 lg:py-4",
}

const PrimaryButton = ({
  children,
  color = "primary",
  link = { url: "", calendly: false },
  disabled = false,
  className = "",
  type = "dark",
  size = "md",
  modal = undefined,
}: IPrimaryButton) => {
  const baseStyles = `${className} font-medium focus:outline-none border border-transparent rounded-md inline-flex items-center`
  let styles: string
  switch (type) {
    case "light":
      styles = `${baseStyles} ${getColor.light[color]} ${getSize[size]} shadow bg-white`
      break
    case "link":
      styles = `${baseStyles} ${getColor.link[color]}`
      break
    case "pass-thru":
      styles = `${className}`
      break
    case "dark":
    default:
      styles = `${baseStyles} ${getColor.dark[color]} ${getSize[size]} shadow text-white`
  }

  if (modal) {
    return (
      <ModalButton styles={styles} disabled={disabled} modal={modal}>
        {children}
      </ModalButton>
    )
  } else if (Array.isArray(link)) {
    return (
      <MenuButton styles={styles} links={link}>
        {children}
      </MenuButton>
    )
  } else {
    return link.calendly ? (
      <CalendlyButton styles={styles} url={link.url} disabled={disabled}>
        {children}
      </CalendlyButton>
    ) : (
      <LinkButton styles={styles} url={link.url} external={!!link.external} disabled={disabled}>
        {children}
      </LinkButton>
    )
  }
}
export default PrimaryButton
