import React from "react";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";
import TodoListForm from "../todo_list/todo_form";
import TodoListItem from "../todo_list/todo_list_item";

const TodoList = (props) => {
    return (
        <div>
            <h1>All todos:</h1>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo} receiveTodo={props.receiveTodo} removeTodo={props.removeTodo}/> 
                    )
                })}
            </ul>
            <TodoListForm receiveTodo={props.receiveTodo} />
        </div>
    )
}

export default TodoList;