import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';  // clsx para manejar clases condicionales
import styles from './Button.module.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label = 'Click me',
  ...props
}) => {
  const mode = primary ? styles['button--primary'] : styles['button--secondary'];
  const sizeClass = styles[`button--${size}`];

  return (
    <button
      type="button"
      className={clsx(styles.button, sizeClass, mode)}  // Uso de clsx para combinar las clases
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  backgroundColor: null,
  size: 'medium',
};
