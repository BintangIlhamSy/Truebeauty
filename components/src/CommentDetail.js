import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 PM</span>
        </div>
        <div className="text">Nice blog post !</div>
      </div>
    </div>
  );
};

export default CommentDetail;
