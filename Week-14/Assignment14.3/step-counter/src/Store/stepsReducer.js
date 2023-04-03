import * as actions from "./actionTypes";
const initialState = {
  steps: 0,
};
export function stepsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_STEP:
      return {
        ...state,
        steps: ++state.steps,
      };

    case actions.RESET_STEPS:
      return {
        ...state,
        steps: 0,
      };

    default:
      return state;
  }
}
