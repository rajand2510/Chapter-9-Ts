import React, { Component } from "react";

type CounterProps = {
  start?: number; // optional prop
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.start ?? 0, // if no start prop, default to 0
    };
  }

  handleIncrement = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Counter: {this.state.count}</h2>
        <button
          onClick={this.handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
