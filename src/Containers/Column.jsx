import React from "react";

export default class Column extends React.Component {
  renderTasks = () => {
    return this.props.tasks.map(task => {
      if (this.props.owner.id === 1) {
        return (
          <div className="task">
            <div>{task.task}</div>
            <div
              className="arrowright"
              onClick={e => this.props.handleColumnChange(e, task)}
              data-column="1"
            >
              +
            </div>
          </div>
        );
      } else if (this.props.owner.id === 4) {
        return (
          <div className="task">
            <div
              className="arrowleft"
              onClick={e => this.props.handleColumnChange(e, task)}
              data-column="-1"
            >
              -
            </div>
            <div>{task.task}</div>
          </div>
        );
      } else {
        return (
          <div className="task">
            <div
              className="arrowleft"
              onClick={e => this.props.handleColumnChange(e, task)}
              data-column="-1"
            >
              -
            </div>
            <div>{task.task}</div>
            <div
              className="arrowright"
              onClick={e => this.props.handleColumnChange(e, task)}
              data-column="1"
            >
              +
            </div>
          </div>
        );
      }
    });
  };

  // addTask = () => {
  //   let result = window.prompt("hello please add task");
  //   this.props.tasks.push({
  //     ownerID: this.props.tasks[0].ownerID,
  //     owner: this.props.tasks[0].owner,
  //     task: result
  //   });
  //   console.log(this.props);
  // };

  addTask = () => {
    let result = window.prompt("Please type new task below:");
    this.props.handleTaskAdd(this.props.owner.id, result);
  };

  render() {
    return (
      <div className="column">
        <div className="columnHeader">{this.props.owner.name}</div>
        <div>{this.renderTasks()}</div>
        <div onClick={this.addTask}>+ Add a card</div>
      </div>
    );
  }
}
