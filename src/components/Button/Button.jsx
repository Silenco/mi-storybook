import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';  // clsx para manejar clases condicionales
import styles from './Button.module.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  label = 'Button',
  ...props
}) => {
  const buttonClass = primary ? styles['button--primary'] : styles['button--secondary'];
  const sizeClass = styles[`button--${size}`];

  return (
    <button
      type="button"
      className={clsx(styles.button, sizeClass, buttonClass)}  // Uso de clsx para combinar las clases
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
   /** 
   * Theme selection for this button.
   * Use the Storybook toolbar to select the theme.
   */
};

Button.defaultProps = {
  primary: false,
  backgroundColor: null,
  size: 'medium',
};
