import './CardBody.scss';
import classNames from 'classnames';
interface CardBodyProps {
  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
  services: {
    name: string;
    included: boolean;
  }[];
}

export const CardBody = ({ services, starter, pro, teams }: CardBodyProps) => {
  return (
    <div className="card__body">
      <ul className="card__list">
        {services.map((service) => {
          const cardLiClasses = classNames('card__li', {
            'card__li-starter--inactive card__li-starter':
              !service.included && starter,
            'card__li-teams--inactive card__li-teams':
              !service.included && teams,
            'card__li-pro--inactive card__li-pro': !service.included && pro,
            'card__li-starter': service.included && starter,
            'card__li-teams': service.included && teams,
            'card__li-pro': service.included && pro,
          });
          return <li className={cardLiClasses}>{service.name}</li>;
        })}
      </ul>
    </div>
  );
};
