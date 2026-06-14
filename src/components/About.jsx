import React from "react";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      count: 0,
    };
    this.toggleActive = this.toggleActive.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log("About component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("About component updated");
  }

  componentWillUnmount() {
    console.log("About component unmounted");
  }

  componentDidCatch(error, errorInfo) {
    console.log("About component caught an error");
  }

  render() {
    return (
      <div className={this.state.active ? "active" : "inactive"}>
        <h1>About</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.toggleActive}>Toggle</button>
      </div>
    );
  }
}
