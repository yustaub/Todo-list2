import React,{Component} from 'react';
const headerStyle={
    background:"#333",
    color:"#fff",
    testAlign:"center"
};
const TodoListHeader = () => {
    return (
        <header style={headerStyle}>
        <h2>Todo List</h2>
        </header>
    )
}

export default TodoListHeader;