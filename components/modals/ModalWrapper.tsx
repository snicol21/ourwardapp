import { Transition } from "@headlessui/react"
import { useEffect, useRef } from "react"
import Icon from "../shared/Icon"
import { IModalWrapper } from "../shared/Interfaces"
import { hideBodyScroll } from "../shared/Utilities"

const ModalWrapper = ({ id, children, showModal, setShowModal }: IModalWrapper) => {
  const modalContent = useRef(null)

  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!showModal || modalContent.current.contains(target)) {
        return
      }
      toggleModal()
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) {
        return
      }
      toggleModal()
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })
  return (
    <Transition show={showModal}>
      <div className="fixed z-10 inset-0 top-12 -bottom-12 overflow-y-auto">
        <div className="flex items-start justify-center min-h-screen text-center sm:block sm:p-0">
          <Transition.Child
            className="fixed inset-0 transition-opacity overflow-visible"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute z-10 inset-0 bg-gray-500 opacity-75"></div>
            <Icon name="close" className="z-20 absolute right-2 top-2 text-white h-8 w-8 cursor-pointer " />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <div
            ref={modalContent}
            className="z-20 inline-block align-bottom sm:align-middle sm:max-w-xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <Transition.Child
              id={id}
              className="transform transition-all bg-white text-left overflow-hidden shadow-xl mb-12 sm:rounded-lg"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default ModalWrapper
