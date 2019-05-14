import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask , toggleTask} from "../Actions";

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
      this.setState({newTask:''})
  }

  toggleTask = task =>{
      this.props.toggleTask(task)
  }

  render() {
    return (
      <>
       
        <form>
          <input type="text" name="newTask" value={this.state.newTask} onChange={this.onChange} />
        </form>
        <button onClick={this.onClick}>Add New Task</button>

        <div className="TaskList">
          {this.props.todos.map(todo => (
            <li onClick={() => this.toggleTask(todo.task)} style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>{todo.task}</li>
          ))}
        </div>
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
  { addTask, toggleTask }
)(Todos);
