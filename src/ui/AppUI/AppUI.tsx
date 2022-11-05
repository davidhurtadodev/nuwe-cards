import { Card } from '../Card';
import { Button } from '../Button';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';
import teams from '../../assets/teams.svg';

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
}: AppUIProps): JSX.Element => {
  return (
    <div className="app-ui">
      <Card
        services={starterServices}
        imgObj={starterImgObj}
        planName="starter"
        price="Free"
      >
        <Button card starter>
          Get Started
        </Button>
      </Card>
      <Card
        services={proServices}
        imgObj={proImgObj}
        planName="pro"
        price="$49"
      >
        <Button card pro>
          Become a Pro
        </Button>
      </Card>
      <Card
        services={services}
        imgObj={teamsImgObj}
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
