import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      hours: null,
      date: null,
      time: null,
      category: null
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleHoursChange = this.handleHoursChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.passToParent = this.passToParent.bind(this);
  }
  handleDescriptionChange(event) {
    event.preventDefault();
    this.setState({description: event.target.value});
  }
  handleHoursChange(event) {
    event.preventDefault();
    this.setState({hours: event.target.value});
  }
  handleDateChange(event) {
    event.preventDefault();
    this.setState({date: event.target.value});
  }
  handleTimeChange(event) {
    event.preventDefault();
    this.setState({time: event.target.value});
  }
  handleCategoryChange(event) {
    event.preventDefault();
    this.setState({category: event.target.value});
  }
  passToParent() {
    this.props.passFormInput(this.state);
  }
  render() {
    return(
      <div className='popup'>
          <form onSubmit={this.props.closePopup}>
            <h1 id="form-title">{this.props.text}</h1>
            <input className="input" type="text" onChange={this.handleDescriptionChange} name="description" placeholder="Task Description"/>
            <input className="input" type="text" onChange={this.handleHoursChange} name="hours" placeholder= "Hours to Complete"/>
            <input className="input" type="text" onChange={this.handleDateChange} name="deadline-date" placeholder= "Due Date (e.g. '08/28/2018')"/>
            <input className="input" type="text" onChange={this.handleTimeChange} name="deadline-time" placeholder= "Time Due (e.g. '13:30')"/>
            <input className="input" type="text" onChange={this.handleCategoryChange} name="category" placeholder= "Type of Task e.g. 'interview prep'"/>
            <input className="submit" onClick={this.passToParent} type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

export default Popup;
