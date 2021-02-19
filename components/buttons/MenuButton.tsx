import Link from "next/link"
import { Menu, Transition } from "@headlessui/react"
import { openPopupWidget } from "react-calendly"
import Icon from "../shared/Icon"
import { IHref } from "../shared/Interfaces"

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
export default MenuButton

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
