import './CardHeader.scss';
import classNames from 'classnames';

interface CardHeaderProps {
  img?: any;
  altImg?: any;
  planName: string;
  price: string;
  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
}

export const CardHeader = ({
  img,
  altImg,
  planName,
  price,
  starter,
  pro,
  teams,
}: CardHeaderProps): JSX.Element => {
  const cardPlanWrapper = classNames('plan-wrapper card__plan-wrapper', {
    'card__plan-wrapper--pro': pro,
    'card__plan-wrapper--starter': starter,
    'card__plan-wrapper--teams': teams,
  });
  return (
    <div className="card__header">
      <div className="card__img-container">
        <img src={img} alt={altImg} />
      </div>
      <div className={cardPlanWrapper}>
        <span className="plan-wrapper__name">{planName}</span>
        <h2 className="plan-wrapper__price">{price}</h2>
        <span className="plan-wrapper__time">per month</span>
      </div>
    </div>
  );
};
