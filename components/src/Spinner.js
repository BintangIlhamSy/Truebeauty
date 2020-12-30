import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

const Spinner = (props) => {
  const { message } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="spinner">
      <div className="ui active dimmer">
        <div className="ui large text loader">
          {message}
          <span>...</span>
        </div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};
Spinner.propTypes = {
  message: PropTypes.string,
};
export default Spinner;
