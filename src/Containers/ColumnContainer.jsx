import React from "react";
import Column from "./Column";

export default class ColumnContainer extends React.Component {
  state = {
    names: ["Bob", "Tim", "Jon", "Kim"],
    tasks: [
      { ownerID: 1, owner: "Bob", task: "Go buy a lot of eggs" },
      { ownerID: 1, owner: "Bob", task: "Sell your eggs" },
      { ownerID: 2, owner: "Tim", task: "Buy a monocle" },
      { ownerID: 2, owner: "Tim", task: "Finish report for work" },
      { ownerID: 3, owner: "Jon", task: "Complete assignment number 2" },
      { ownerID: 3, owner: "Jon", task: "Complete assignment number 4" },
      { ownerID: 4, owner: "Kim", task: "Buy gifts for christmas" },
      { ownerID: 4, owner: "Kim", task: "Fire employee X" }
    ]
  };

  whatName = () => {
    return this.state.names.map(name => {
      let results = this.state.tasks.filter(task => {
        return task.owner === name;
      });
      console.log(results);

      return <Column name={name} tasks={results} />;
    });
  };
  render() {
    return <div className="columnContainer">{this.whatName()}</div>;
  }
}
