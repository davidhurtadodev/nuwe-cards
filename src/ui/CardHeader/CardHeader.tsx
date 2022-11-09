import classNames from 'classnames';
import { isArgumentsObject } from 'util/types';
import { PlanWrapper } from '../PlanWrapper';
import './CardHeader.scss';

interface CardHeaderProps {
  imgObj: { src: string; alt: string };
  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
  children?: React.ReactNode;
  planName: string;
}

export const CardHeader = ({
  imgObj,
  planName,
  children,
}: CardHeaderProps): JSX.Element => {
  const cardHeaderClasses = classNames('card__header', {
    [`card__header--${planName}`]: true,
  });

  return (
    <div className={cardHeaderClasses}>
      <div className="card__img-container">
        <img src={imgObj.src} alt={imgObj.alt} />
      </div>
      {children}
    </div>
  );
};
