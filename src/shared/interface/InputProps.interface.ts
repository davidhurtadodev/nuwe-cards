export interface InputProps {
  customContainer?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label?: string;
  name?: string;
}
