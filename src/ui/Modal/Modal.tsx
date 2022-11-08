import './Modal.scss';
interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__body">{children}</div>
    </div>
  );
};
