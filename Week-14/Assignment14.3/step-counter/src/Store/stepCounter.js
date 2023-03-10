import React from "react";
import { connect } from "react-redux";
import { addStep, resetSteps } from "./actionCreator";

function StepCounter(props) {
  const steps = props.steps;
  return (
    <div className="App">
      <div class="main-text">
        <h1>You have walked {steps} steps today!</h1>
      </div>
      <div class="buttons">
        <button class="add-button" onClick={props.addStep}>
          Add A Step
        </button>
        <button class="reset-button" onClick={props.resetSteps}>
          Reset Steps
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    steps: state.steps,
  };
}

const mapDispatchToProps = {
  addStep,
  resetSteps,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
