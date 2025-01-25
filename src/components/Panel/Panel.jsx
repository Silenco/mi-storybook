import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Panel.module.css';

/** Panel component to center and style its children */
export const Panel = ({
  children,
  width = '300px',
  height = '200px',
  backgroundColor = '#f0f0f0',
  borderRadius = '8px',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('panel', className)}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Panel.propTypes = {
  /** Content to display inside the panel */
  children: PropTypes.node.isRequired,
  /** Width of the panel */
  width: PropTypes.string,
  /** Height of the panel */
  height: PropTypes.string,
  /** Background color of the panel */
  backgroundColor: PropTypes.string,
  /** Border radius of the panel */
  borderRadius: PropTypes.string,
  /** Additional className for styling */
  className: PropTypes.string,
};
