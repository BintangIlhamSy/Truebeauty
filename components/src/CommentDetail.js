import React from 'react';
import PropTypes from 'prop-types';

const CommentDetail = (props) => {
  const { author, avatar, time, text } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};
CommentDetail.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CommentDetail;
