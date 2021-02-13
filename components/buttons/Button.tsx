import Link from "next/link"
import { openPopupWidget } from "react-calendly"
import { PopupWidgetOptions } from "react-calendly/typings/components/PopupText/PopupText"
import { IButton, IHref } from "../layout/Interfaces"
import Icon from "../Icon"
import { Menu, Transition } from "@headlessui/react"

const Button = ({ children, href = { url: "", calendly: false }, disabled = false, className = "", type = "dark" }: IButton) => {
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
                      <CalendlyMenuItem label={href.label} url={href.url} />
                    ) : (
                      <LinkMenuItem label={href.label} url={href.url} external={!!href.external} />
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
    <button disabled={disabled} type="button" className={styles} onClick={() => openPopupWidget({ url } as PopupWidgetOptions)}>
      {children}
    </button>
  )
}
const LinkButton = ({ children, styles, url, external, disabled }) => {
  return (
    <Link href={url} passHref={external}>
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
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={url} passHref={external}>
          <a
            className={`${
              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
          >
            {label}
          </a>
        </Link>
      )}
    </Menu.Item>
  )
}
