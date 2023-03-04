const initialState = {
  isLightOn: true
};
function switchReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
}

export { switchReducer };
