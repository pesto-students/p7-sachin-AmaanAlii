import { createStore } from "redux";
import { switchReducer } from "./switchReducer";

const store = createStore(switchReducer);

export { store };
