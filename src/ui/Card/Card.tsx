import './Card.scss';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;

  starter?: boolean;
  pro?: boolean;
  teams?: boolean;
}

export const Card = ({
  children,
  starter,
  pro,
  teams,
}: CardProps): JSX.Element => {
  const cardClasses = classNames('card', {
    'card--starter': starter,
    'card--pro': pro,
    'card--teams': teams,
  });

  return <div className={cardClasses}>{children}</div>;
};
