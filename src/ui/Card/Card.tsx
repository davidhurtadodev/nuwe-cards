import classNames from 'classnames';

import { CardHeader } from '../CardHeader';
import { CardBody } from '../CardBody';
import { PlanWrapper } from '../PlanWrapper';

import { CardProps } from '../../shared/interface/CardProps.interface';

import './Card.scss';

export const Card = ({
  imgObj,
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
        <CardHeader planName={planName} imgObj={imgObj}>
          <PlanWrapper planName={planName} price={price} />
        </CardHeader>
        <CardBody services={services} planName={planName} />
      </div>
      <div className={cardButtonContainerClasses}>{children}</div>
    </div>
  );
};
