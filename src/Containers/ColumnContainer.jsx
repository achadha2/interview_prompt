import React from "react";
import Column from "./Column";

export default class ColumnContainer extends React.Component {
  state = {
    owners: [
      { id: 1, name: "Bob" },
      { id: 2, name: "Kim" },
      { id: 3, name: "Tim" },
      { id: 4, name: "Jim" }
    ],
    tasks: [
      { ownerID: 1, task: "Go buy a lot of eggs" },
      { ownerID: 1, task: "Sell your eggs" },
      { ownerID: 2, task: "Buy a monocle" },
      { ownerID: 2, task: "Finish report for work" },
      { ownerID: 3, task: "Complete assignment number 2" },
      { ownerID: 3, task: "Complete assignment number 4" },
      { ownerID: 4, task: "Buy gifts for christmas" },
      { ownerID: 4, task: "Fire employee X" }
    ]
  };

  whatName = () => {
    return this.state.owners.map(owner => {
      let results = this.state.tasks.filter(task => {
        return task.ownerID === owner.id;
      });

      return (
        <Column
          owner={owner}
          tasks={results}
          handleTaskAdd={this.handleTaskAdd}
          handleColumnChange={this.handleColumnChange}
        />
      );
    });
  };

  handleTaskAdd = (ownerID, task) => {
    this.setState({
      tasks: [...this.state.tasks, { ownerID: ownerID, task: task }]
    });
  };

  handleColumnChange = (e, task) => {
    let colChange = parseInt(e.target.dataset.column);
    let newID = parseInt(task.ownerID) + colChange;
    let newTask = { ownerID: newID, task: task.task };

    let newArray = this.state.tasks.map(oldtask => {
      if (oldtask.task === task.task) {
        return { ...oldtask, ownerID: newID };
      } else {
        return oldtask;
      }
    });
    this.setState({
      tasks: newArray
    });
  };

  render() {
    return <div className="columnContainer">{this.whatName()}</div>;
  }
}
