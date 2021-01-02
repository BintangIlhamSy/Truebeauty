import React from 'react';
import PropTypes from 'prop-types';

const Element = (props) => {
  const { children, name } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={name}>{children}</div>
  );
};

Element.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Element;
