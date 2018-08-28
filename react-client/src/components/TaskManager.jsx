import React from 'react';
import Task from './Task.jsx';

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <g id="task-view">
      {
      this.props.tasks.map((node) => (
          // determine
            <circle key={node.id} cx={node.x} cy={node.y} r={Math.floor(node.hours/2)} fill="pink" transform={`translate(${node.x}, ${node.y})`}/>
        ))
      }
      </g>
    )
  }
}

export default TaskManager;
