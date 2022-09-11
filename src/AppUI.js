import React, { useContext } from "react";
import { TodoCard } from './TodoCard/TodoCard.js';
import { TodoHeader } from "./TodoHeader/TodoHeader.js";
import { TodoContext } from "./TodoContext/TodoContext.js";
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';
import { Modal } from "./Modal/Modal.js";

export const AppUI = () => {
    const {
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue
        } = useContext(TodoContext);
    return (
        <>
            <TodoCard>
                <TodoHeader>
                    <TodoCounter
                        totalTodos={totalTodos}
                        completedTodos={completedTodos}
                    />
                    <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
                        <TodoSearch
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                        <CreateTodoButton
                            setOpenModal={setOpenModal}
                        >
                        +
                        </CreateTodoButton>
                    </div>
                </TodoHeader>
                <TodoList>
                    {error && <p>Hubo un error</p>}
                    {loading && <p>Estamos cargando</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

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
                {openModal && (
                    <Modal setOpenModal={setOpenModal}>
                        {
                            <p>{searchedTodos[0]?.text}</p>
                        }
                    </Modal>
                )}
            </TodoCard>
        </>
    );
}