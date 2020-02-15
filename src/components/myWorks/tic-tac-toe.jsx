// @flow
import React from 'react';

const quareStyle = {
  width: '50px',
  height: '50px',
  lineHeight: '50px',
  fontSize: '30px',
  border: 'black 1px solid',
  textAlign: 'center',
};

const Quare = (props:{content:string, changeIn:Function}) => {
  const { content, changeIn } = props;
  return (
    <div style={quareStyle} onClick={() => changeIn()} onKeyPress={() => changeIn()} role="presentation">{content}</div>
  );
};

class Block extends React.Component<{}, {nextOne:string, quareIn:Array<string>}> {
  constructor(props:{}) {
    super(props);
    this.state = {
      nextOne: 'O',
      quareIn: Array(9).fill(''),
    };
  }

  changeNextOne = (i:number) => {
    const { nextOne, quareIn } = this.state;
    const quares = [...quareIn];
    if (quares[i]) {
      return;
    }
    quares[i] = nextOne;
    this.setState(() => ({ quareIn: quares }));
    if (nextOne === 'O') {
      // eslint-disable-next-line no-param-reassign
      this.setState((prevState) => ({ nextOne: prevState.nextOne = 'X' }));
    } else {
      // eslint-disable-next-line no-param-reassign
      this.setState((prevState) => ({ nextOne: prevState.nextOne = 'O' }));
    }
  }

  LineQuare = (index:Array<number>) => {
    const { quareIn } = this.state;
    // eslint-disable-next-line max-len
    const quares = index.map((n:number) => <Quare content={quareIn[n]} changeIn={() => this.changeNextOne(n)} />);
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {quares}
      </div>
    );
  };

  render() {
    const { nextOne } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          {'下面一位 : '}
          {nextOne}
        </div>
        {this.LineQuare([0, 1, 2])}
        {this.LineQuare([3, 4, 5])}
        {this.LineQuare([7, 8, 9])}
      </div>
    );
  }
}

export default Block;
