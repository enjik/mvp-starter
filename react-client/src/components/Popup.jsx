import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='popup'>
          <form onSubmit={this.props.closePopup}>
            <h1 id="form-title">{this.props.text}</h1>
            <input className="input" type="text" name="description" placeholder="Task Description"/>
            <input className="input" type="text" name="hours" placeholder= "Hours to Complete"/>
            <input className="input" type="text" name="deadline-date" placeholder= "Due Date (e.g. '2018/08/28')"/>
            <input className="input" type="text" name="deadline-time" placeholder= "Time Due (e.g. '13:30')"/>
            <input className="input" type="text" name="category" placeholder= "Type of Task e.g. 'interview prep'"/>
            <input className="submit" type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

export default Popup;
