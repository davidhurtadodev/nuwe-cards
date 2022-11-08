import { useEffect } from 'react';

import { Card } from '../Card';
import { Button } from '../Button';
import { Modal } from '../Modal';

import {
  starterServices,
  proServices,
  teamServices,
} from '../../application/services';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';
import teams from '../../assets/teams.svg';

import { AppUIProps } from '../../shared/interface/AppUIProps.interface';

import './AppUI.scss';

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

export const AppUI = ({ showModal, setShowModal }: AppUIProps): JSX.Element => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100%';
    }
    if (!showModal) {
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
    }
  }, [showModal]);

  return (
    <div className="app-ui">
      {showModal ? (
        <Modal setShowModal={setShowModal} showModal={showModal} />
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
          type="button"
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
          type="button"
          customBlock="card"
          customModifier="pro"
        >
          Become a Pro
        </Button>
      </Card>
      <Card
        services={teamServices}
        imgObj={teamsImgObj}
        planName="teams"
        price="$99"
      >
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
          type="button"
          customBlock="card"
          customModifier="teams"
        >
          Get Teams
        </Button>
      </Card>
    </div>
  );
};
