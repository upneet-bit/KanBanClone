import React, { Component } from 'react';
import ActivityBoard from './ActivityBoard';
import Banner from './Banner';

const dummyData = require('../data.json');
let d=dummyData;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: dummyData
        }
        this.onDropEvent = this.onDropEvent.bind(this);
    }
    onDropEvent(e, id) {
        let targetId = e.dataTransfer.getData("id");
        let task = {};
        let testPass = false;
        for (let key in d) {
          if (testPass) {
            break;
          } else {
            for (let i = 0; i < d[key].length; i++) {
              if (parseInt(d[key][i].id) === parseInt(targetId)) {
                task = d[key][i];
                d[key].splice([i], 1);
                testPass = true;
                break;
              }
            }
          }
        }
        this.updateBoard(task, id);
      }
      updateBoard(task, id){
        if(task.id !== undefined) {
          for(let key in d) {
            if (key === id) {
              d[key].unshift(task);
              break;
            }
          }
          this.setState({
            data: d
          })
        }
      }
    renderList() {
        const activityList = [];
        for (let key in this.state.data) {
          activityList.push(
            <ActivityBoard backlogData={this.state.data[key]} listName={key} key={key} 
            onDropEvent={this.onDropEvent} 
            />)
        }
    
        return (<div className="flex flex-wrap">
          {activityList}
        </div>)
      }
  
    render() {
        return (
            <div className=''>
                <Banner t={this.props?.title}/>
                { this.renderList() }
            </div>
        );
    }
}


export default Dashboard;