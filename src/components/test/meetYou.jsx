// @flow
import React from 'react';

const HelloName = (props:{name:string}) => {
  const { name } = props;
  return (
    <h1>
      Hello,
      { name }
      ！
    </h1>
  );
};

const MeetYou = () => (
  <div>
    {<HelloName name="mama" />}
    {<HelloName name="mader" />}
    <h2>Nice to meet you!</h2>
  </div>
);

export default MeetYou;
