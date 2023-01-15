import React from "react";
import "./Box.css";

class Box extends React.Component {
  render() {
    return (
      <div className="mt-auto mb-auto flex justify-center">
        <div className="box flex">
          <div className="gradient self-start flex justify-center">
            <h2 className="title-text">{this.props.title}</h2>
          </div>
          {this.props.datas.PositiveList}
        </div>
      </div>
    );
  }
}
export default Box;
