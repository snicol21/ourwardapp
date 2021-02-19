import { useState } from "react"
import ModalAnnouncement from "../modals/ModalAnnouncement"
import { hideBodyScroll } from "../shared/Utilities"
import ModalWrapper from "../modals/ModalWrapper"

const ModalButton = ({ children, styles, disabled, modal }) => {
  const [showModal, setShowModal] = useState(false)
  const Modal = () => {
    switch (modal.type) {
      case "announcement":
        return <ModalAnnouncement {...modal} />
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
