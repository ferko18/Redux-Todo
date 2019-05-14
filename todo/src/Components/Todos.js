import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask} from '../Actions';



class Todos extends Component {
    
    state={
        newTask: ''
    }

    render() {
        return (
            <>
            <div className="TaskList">
                {this.props.todos.map(todo=><li key={todo.id}>{todo.task}</li>)}
            </div>
            <form>
              
            </form>
            <button>Add New Task</button>
            </>
        );
    }
}

const mapStateToProps =state=>{
    return{
      todos: state.todos
    }
}
export default connect(
    mapStateToProps,
    { addTask }
  )(Todos);
  