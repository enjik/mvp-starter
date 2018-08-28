import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popup from './components/Popup.jsx';
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
          x: 30,
          y: 70
        },
        {
          id: 2,
          description: 'SDC',
          hours: 80,
          // month is 0-based
          deadline: new Date(2018, 8, 11, 15, 30),
          category: 'toy problems',
          completed: false,
          x: 100,
          y: 20
        },
        {
          id: 3,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 10, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 20,
          y: 100
        },
        {
          id: 4,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 8, 17, 5),
          category: 'toy problems',
          completed: false,
          x: 10,
          y: 34
        },
        {
          id: 5,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 8, 4, 9, 30),
          category: 'toy problems',
          completed: false,
          x: 80,
          y: 90
        },
        {
          id: 6,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 55,
          y: 5
        },
        {
          id: 7,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 20,
          y: 34
        },
        {
          id: 8,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 182,
          y: 389
        }
      ],

      showForm: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/tasks',
    //   method: "GET",
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
  handleClick() {
    this.setState({showForm: true});
  }
  handleSubmit() {
    // $.ajax({
    //   url: '/tasks',
    //   method: "POST",
    //   data: {},
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
   const popup = (this.state.showForm ? <Popup value={this.state.value} /> : null);
   return (
     <ul>
       {popup}
       <li key={0} onClick={() => this.popup('Hello World')}>Click Me!</li>
     </ul>
   )
    let newtaskform;
    if (this.state.showForm) {
      newtaskform = <Popup>hello</Popup>;
    } else {
      newtaskform = <div></div>;
    }
    return (
      <div id="full-page">
        <div id="left-panel">
          {newtaskform}
          <div id="header-div">
            <h1 id="header">Bubbl.it</h1>
          </div>
          <div>
            <button onClick={this.handleClick}>New Task</button>
            <svg id="viewport">
                <TaskManager id="task-manager" tasks={this.state.tasks}/>
            </svg>
          </div>
        </div>

        <div id="right-panel">
            <div>
              <CompletionBar id="completion-bar"/>
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
