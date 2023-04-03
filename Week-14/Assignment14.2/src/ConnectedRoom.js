import React from "react";
import { connect } from "react-redux";
import { flipLight } from "./store/actions";

class Room extends React.Component {
  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.props.flipLight}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLightOn: state.isLightOn
});
const mapDispatchToProps = {
  flipLight
};
const ConnectedRoom = connect(mapStateToProps, mapDispatchToProps)(Room);

export { ConnectedRoom };
