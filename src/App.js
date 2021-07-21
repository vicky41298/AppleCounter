import './App.css';
import React, {Component} from 'react';
import Button from './Component/Button';
import "./Component/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  incrementfive = () => {
    this.setState({
      count: this.state.count + 5
    });
  };

  decrementfive = () => {
    this.setState({
      count: this.state.count - 5
    });
  };
  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
            <h3>How many apple do you want:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} /> 
            <Button title={"-5"} action={this.decrementfive} />
            <Button title={"+5"} action={this.incrementfive} />
          </div>
        </div>
      </div>
    );
  }
}