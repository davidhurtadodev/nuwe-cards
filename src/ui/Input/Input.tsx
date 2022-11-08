import classNames from 'classnames';

import './Input.scss';

interface InputProps {
  customContainer?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label?: string;
  name?: string;
}
export const Input = ({
  type,
  onChange,
  customContainer,
  label,
  name,
}: InputProps) => {
  const inputClasses = classNames('input', {
    [`${customContainer}__input`]: true,
  });
  const inputContainerClasses = classNames('container', {
    [`${customContainer}__input-container`]: true,
  });
  const labelClasses = classNames('label', {
    [`${customContainer}__label`]: true,
  });
  return (
    <div className={inputContainerClasses}>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input name={name} className={inputClasses} type={type} />
    </div>
  );
};
