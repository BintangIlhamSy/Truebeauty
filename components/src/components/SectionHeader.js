import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = (props) => {
  const { linkImage, headerText } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <h2 className="ui header">
        <img
          src={linkImage}
          className="ui circular image"
          alt="header section"
        />
        {headerText}
      </h2>
      <div className="ui section divider" />
    </div>
  );
};

SectionHeader.propTypes = {
  linkImage: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default SectionHeader;
