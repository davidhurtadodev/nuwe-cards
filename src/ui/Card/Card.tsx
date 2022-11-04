import classNames from 'classnames';
import { CardHeader } from '../CardHeader';
import { CardBody } from '../CardBody';
import { PlanWrapper } from '../PlanWrapper';
import { Button } from '../Button';
import './Card.scss';

interface CardProps {
  children?: React.ReactNode;
  imgArray: { src: string; alt: string }[];
  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
  services: {
    name: string;
    included: boolean;
  }[];
  price: string;
  planName: string;
}

export const Card = ({
  imgArray,
  services,

  price,
  planName,
  children,
}: CardProps): JSX.Element => {
  const cardClasses = classNames('card', {
    [`card--${planName}`]: true,
  });

  const cardBodyHeaderContainerClasses = classNames(
    'card__body-header-container',
    {
      [`card__body-header-container--${planName}`]: true,
    }
  );
  const cardButtonContainerClasses = classNames('card__button-container', {
    [`card__button-container--${planName}`]: true,
  });

  return (
    <div className={cardClasses}>
      <div className={cardBodyHeaderContainerClasses}>
        <CardHeader planName={planName} imgArray={imgArray}>
          <PlanWrapper planName={planName} price={price} />
        </CardHeader>
        <CardBody services={services} planName={planName} />
      </div>
      <div className={cardButtonContainerClasses}>{children}</div>
    </div>
  );
};
