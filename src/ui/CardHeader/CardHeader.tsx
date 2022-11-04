import classNames from 'classnames';
import { PlanWrapper } from '../PlanWrapper';
import './CardHeader.scss';

interface CardHeaderProps {
  imgArray: { src: string; alt: string }[];
  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
  children?: React.ReactNode;
  planName: string;
}

export const CardHeader = ({
  imgArray,
  planName,
  starter,
  pro,
  teams,
  children,
}: CardHeaderProps): JSX.Element => {
  const cardHeaderClasses = classNames('card__header', {
    // 'card__header--pro': pro,
    // 'card__header--starter': starter,
    // 'card__header--teams': teams,
    [`card__header--${planName}`]: true,
  });

  return (
    <div className={cardHeaderClasses}>
      <div className="card__img-container">
        {imgArray.map(({ src, alt }) => {
          return <img src={src} alt={alt} />;
        })}
      </div>
      {children}
    </div>
  );
};
