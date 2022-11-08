import { useEffect } from 'react';

import { Card } from '../Card';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';
import teams from '../../assets/teams.svg';
import closeIcon from '../../assets/icons/xmark-solid.svg';

import './AppUI.scss';

interface AppUIProps {
  starterServices: {
    name: string;
    included: boolean;
  }[];
  proServices: {
    name: string;
    included: boolean;
  }[];
  services: {
    name: string;
    included: boolean;
  }[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const starterImgObj = {
  src: freeImg,
  alt: 'Starter',
};
const proImgObj = {
  src: proImg,
  alt: 'Pro',
};

const teamsImgObj = {
  src: teams,
  alt: 'Teams',
};

export const AppUI = ({
  starterServices,
  proServices,
  services,
  showModal,
  setShowModal,
}: AppUIProps): JSX.Element => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    if (!showModal) {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);
  return (
    <div
      style={showModal ? { overflow: 'hidden' } : { overflow: 'auto' }}
      className="app-ui"
    >
      {showModal ? (
        <Modal>
          <img
            onClick={() => setShowModal(!showModal)}
            src={closeIcon}
            className="modal__close-icon"
          />
          <p className="modal__text">
            Enter your email for further information
          </p>
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
            <div className="modal__button-container">
              <Button
                onClick={() => setShowModal(!showModal)}
                type="button"
                customBlock="modal"
                customModifier="close"
              >
                Return
              </Button>
            </div>
          </form>
        </Modal>
      ) : null}
      <Card
        services={starterServices}
        imgObj={starterImgObj}
        planName="starter"
        price="Free"
      >
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
          // card
          // starter
          type={'button'}
          customBlock="card"
          customModifier="starter"
        >
          Get Started
        </Button>
      </Card>
      <Card
        services={proServices}
        imgObj={proImgObj}
        planName="pro"
        price="$49"
      >
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
          // card
          // pro
          type={'button'}
          customBlock="card"
          customModifier="pro"
        >
          Become a Pro
        </Button>
      </Card>
      <Card
        services={services}
        imgObj={teamsImgObj}
        planName="teams"
        price="$99"
      >
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
          // card
          // teams
          type={'button'}
          customBlock="card"
          customModifier="teams"
        >
          Get Teams
        </Button>
      </Card>
    </div>
  );
};
