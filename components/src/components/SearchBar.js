import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    const { term } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            value={term}
            placeholder="Insert keyword ...."
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
          <i className="search icon" />
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
