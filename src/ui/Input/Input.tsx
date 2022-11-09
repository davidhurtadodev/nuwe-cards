import classNames from 'classnames';

import { InputProps } from '../../shared/interface/InputProps.interface';

import './Input.scss';

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
      {label ? (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      ) : null}
      <input name={name} className={inputClasses} type={type} />
    </div>
  );
};
