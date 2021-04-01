import { Dispatch, SetStateAction } from "react"
import { Transition } from "@headlessui/react"
import { useEffect, useRef } from "react"
import Icon from "../../elements/icons/Icon"
import { hideBodyScroll } from "../../../shared/utils/document.util"
import React from "react"

export type IModalWrapper = {
  id: string
  children: React.ReactNode
  closeOnClickOutside: boolean
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  className?: string
}

const ModalWrapper = ({ id, children, closeOnClickOutside, showModal, setShowModal, className = "" }: IModalWrapper) => {
  const targetElement = useRef(null)

  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  useEffect(() => {
    if (!closeOnClickOutside) {
      return
    }
    const clickHandler = ({ target }) => {
      if (!showModal || targetElement.current.contains(target)) {
        return
      }
      toggleModal()
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!showModal || keyCode !== 27) {
        return
      }
      toggleModal()
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <Transition show={showModal} className="fixed z-10 inset-0 overflow-hidden">
      <Transition.Child
        className="fixed inset-0 transition-opacity"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-10 inset-0 bg-gray-600 opacity-75"></div>
        <button className="absolute z-20 right-2 top-2 text-white cursor-pointer" onClick={toggleModal}>
          <Icon name="close" className="h-8 w-8" />
        </button>
      </Transition.Child>

      <div className="z-20 flex justify-center h-screen w-screen overflow-y-auto mt-12">
        <div className={`${className}`}>
          <div className="pb-32">
            <Transition.Child
              id={id}
              className="transform transition-all bg-white text-left shadow-xl sm:overflow-hidden sm:rounded-lg"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div ref={targetElement}>
                {React.Children.map(children, (child) => {
                  return React.cloneElement(child as React.ReactElement<any>, { toggleModal })
                })}
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default ModalWrapper
