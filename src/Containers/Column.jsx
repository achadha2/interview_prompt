import React from "react";

export default class Column extends React.Component {
  renderTasks = () => {
    return this.props.tasks.map(task => {
      return <div className="task">{task.task}</div>;
    });
  };

  addTask = () => {
    let result = window.prompt("hello please add task");
    this.props.tasks.push({
      ownerID: this.props.tasks[0].ownerID,
      owner: this.props.tasks[0].owner,
      task: result
    });
    console.log(this.props);
  };

  render() {
    return (
      <div className="column">
        <div className="columnHeader">{this.props.name}</div>
        <div>{this.renderTasks()}</div>
        <div onClick={this.addTask}>+ Add a card</div>
      </div>
    );
  }
}
