import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TaskManager from './components/TaskManager.jsx';
import CompletionBar from './components/CompletionBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          description: 'robotPaths.js',
          hours: 1,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 3,
          y: 3,
          size: 5 // based on hours 
        },
        {
          id: 2,
          description: 'SDC',
          hours: 80,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 3,
          y: 3,
          size: 5
        },
        {
          id: 3,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 3,
          y: 3,
          size: 5
        }
      ]
    }
  }


  componentDidMount() {
    // $.ajax({
    //   url: '/tasks',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <div>
        <div>
          <h1>Bubbl.it</h1>
        </div>
        <svg>
          <g id="task-tools">
            <TaskManager tasks={this.state.tasks}/>
            <CompletionBar id="completion-bar"/>
          </g>
        </svg>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
