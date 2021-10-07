import React from "react";
import nextId from "react-id-generator";

const Form = ({ inputText, todos, setInputText, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: nextId()
            }
        ]);
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} className="status-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
    )
}

export default Form;