import './Button.scss';
import classNames from 'classnames';
interface ButtonProps {
  children?: React.ReactNode;
  card?: boolean;
  pro?: boolean;
  starter?: boolean;
  teams?: boolean;
}
export const Button = ({
  children,
  pro,
  starter,
  teams,
  card,
}: ButtonProps): JSX.Element => {
  const buttonClasses = classNames('button', {
    card__button: card,
    'card__button--starter': starter && card,
    'card__button--pro': pro && card,
    'card__button--teams': teams && card,
  });
  return <button className={buttonClasses}>{children}</button>;
};
