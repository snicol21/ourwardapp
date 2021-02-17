import Icon from "./Icon"
import { Transition } from "@headlessui/react"

const Overlay = () => {
  return (
    <>
      <Transition.Child
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </Transition.Child>
      <Icon name="close" className="absolute right-1 top-2 text-gray-100 h-8 w-8 cursor-pointer" />
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>
    </>
  )
}
export default Overlay
