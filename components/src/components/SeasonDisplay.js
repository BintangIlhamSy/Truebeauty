import React from 'react';
import PropTypes from 'prop-types';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach !",
    iconType: 'sun',
  },
  winter: {
    text: "Burr, it's chilly!",
    iconType: 'snowflake',
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = (props) => {
  const { latitude } = props;
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconType } = seasonConfig[season];
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconType} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconType} icon`} />
    </div>
  );
};

SeasonDisplay.propTypes = {
  latitude: PropTypes.number.isRequired,
};
export default SeasonDisplay;
