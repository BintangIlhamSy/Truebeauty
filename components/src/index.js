import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="ui container comments">
      <CommentDetail
        author="Budi"
        avatar={faker.image.image()}
        time="Today at 4.23 PM"
        text="Not bad dude !"
      />
      <CommentDetail
        author="Andi"
        avatar={faker.image.image()}
        time="Yesterday at 3.32 PM"
        text="Dude, chill bro !!"
      />
      <CommentDetail
        author="Rendi"
        avatar={faker.image.image()}
        time="Today at 1.20 AM"
        text="Nice Joke Lol"
      />
      <CommentDetail
        author="Bintang"
        avatar={faker.image.image()}
        time="Now"
        text="Good job mate"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
