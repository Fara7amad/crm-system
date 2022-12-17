import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ConfirmationModal({ handleConfirmed, onClose, isOpen }) {
	const onConfirm = () => {
		handleConfirmed();

		onClose();
	};

	return (
		<Modal show={isOpen} onHide={onClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Are You Sure?</Modal.Title>
			</Modal.Header>
			<Modal.Body>You cannot undo this action.</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={onConfirm}>
					Yes
				</Button>
				<Button variant="secondary" onClick={onClose}>
					No
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default ConfirmationModal;
