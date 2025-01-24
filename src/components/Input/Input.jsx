import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // Importamos clsx
import styles from './Input.module.css'; // Importamos los estilos de CSS Modules

export const Input = ({ type, placeholder, value, onChange, isPassword, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Determinamos el tipo del input basado en el estado de la contraseña
  const inputType = isPassword && !showPassword ? 'password' : 'text';

  return (
    <div className={clsx(styles['input-container'], { [styles['password-container']]: isPassword })}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(styles['input-field'], { [styles['input-password']]: isPassword })}
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          className={styles['toggle-password']}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

Input.propTypes = {
  /** Placeholder for the input field */
  placeholder: PropTypes.string.isRequired,
  /** Value for the input field */
  value: PropTypes.string.isRequired,
  /** Change handler */
  onChange: PropTypes.func.isRequired,
  /** Whether the input is for a password */
  isPassword: PropTypes.bool,
};

Input.defaultProps = {
  isPassword: false,
};