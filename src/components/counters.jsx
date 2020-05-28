import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onAdd,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1 mr-3">
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
              Reset
            </button>
          </div>
          <div className="col">
            <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
              Add Counter
            </button>
          </div>
        </div>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
