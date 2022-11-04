import { Card } from '../Card';
import { CardHeader } from '../CardHeader/';
import { CardBody } from '../CardBody';
import { Button } from '../Button';
import { PlanWrapper } from '../PlanWrapper';

import freeImg from '../../assets/free.svg';
import proImg from '../../assets/pro.svg';

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

export const AppUI = ({
  starterServices,
  proServices,
  services,
}: AppUIProps): JSX.Element => {
  return (
    <div className="app-ui">
      <Card starter>
        <CardHeader img={freeImg} altImg="Free">
          <PlanWrapper starter planName="Starter" price="Free" />
        </CardHeader>
        <CardBody starter services={starterServices} />
        <Button card starter>
          Get Started
        </Button>
      </Card>
      <Card pro>
        <CardHeader img={proImg} altImg="Pro">
          <PlanWrapper pro planName="Pro" price="$49" />
        </CardHeader>
        <CardBody pro services={proServices} />
        <Button card pro>
          Become a Pro
        </Button>
      </Card>
      <Card teams>
        <CardHeader img={freeImg} altImg="Teams">
          <PlanWrapper teams planName="Teams" price="$99" />
        </CardHeader>
        <CardBody pro services={services} />
        <Button card pro>
          Get Teams
        </Button>
      </Card>
    </div>
  );
};
