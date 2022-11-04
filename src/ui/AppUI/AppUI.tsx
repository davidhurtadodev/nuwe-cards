import { Card } from '../Card';
import { CardHeader } from '../CardHeader/';
import { CardBody } from '../CardBody';
import { Button } from '../Button';
import { PlanWrapper } from '../PlanWrapper';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';
import teamLeft from '../../assets/teams-left.svg';
import teamMiddle from '../../assets/teams-middle.svg';
import teamRight from '../../assets/teams-right.svg';

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
}

const starterImgArray = [
  {
    src: freeImg,
    alt: 'Starter',
  },
];
const proImgArray = [
  {
    src: proImg,
    alt: 'Pro',
  },
];
const teamsImgArray = [
  {
    src: teamLeft,
    alt: 'Teams',
  },
  {
    src: teamMiddle,
    alt: 'Teams',
  },
  {
    src: teamRight,
    alt: 'Teams',
  },
];

export const AppUI = ({
  starterServices,
  proServices,
  services,
}: AppUIProps): JSX.Element => {
  return (
    <div className="app-ui">
      <Card
        services={starterServices}
        imgArray={starterImgArray}
        planName="starter"
        price="Free"
      >
        <Button card starter>
          Get Started
        </Button>
      </Card>
      <Card
        services={proServices}
        imgArray={proImgArray}
        planName="pro"
        price="$49"
      >
        <Button card pro>
          Become a Pro
        </Button>
      </Card>
      <Card
        services={services}
        imgArray={teamsImgArray}
        planName="teams"
        price="$99"
      >
        <Button card teams>
          Get Teams
        </Button>
      </Card>
    </div>
  );
};
