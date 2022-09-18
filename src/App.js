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
import { EmptySearchResults } from './TodoSearch/EmptySearchResults.js';
import { ChangeAlertWithStorageListener } from './ChangeAlert/ChangeAlert.js';

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
            sincronizeTodos
        } = useTodos();
  return (
    <TodoCard>
        <TodoHeader>
            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
                loading={loading}
            />
            <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    loading={loading}
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
            totalTodos={totalTodos}
            onError={() => <TodosError/>}
            onLoading={() => <TodoLoading/>}
            onEmpty={() => <TodoEmpty/>}
            onEmptySearchResults={() => <EmptySearchResults searchedText={searchValue}/>}
            //</TodoCard>render={todo => (
            //    <TodoItem 
            //        key={`${todo.text}`} 
            //        completed={todo.completed}
            //        onComplete={() => completeTodo(todo.text)}
            //        onDelete={() => deleteTodo(todo.text)}
            //    >
            //        {todo.text}
            //    </TodoItem>
            //)}
        >
            {
                todo => (
                <TodoItem 
                    key={`${todo.text}`} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                >
                    {todo.text}
                </TodoItem>
            )
            }
        </TodoList>
        <ChangeAlertWithStorageListener
            sincronize={sincronizeTodos}
        />
        {openModal && (
            <Modal setOpenModal={setOpenModal} addTodo={addTodo}/>
        )}
    </TodoCard>
  );
}

export default App;
