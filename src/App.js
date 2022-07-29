import logo from './logo.svg';
import {TodoCard} from './TodoCard/TodoCard.js';
import {TodoCounter} from './TodoCounter/TodoCounter.js';
import {TodoSearch} from './TodoSearch/TodoSearch.js';
import {TodoList} from './TodoList/TodoList.js';
import {TodoItem} from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';
const todos = [
  { text: "Estudiar X", completed: false },
  { text: "Estudiar Y", completed: false },
  { text: "Estudiar Z", completed: false },
];
function App() {
  return (
    <TodoCard>
      <TodoCounter/>
      <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}>
        <TodoSearch/>
        <CreateTodoButton>
          +
        </CreateTodoButton>
      </div>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={`${todo.text}-${index}`}>
            {todo.text}
          </TodoItem>
        ))}
      </TodoList>
    </TodoCard>
  );
}

export default App;
