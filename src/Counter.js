import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment, decrement } = this.props;
    console.log('Counter Component');
    return (
      <div className="counter">
        <h4>Counter</h4>
        <div className="counter-inner">
          <button onClick={increment}>+</button>
          <span
            style={{ fontSize: '18px', color: '#bf20e0', fontWeight: 'bold' }}
          >
            {count}
          </span>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default React.memo(Counter);
