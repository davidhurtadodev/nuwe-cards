import { Card } from '../Card';
import { CardHeader } from '../CardHeader/';
import { CardBody } from '../CardBody';

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
      <Card>
        <CardHeader
          planName="Starter"
          price="Free"
          img={freeImg}
          altImg="Free"
        />
        <CardBody services={starterServices} />
      </Card>
      <CardHeader planName="Pro" price="$49" img={proImg} altImg="Pro" />
      <CardHeader planName="Teams" price="$99" />
    </div>
  );
};
