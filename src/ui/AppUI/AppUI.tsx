import { Card } from '../Card';
import { CardHeader } from '../CardHeader/';
import { CardBody } from '../CardBody';
import { Button } from '../Button';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';

interface AppUIProps {
  starterServices: {
    name: string;
    included: boolean;
  }[];
}

export const AppUI = ({ starterServices }: AppUIProps): JSX.Element => {
  return (
    <div className="app-ui">
      <Card starter>
        <CardHeader
          planName="Starter"
          price="Free"
          img={freeImg}
          altImg="Free"
        />
        <CardBody starter services={starterServices} />
        <Button card starter>
          Get Started
        </Button>
      </Card>
      <Card pro>
        <CardHeader planName="Pro" price="$49" img={proImg} altImg="Pro" />
        <CardBody pro services={starterServices} />
        <Button card pro>
          Get Started
        </Button>
      </Card>
      <CardHeader planName="Teams" price="$99" />
    </div>
  );
};
