import classNames from 'classnames';
import { PlanWrapper } from '../PlanWrapper';
import './CardHeader.scss';

interface CardHeaderProps {
  img?: any;
  altImg?: any;

  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
  children?: React.ReactNode;
}

export const CardHeader = ({
  img,
  altImg,
  starter,
  pro,
  teams,
  children,
}: CardHeaderProps): JSX.Element => {
  const cardHeaderClasses = classNames('card__header', {
    'card__header--pro': pro,
    'card__header--starter': starter,
    'card__header--teams': teams,
  });

  return (
    <div className={cardHeaderClasses}>
      <div className="card__img-container">
        <img src={img} alt={altImg} />
      </div>
      {children}
    </div>
  );
};
