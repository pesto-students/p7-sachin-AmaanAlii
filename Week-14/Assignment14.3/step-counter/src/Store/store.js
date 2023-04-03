import { createStore } from "redux";
import { stepsReducer } from "./stepsReducer";

export const store = createStore(stepsReducer);
