import { Modal } from "../atom-components/Modal"

export function OrderCompleteModal({
  isOrderCompletedOpen,
  handleOrderCompletedClose,
  errorDisplay,
}) {
  return (
    <>
      {isOrderCompletedOpen && (
        <Modal open={isOrderCompletedOpen} close={handleOrderCompletedClose}>
          {errorDisplay ? (
            <p>Not able to place the order. Please try once again.</p>
          ) : (
            <>
              <p>Your Order was submitted successfully.</p>
              <p>
                We will get back to you with more details via email within next
                few minutes.
              </p>
            </>
          )}
          <p className="modal-actions">
            <button className="button" onClick={handleOrderCompletedClose}>
              Okay
            </button>
          </p>
        </Modal>
      )}
    </>
  )
}
