import React from 'react';
import PropTypes from 'prop-types';

const Gap = (props) => {
  const { number } = props;
  const items = [];

  // eslint-disable-next-line no-restricted-syntax
  for (let x = 0; x < number; x += 1) {
    items.push(
      // eslint-disable-next-line react/jsx-filename-extension
      <br key={x.toString()} />
    );
  }
  return items;
};

Gap.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Gap;
