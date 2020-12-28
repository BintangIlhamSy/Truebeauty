import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="ui container comments">
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
