import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos } from "./actions/todo_actions"
import { receiveTodo } from "./actions/todo_actions"
import { removeTodo } from "./actions/todo_actions"
import { receiveSteps } from "./actions/step_actions"
import { receiveStep } from "./actions/step_actions"
import { removeStep } from "./actions/step_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render (
        <h1>Todos App</h1>, root
    );
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
}); 
