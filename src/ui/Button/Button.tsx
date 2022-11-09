import classNames from 'classnames';

import { ButtonProps } from '../../shared/interface/ButtonProps.interface';

import './Button.scss';

export const Button = ({
  children,
  pro,
  starter,
  teams,
  card,
  modal,
  onClick,
  customBlock,
  customModifier,
  type,
}: ButtonProps): JSX.Element => {
  const buttonClasses = classNames('button', {
    [`${customBlock}__button`]: true,
    ...(customModifier && {
      [`${customBlock}__button--${customModifier}`]: true,
    }),
    // card__button: card,
    // 'card__button--starter': starter && card,
    // 'card__button--pro': pro && card,
    // 'card__button--teams': teams && card,
  });
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
