import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Input.scss';

const Input = ({
  name,
  type,
  value,
  placeholderID,
  onChange,
  className,
  lableStyleClass,
  inputStyleClass,
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      <label
        htmlFor={name}
        className={`input-wrapper__label ${lableStyleClass}`}
      >
        <FormattedMessage id="form.label" />
      </label>
      <FormattedMessage id="form.label">
        {(placeholder) => (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input-wrapper__field ${inputStyleClass}`}
          />
        )}
      </FormattedMessage>
    </div>
  );
};

export default Input;
