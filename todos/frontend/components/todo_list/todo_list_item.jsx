import React from "react";
import TodoListForm from "./todo_form";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleRemove(e) {
        console.log("heyyyyy")
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }

    handleUpdate(e) {
        e.preventDefault();
        let x = Object.assign({}, this.props.todo);
        x.done = !x.done;
        this.props.receiveTodo(x);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.receiveTodo(this.state);
    //     this.setState({
    //         id: Math.floor(Math.random() * 1000000),
    //         title: "",
    //         body: "",
    //         done: false,
    //     })
    // }

    render () {
        return (
            <div>
                <li key={this.props.todo.id}>Title: {this.props.todo.title} Body: {this.props.todo.body} Completed: {`${this.props.todo.done}`}</li>,
                <button onClick={this.handleRemove}>Remove Todo</button>
                <button onClick={this.handleUpdate}>Update</button>
                {/* <input type="submit" value="Done with todo!" onSubmit={this.handleDone}/> */}
            </div>
        )
    }
}

export default TodoListItem;