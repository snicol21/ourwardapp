import { useState } from "react"
import { hideBodyScroll } from "../../../shared/utils/document.util"
import ModalWrapper from "../../modules/modals/ModalWrapper"
import ModalEvent from "../../modules/modals/ModalEvent/ModalEvent"
import ModalEventAction from "../../modules/modals/ModalEvent/ModalEventAction/ModalEventAction"
import ModalEventActionAdd from "../../modules/modals/ModalEvent/ModalEventAction/ModalEventActionAdd"

const ModalButton = ({ children, styles, disabled, modal }) => {
  const [showModal, setShowModal] = useState(false)
  const Modal = () => {
    switch (modal.type) {
      case "event":
        return <ModalEvent {...modal} />
      case "event-action":
        return <ModalEventAction {...modal} />
    }
  }
  const toggleModal = () => {
    hideBodyScroll(!showModal)
    setShowModal(!showModal)
  }

  return (
    <>
      <button disabled={disabled} type="button" className={styles} onClick={toggleModal}>
        {children}
      </button>
      <ModalWrapper id={modal.title} showModal={showModal} setShowModal={setShowModal}>
        <Modal />
      </ModalWrapper>
    </>
  )
}
export default ModalButton
