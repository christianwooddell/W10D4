import React from "react";

class TodoListForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 1000000),
            title: "",
            body: "",
            done: false,
        }
        this.addTitle = this.addTitle.bind(this);
        this.addBody = this.addBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addTitle(e) {
        this.setState ({
            title: e.target.value,
        });
    }

    addBody(e) {
        this.setState ({
            body: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState ({
            id: Math.floor(Math.random() * 1000000),
            title: "",
            body: "",
            done: false,
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a todo!</h1>
                <label>Title: 
                    <input type="text" value={this.state.title} onChange={this.addTitle}/>
                </label>
                <label>Body: 
                    <input type="text" value={this.state.body} onChange={this.addBody}/>
                </label>
                <input type="submit" value="Add a todo!"/>
            </form>
        )
    }
}

export default TodoListForm;