import React, { Component } from "react";
import Stepper from "./Stepper";

class App extends Component {
  render() {
    return (
      <Stepper stage={1}>
        <Stepper.Steps>
          <Stepper.Step num={1} text={"Stage 1"} />
          <Stepper.Step num={2} text={"Stage 2"} />
          <Stepper.Step num={3} text={"Stage 3"} />
          <Stepper.Step num={4} text={"Stage 4"} />
          <Stepper.Step num={5} text={"Complete"} />
        </Stepper.Steps>
        <Stepper.Progress>
          <Stepper.Stage num={1} />
          <Stepper.Stage num={2} />
          <Stepper.Stage num={3} />
          <Stepper.Stage num={4} />
        </Stepper.Progress>
      </Stepper>
    );
  }
}
export default App;
