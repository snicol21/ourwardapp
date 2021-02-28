import { useState } from "react"
import { hideBodyScroll } from "../../../shared/utils/document.util"
import ModalWrapper from "../../modules/modals/ModalWrapper"
import ModalEvent from "../../modules/modals/ModalEvent/ModalEvent"
// import ModalEventAction from "../../modules/modals/ModalEvent/ModalEventAction/ModalEventAction"

const ModalButton = ({ children, styles, disabled, modal }) => {
  const [showModal, setShowModal] = useState(false)
  const Modal = () => {
    const wrapperProps = { id: modal.title, showModal: showModal, setShowModal: setShowModal }
    switch (modal.type) {
      case "event":
        return (
          <ModalWrapper {...wrapperProps} closeOnClickOutside={true} className="w-full md:mt-10 lg:mt-20 sm:max-w-xl">
            <ModalEvent {...modal} />
          </ModalWrapper>
        )
      // case "event-action":
      //   return (
      //     <ModalWrapper {...wrapperProps} closeOnClickOutside={false} className="md:mt-10 w-full sm:max-w-xl md:max-w-3xl xl:max-w-6xl">
      //       <ModalEventAction {...modal} />
      //     </ModalWrapper>
      //   )
    }
  }
  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  return (
    <>
      <button disabled={disabled} type="button" className={`${styles} ${disabled ? "disabled:opacity-50" : ""}`} onClick={toggleModal}>
        {children}
      </button>
      <Modal />
    </>
  )
}
export default ModalButton
