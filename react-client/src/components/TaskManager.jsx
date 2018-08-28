import React from 'react';
import Task from './Task.jsx';
import {XYPlot, XAxis, YAxis, MarkSeries} from 'react-vis';
import {timeFormatDefaultLocale} from 'd3-time-format';

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var convertDate = function(date2) {
      var date1 = new Date("8/28/2018");
      date2 = new Date(date2);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    // var convertSize = function(hours){
    //   return hours/2.0;
    // };
    var chooseColor = function(category) {
      if (category === 'social') {
        return 0;
      } else if (category === 'guilty recreational pleasures') {
        return 1;
      } else if (category === 'toy problems') {
        return 2;
      } else {
        return 3;
      }
    }
    this.props.tasks.forEach(d => {
      d.x = Math.floor(Math.random() * 500) + 50;
      d.y = convertDate(d.deadline) + 50;
      d.size = d.hours * 1.3;
      d.color = chooseColor(d.category);
    });

    // return(
    //   <XYPlot id="xyplot"
    //     xType='category'
    //     width={600}
    //     height={300}
    //     yType='linear'
    //     >
    //     <MarkSeries data={dataArr} />
    //       <XAxis />
    //       <YAxis />
    //   </XYPlot>
    // )
    return(
      <g id="task-view">
      {
      this.props.tasks.map((node) => (
            <Task node={node} />
          // determine
        ))
      }
      </g>
    )
  }
}

export default TaskManager;
