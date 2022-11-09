import { Input } from '../Input';
import { Button } from '../Button';

import closeIcon from '../../assets/icons/xmark-solid.svg';

import { ModalProps } from '../../shared/interface/ModalProps.interface';

import './Modal.scss';

export const Modal = ({ setShowModal, showModal }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <img
          onClick={() => setShowModal(!showModal)}
          src={closeIcon}
          className="modal__close-icon"
        />
        <p className="modal__text">Enter your email for further information</p>
        <form>
          <Input
            label="Email"
            name="email"
            type="email"
            customContainer="modal"
          />
          <div className="modal__button-container">
            <Button
              onClick={() => setShowModal(!showModal)}
              type="button"
              customBlock="modal"
              customModifier="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
