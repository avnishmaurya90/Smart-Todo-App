import { useState } from "react";

export default function AddTodo({addTodH}) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate]= useState('');
    const submitTodo = (e)=>{
        e.preventDefault(); 
        addTodH(title, priority, date)
        setTitle('');
        setPriority('');
        setDate('');
    }
    const textChangeHandler = (e)=>{
        setTitle(e.target.value);
    }
    const selectChangeHandler = (e)=>{
        setPriority(e.target.value);
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value);
    }
    return (
        <form className="add-todo" onSubmit={submitTodo}>
            <input
                type="text"
                placeholder="Enter task title"
                className="input"
                value={title}
                onChange={textChangeHandler}
                required
            />
            <select className="select" onChange={selectChangeHandler} value={priority}>
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <input type="date" className="input" value={date} onChange={dateChangeHandler} required/>
            <button className="add-btn">Add Task</button>
        </form>
    )
}