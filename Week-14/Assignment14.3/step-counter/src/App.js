import logo from "./logo.svg";
import "./App.css";
import { connect, Provider } from "react-redux";
import StepCounter from "./Store/stepCounter";

function App() {
  return (
    <div className="App">
      <StepCounter />
    </div>
  );
}

export default App;
