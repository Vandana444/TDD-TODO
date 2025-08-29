import React, { useReducer, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

// action constants
const ACTIONS = {
  ADD: 'add',
  TOGGLE: 'toggle',
  REMOVE: 'remove',
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: false },
      ];
    case ACTIONS.TOGGLE:
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, completed: !t.completed } : t
      );
    case ACTIONS.REMOVE:
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    try {
      const raw = localStorage.getItem('tasks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // handlers
  function addTask(text) {
    dispatch({ type: ACTIONS.ADD, payload: { id: Date.now().toString(), text } });
  }

  function toggleTask(id) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id } });
  }

  function removeTask(id) {
    dispatch({ type: ACTIONS.REMOVE, payload: { id } });
  }

  return (
    <div className="app">
      <div className="card">
        <h1>To-Do (TDD)</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      </div>
    </div>
  );
}

export default App;
