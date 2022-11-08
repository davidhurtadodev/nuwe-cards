export interface ButtonProps {
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
