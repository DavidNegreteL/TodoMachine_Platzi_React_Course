import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoCard } from './TodoCard/TodoCard.js';
import { TodoHeader } from "./TodoHeader/TodoHeader.js";
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';
import { Modal } from "./Modal/Modal.js";
import { TodoLoading } from './TodoItemsState/TodoLoading.js';
import { TodoEmpty } from './TodoItemsState/TodoEmpty.js';
import { TodosError } from './TodoItemsState/TodosError.js';

function App() {
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
            setSearchValue,
            addTodo,
        } = useTodos();
  return (
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

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={() => <TodosError/>}
          onLoading={() => <TodoLoading/>}
          onEmpty={() => <TodoEmpty/>}
          render={todo => (
            <TodoItem 
                key={`${todo.text}`} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            >
                {todo.text}
            </TodoItem>
          )}
        />
        {openModal && (
            <Modal setOpenModal={setOpenModal} addTodo={addTodo}/>
        )}
    </TodoCard>
  );
}

export default App;
