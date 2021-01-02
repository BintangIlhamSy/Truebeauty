import React from 'react';
import PropTypes from 'prop-types';

const ApprovalCard = (props) => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui three buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic blue button">Revision</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

ApprovalCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ApprovalCard;
