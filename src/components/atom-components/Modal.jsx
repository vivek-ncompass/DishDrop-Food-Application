import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export function Modal({ open, close, children, classNameProp = "" }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog} onClose={close} className={"modal " + classNameProp}>
      {open && children}
    </dialog>,
    document.getElementById("modal")
  )
}
