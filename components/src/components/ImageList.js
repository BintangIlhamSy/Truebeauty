import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element';

const ImageList = (props) => {
  let { images } = props;
  images = images.map((image) => {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Element key={image.id} name="four wide column">
        <img
          className="ui medium rounded image"
          src={image.urls.regular}
          alt={image.description}
          style={{ height: '200px', width: '200px' }}
        />
      </Element>
    );
  });
  return images;
};
ImageList.defaultProps = {
  images: {},
};
ImageList.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default ImageList;
