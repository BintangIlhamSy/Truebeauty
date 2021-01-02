import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Element from './Element';
import Menu from './Menu';
import Gap from './Gap';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message.toString() });
      }
    );
  }

  onSearchSubmit = (term) => {
    console.log(term);
  };

  printLocationResult() {
    const { lat, errorMessage } = this.state;
    if (!lat && errorMessage) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div>
          Error Message:
          {errorMessage}
        </div>
      );
    }
    if (lat && !errorMessage) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <SeasonDisplay latitude={lat} />
      );
    }
    // eslint-disable-next-line react/jsx-filename-extension
    return <Spinner message="Please allow us to know your location" />;
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Menu name="ui top fixed menu" menulist={['About']} />
        <Gap number={5} />
        <Element name="ui stackable equal width grid container">
          <Element name="two column row">
            <Element name="column">
              <h2 className="ui header">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_1280.jpg"
                  className="ui circular image"
                  alt="header 1"
                />
                <span>Section 3 : Communicating with props</span>
              </h2>
            </Element>
          </Element>
          <Element name="two column row">
            <Element name="six width column">
              <ApprovalCard>
                <CommentDetail
                  author="Budi"
                  avatar={faker.image.image()}
                  time="Today at 4.23 PM"
                  text="Not bad dude !"
                />
              </ApprovalCard>
              <ApprovalCard>
                <CommentDetail
                  author="Andi"
                  avatar={faker.image.image()}
                  time="Yesterday at 3.32 PM"
                  text="Dude, chill bro !!"
                />
              </ApprovalCard>
            </Element>
            <Element name="six width column">
              <ApprovalCard>
                <CommentDetail
                  author="Rendi"
                  avatar={faker.image.image()}
                  time="Today at 1.20 AM"
                  text="Nice Joke Lol"
                />
              </ApprovalCard>
              <ApprovalCard>
                <CommentDetail
                  author="Bintang"
                  avatar={faker.image.image()}
                  time="Now"
                  text="Good job mate"
                />
              </ApprovalCard>
            </Element>
          </Element>
          <Element name="two column row">
            <Element name="column">
              <h2 className="ui header">
                <img
                  src="https://www.channelfutures.com/files/2018/09/Four-4-2018.jpg"
                  className="ui circular image"
                  alt="header 1"
                />
                Section 4 & 5 & 6 : Class component, state, and lifecycle
              </h2>
            </Element>
          </Element>
          <Gap number={2} />
          <Element name="row">
            <Element name="column">{this.printLocationResult()}</Element>
          </Element>
          <Element name="two column row">
            <Element name="column">
              <h2 className="ui header">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/04/19/13/seven-706891_1280.jpg"
                  className="ui circular image"
                  alt="header 1"
                />
                Section 7 & 8 & 9: Handling user input (without databases) and
                show list using API
              </h2>
            </Element>
          </Element>
          <Gap number={3} />
          <Element name="ui stackable two column grid">
            <Element name="column">
              <h2 className="ui header">
                <img
                  src="https://i.ytimg.com/vi/_NltVXqwGQw/maxresdefault.jpg"
                  className="ui circular image"
                  alt="search logo"
                />
                Image search engine
              </h2>
            </Element>
            <Element name="column">
              <SearchBar onSubmit={this.onSearchSubmit} />
            </Element>
          </Element>
        </Element>
      </div>
    );
  }
}

export default App;
