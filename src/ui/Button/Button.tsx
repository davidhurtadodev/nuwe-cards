import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  customBlock: string;
  customModifier?: string;
  children?: React.ReactNode;
  card?: boolean;
  pro?: boolean;
  starter?: boolean;
  teams?: boolean;
  modal?: boolean;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
}
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
