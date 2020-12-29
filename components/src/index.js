import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Element from './Element';
import Menu from './Menu';
import Gap from './Gap';

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Menu name="ui top fixed menu" menulist={['About']} />
      <Gap number={5} />
      <Element name="ui stackable equal width grid container">
        <Element name="row">
          <h2 className="ui header">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_1280.jpg"
              className="ui circular image"
              alt="header 1"
            />
            Section 3
          </h2>
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
      </Element>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
