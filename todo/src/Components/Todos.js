import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions";

class Todos extends Component {
  state = {
    newTask: ""
  };

  onChange =event=>{
      this.setState({[event.target.name]:event.target.value})
  }

  onClick =event => {
      event.preventDefault();
      this.props.addTask(this.state.newTask)
  }

  render() {
    return (
      <>
        <div className="TaskList">
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </div>
        <form>
          <input type="text" name="newTask" value={this.state.newTask} onChange={this.onChange} />
        </form>
        <button onClick={this.onClick}>Add New Task</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTask }
)(Todos);
