import React from "react";
import {TodoCard} from './TodoCard/TodoCard.js';
import {TodoCounter} from './TodoCounter/TodoCounter.js';
import {TodoSearch} from './TodoSearch/TodoSearch.js';
import {TodoList} from './TodoList/TodoList.js';
import {TodoItem} from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';

export const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) => {
    return (
        <>
            <TodoCard>
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />
                <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
                    <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    />
                    <CreateTodoButton>
                    +
                    </CreateTodoButton>
                </div>
                <TodoList>
                    {searchedTodos.map((todo, index) => (
                    <TodoItem 
                        key={`${todo.text}-${index}`} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    >
                        {todo.text}
                    </TodoItem>
                    ))}
                </TodoList>
            </TodoCard>
        </>
    );
}