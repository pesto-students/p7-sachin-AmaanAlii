import * as actions from "./actionTypes";

export function addStep() {
  return {
    type: actions.ADD_STEP,
  };
}

export function resetSteps() {
  return {
    type: actions.RESET_STEPS,
  };
}
