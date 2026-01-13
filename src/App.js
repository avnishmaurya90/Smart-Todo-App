import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const todHandler = (title, priority, date) => {
    const isDubplicate = todo.some(t => t.title === title && t.date === date)
    if (isDubplicate) {
      alert('Task with same title and due date already exists!');
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDuedate = new Date(date);
    taskDuedate.setHours(0, 0, 0, 0);
    let dueStatus = '';
    if (taskDuedate.getTime() === today.getTime()) {
      dueStatus = 'medium';
    } else if (taskDuedate < today) {
      dueStatus = 'high';
    } else {
      dueStatus = 'low';
    }

    setTodo((prevTod) => {
      return [
        ...prevTod,
        {
          title,
          priority,
          dueStatus,
          date,
          complete: false,
          id: Math.random().toString()
        }]
    })
  }
  // const completeHandler = (id)=>{
  //   setTodo((prevTod)=> {
  //     return prevTod.map((todo)=> {
  //       if(prevTod.id === id){
  //         return {
  //           ...todo,
  //           complete:true
  //         }
  //       }
  //       return todo
  //     })
  //   })
  // }

  const completeHandler = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.map((todo) => todo.id === id ? { ...todo, complete: true } : todo)
    })
  }
  const deleteTodoHandler = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== id)
    })
  }

  const totalTasks = todo.length;
  const totalTasksComplete = todo.filter(t => t.complete).length;
  const completedPercent = totalTasks === 0 ? 0 : Math.round((totalTasksComplete / totalTasks) * 100)



  return (
    <div className="todo-app">
      <h1 className="title">Smart Todo App</h1>

      {/* Stats */}
      <TodoHeader total={totalTasks} complete={totalTasksComplete} percent={completedPercent} />

      {/* Add Todo */}
      <AddTodo addTodH={todHandler} />

      {/* Todo List */}
      <TodoList todoData={todo} handleComp={completeHandler} deleteTodo={deleteTodoHandler} />
    </div>

  );
}

export default App;
