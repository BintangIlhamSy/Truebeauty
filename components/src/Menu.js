import React from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { name, menulist } = props;
  const items = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const value of menulist.entries()) {
    items.push(
      // eslint-disable-next-line react/jsx-filename-extension
      <a href="/" className="item">
        {value[1]}
      </a>
    );
  }
  return (
    <div className={name}>
      <div className="item">
        <img
          src="https://previews.123rf.com/images/hartgraphic/hartgraphic1903/hartgraphic190300074/119817083-red-star-vector-sign-star-icon-star-logo-star-symbol-star-app-star-web-star-vector-isolated-on-white.jpg"
          style={{ height: '50px', width: '50px' }}
          alt="logo"
        />
      </div>
      {items}
    </div>
  );
};

Menu.propTypes = {
  name: PropTypes.string.isRequired,
  menulist: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
