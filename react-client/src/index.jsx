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
          x: 300,
          y: 40
        },
        {
          id: 8,
          description: 'n-queens',
          hours: 100,
          // month is 0-based
          deadline: new Date(2018, 7, 28, 7, 30),
          category: 'toy problems',
          completed: false,
          x: 600,
          y: 300
        }
      ],

      showPopup: false,
    }
    this.togglePopup = this.togglePopup.bind(this);
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
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }
  handleSubmitFormData(formdata) {
    console.log('FORM DATA', formdata);
    const that = this;
    const date = formdata.date;
    const time = formdata.time;
    // year, month, day, hour, minutes
    // month is 0-based
    const datefields = [Number(date.slice(6, 10)), Number(date.slice(0, 2)) - 1, Number(date.slice(3, 5)), Number(time.slice(0, 2)), Number(time.slice(3, 5))];
    console.log('date', datefields);
    const body = {
      description: formdata.description,
      hours: formdata.hours,
      deadline: `${date.slice(6, 10)}-${date.slice(0, 2)}-${date.slice(3, 5)} ${time.slice(0, 2)}:${time.slice(3, 5)}:00`,
      category: formdata.category,
      completed: false
    };
    console.log('BODY', body);
    $.ajax({
      url: '/tasks',
      method: "POST",
      data: body,
      success: () => {
        console.log('task posted!')
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div id="full-page">
        {this.state.showPopup ? <Popup text="Task Details" closePopup={this.togglePopup} passFormInput={this.handleSubmitFormData}/> :null}
        <div id="left-panel">
          <div id="header-div">
            <h1 id="header">Bubbl.it</h1>
          </div>
          <div>
            <button onClick={this.togglePopup.bind(this)}>New Task</button>
            <svg id="viewport">
                <TaskManager id="task-manager" tasks={this.state.tasks}/>
            </svg>
          </div>
        </div>

        <div id="right-panel">
            <div id="completion-bar">
              <CompletionBar />
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
