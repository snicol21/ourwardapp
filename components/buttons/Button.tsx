import Link from "next/link"
import { openPopupWidget } from "react-calendly"
import { Menu, Transition } from "@headlessui/react"
import { PopupWidgetOptions } from "react-calendly/typings/components/PopupText/PopupText"
import { IHref, IButtonColor } from "../shared/Interfaces"
import Icon from "../shared/Icon"

export type IButton = {
  children: React.ReactNode
  color?: IButtonColor
  disabled?: boolean
  href?: IHref | IHref[]
  className?: string
  type?: "dark" | "light" | "link"
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

const Button = ({ children, color = "primary", href = { url: "", calendly: false }, disabled = false, className = "", type = "dark" }: IButton) => {
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

  if (Array.isArray(href)) {
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
export default Button

const MenuButton = ({ children, styles, refs }) => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className={styles}>
                <span>{children}</span>
                <Icon name="chevron-down" />
              </Menu.Button>
            </span>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  {refs.map((href: IHref) =>
                    href.calendly ? (
                      <CalendlyMenuItem key={href.label} label={href.label} url={href.url} />
                    ) : (
                      <LinkMenuItem key={href.label} label={href.label} url={href.url} external={!!href.external} />
                    )
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}
const CalendlyButton = ({ children, styles, url, disabled }) => {
  return (
    <button disabled={disabled} type="button" className={styles} onClick={() => openPopupWidget({ url, pageSettings: {} } as PopupWidgetOptions)}>
      {children}
    </button>
  )
}
const LinkButton = ({ children, styles, url, external, disabled }) => {
  return external ? (
    <a href={url} target="_blank">
      <button disabled={disabled} type="button" className={styles}>
        {children}
      </button>
    </a>
  ) : (
    <Link href={url}>
      <button disabled={disabled} type="button" className={styles}>
        {children}
      </button>
    </Link>
  )
}
const CalendlyMenuItem = ({ label, url }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          className={`${
            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
          onClick={() => openPopupWidget({ url })}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  )
}
const LinkMenuItem = ({ label, url, external }) => {
  const styles = "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
  return (
    <Menu.Item>
      {({ active }) =>
        external ? (
          <a href={url} target="_blank" className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} styles`}>
            {label}
          </a>
        ) : (
          <Link href={url}>
            <a className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} styles`}>{label}</a>
          </Link>
        )
      }
    </Menu.Item>
  )
}
