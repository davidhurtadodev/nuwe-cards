import classNames from 'classnames';
import { classNameBooleans } from '../../shared/interface/classNames.interface';

interface PlanWrapperProps {
  planName: string;
  price: string;
}

export const PlanWrapper = ({
  pro,
  starter,
  teams,
  planName,
  price,
}: PlanWrapperProps & classNameBooleans) => {
  const cardPlanWrapperClasses = classNames('plan-wrapper card__plan-wrapper', {
    'card__plan-wrapper--pro': pro,
    'card__plan-wrapper--starter': starter,
    'card__plan-wrapper--teams': teams,
  });

  return (
    <div className={cardPlanWrapperClasses}>
      <span className="plan-wrapper__name">{planName}</span>
      <h2 className="plan-wrapper__price">{price}</h2>
      <span className="plan-wrapper__time">per month</span>
    </div>
  );
};
