import './CardBody.scss';
import classNames from 'classnames';

import { CardBodyProps } from '../../shared/interface/CardBodyProps.interface';

export const CardBody = ({ services, planName }: CardBodyProps) => {
  return (
    <div className="card__body">
      <ul className="card__list">
        {services.map((service) => {
          const cardLiClasses = classNames('card__li', {
            'card__li-starter--inactive card__li-starter':
              !service.included && planName === 'starter',
            'card__li-teams--inactive card__li-teams':
              !service.included && planName === 'teams',
            'card__li-pro--inactive card__li-pro':
              !service.included && planName === 'pro',
            'card__li-starter': service.included && planName === 'starter',
            'card__li-teams': service.included && planName === 'teams',
            'card__li-pro': service.included && planName === 'pro',
          });
          return <li className={cardLiClasses}>{service.name}</li>;
        })}
      </ul>
    </div>
  );
};
