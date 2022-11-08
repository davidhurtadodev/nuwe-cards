import classNames from 'classnames';

import { PlanWrapperProps } from '../../shared/interface/PlanWrapperProps.interface';
import './PlanWrapper.scss';

export const PlanWrapper = ({ planName, price }: PlanWrapperProps) => {
  const cardPlanWrapperClasses = classNames('plan-wrapper card__plan-wrapper', {
    [`card__plan-wrapper--${planName}`]: true,
  });

  return (
    <div className={cardPlanWrapperClasses}>
      <span className="plan-wrapper__name">{`${planName
        .charAt(0)
        .toUpperCase()}${planName.slice(1)}`}</span>
      <h2 className="plan-wrapper__price">{price}</h2>
      <span className="plan-wrapper__time">per month</span>
    </div>
  );
};
