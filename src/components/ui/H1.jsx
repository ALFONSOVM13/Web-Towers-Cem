import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ children, className }) => {
  return (
    <h1 className={`text-3xl font-title md:text-4xl animate-jump-in text-shadow-xl lg:text-5xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

H1.defaultProps = {
  className: '',
};

export default H1;
