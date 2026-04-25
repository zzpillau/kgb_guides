import { useEffect } from 'react'
import closeIcon from '../../assets/icons/close.svg'
import Button from './Button.jsx'

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    isOpen
      ? document.body.classList.add('open-modal')
      : document.body.classList.remove('open-modal')

    return () => {
      document.body.classList.remove('open-modal')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__container flex-column"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="close-btn"
          icon={<img src={closeIcon} alt="close" />}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
