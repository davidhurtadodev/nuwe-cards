interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps): JSX.Element => {
  return <div className="card">{children}</div>;
};
