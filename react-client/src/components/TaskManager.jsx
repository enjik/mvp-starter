import React from 'react';
import Task from './Task.jsx';

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <g>
      {
      this.props.tasks.map((node) => (
          // determine
            <circle key="node.id" cx="50" cy="50" r="5" transform="translate(20, 34)"/>
        ))
      }
      </g>
    )
  }
}

export default TaskManager;
