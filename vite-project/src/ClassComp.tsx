import  { Component } from "react";

type CounterProps = {
  header: string;
};

type CounterState = {
  value: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    value: 0
  };

  render() {
    const { header } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h1>{header}</h1>
         <h1>{value}</h1>
      </div>
    );
  }
}

export default Counter;
