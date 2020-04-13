import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      second: "0",
      test: false,
    };
    setInterval(
      () =>
        this.state.test &&
        this.setState({
          second: parseInt(this.state.second) + 1,
        }),
      1000
    );
  }
  startTimer = () => {
    this.setState({ test: true });
    console.log("start");
  };
  stopTimer = () => {
    this.setState({ test: false });
    console.log("stop");
  };
  resetTimer = () => {
    this.setState({ second: 0, test: false });
    console.log("reset");
  };
  render() {
    let seconds = this.state.second % 60;
    let minuts = Math.floor(this.state.second / 60) % 60;
    let hours = Math.floor(this.state.second / 3600) % 24;
    return (
      <div>
        <h3>
          Timer: {hours.toString().padStart(2, "0")}:
          {minuts.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </h3>
        <button
          className={
            this.state.test === false
              ? "btn btn-success m-3"
              : "btn btn-danger m-3"
          }
          onClick={this.state.test === false ? this.startTimer : this.stopTimer}
        >
          {this.state.test === false ? "Start" : "Stop"}
        </button>

        <button className="btn btn-primary m-3" onClick={this.resetTimer}>
          reset
        </button>
      </div>
    );
  }
}
export default Timer;
