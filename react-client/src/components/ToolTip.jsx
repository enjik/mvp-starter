import React from 'react';

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className = 'tooltip'>
        // <h1 id="form-title">{this.props.text}</h1>
        <title>
        <text className="info" >Description: {this.props.node.description} </text>
        <text className="info" >Expected to Take: {this.props.node.hours}</text>
        <text className="info" >Deadline: {this.props.node.deadline}</text>
        <text className="info" >Category: {this.props.node.category}</text>
        </title>
    </div>
  )
  }
}
export default ToolTip;
