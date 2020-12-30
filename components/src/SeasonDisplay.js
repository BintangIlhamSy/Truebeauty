import React from 'react';
import PropTypes from 'prop-types';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  return lat > 0 ? 'Winter' : 'Summer';
};

const SeasonDisplay = (props) => {
  const { latitude } = props;
  const season = getSeason(latitude, new Date().getMonth());
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="ui container">
      <h1>
        {season === 'Summer' ? "Let's hit the beach" : "Burr, it's chilly!"}
      </h1>
    </div>
  );
};

SeasonDisplay.propTypes = {
  latitude: PropTypes.number.isRequired,
};
export default SeasonDisplay;
