import React, { useState, useEffect } from 'react';
import './App.css';
import './components/components.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import WeatherWidget from './components/WeatherWidget';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface User {
  name: string;
  email: string;
  age: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>React App with Functionality</h1>
          <p>A modern React application built with TypeScript</p>
        </header>

        <div className="grid">
          <div className="card">
            <h2>Todo List</h2>
            <TodoList
              todos={todos}
              onAdd={addTodo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          <div className="card">
            <h2>Counter</h2>
            <Counter />
          </div>

          <div className="card">
            <h2>User Registration</h2>
            <UserForm onSubmit={addUser} />
            {users.length > 0 && (
              <div className="users-list">
                <h3>Registered Users:</h3>
                {users.map((user, index) => (
                  <div key={index} className="user-item">
                    <strong>{user.name}</strong> - {user.email} (Age: {user.age})
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="card">
            <h2>Weather Widget</h2>
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 