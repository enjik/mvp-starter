import React from 'react';
import ToolTip from './ToolTip.jsx';
import Popup from './Popup.jsx';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    console.log('circle hover', event.target);
    this.setState({showInfo: !this.state.showInfo});
  }
  render() {
    const colors = ['#9fa8a3', 'pink', '#c5d5cb', '#e3e0cf'];
    return(
      <g className="circleInfo">
        <text class="label" opacity="0" x="200" y="300">{this.props.node.description}</text>
      {this.state.showInfo ? <ToolTip node={this.props.node} text="Task Info" /> :null}
      <circle onMouseEnter={this.handleHover} onMouseLeave = {this.handleHover} key={this.props.node.id} cx={this.props.node.x} cy={this.props.node.y} r={this.props.node.size} fill={colors[this.props.node.color]} transform={`translate(${this.props.node.x}, ${this.props.node.y})`}/>
      </g>
    )
  }
}

export default Task;
