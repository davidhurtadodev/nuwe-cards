interface ButtonProps {
  children?: React.ReactNode;
  classes: string;
}
export const Button = ({ children, classes }: ButtonProps): JSX.Element => {
  return <button className={`button ${classes}`}>{children}</button>;
};
