import classes from './TodoList.module.css'
export default function TodoList({ todoData, handleComp, deleteTodo }) {
       return (
        <ul className={classes['todo-list']}>
            {todoData.map(todo => (
                <li className={`${classes['todo-item']} ${classes['high']} ${classes[todo.dueStatus]} ${todo.complete ? classes.completed :''}`} key={todo.id}>
                    <div className={classes['todo-info']}>
                        <h3 className={classes['todo-title']}>{todo.title}</h3>
                        <p className={classes['todo-date']}>Due: {todo.date}</p>
                    </div>

                    <div className={classes['todo-actions']}>
                        <span className={`${classes['priority']} ${classes[todo.dueStatus]}`}>{todo.priority}</span>
                        <button className={classes['complete-btn']} onClick={()=> handleComp(todo.id)}>✔</button>
                        <button className={classes['delete-btn']} onClick={()=> deleteTodo(todo.id)}>✖</button>
                    </div>
                </li>
            ))}

            {/* <li className={`${classes['todo-item']} ${classes['medium']} ${classes['completed']}`}>
                <div className={classes['todo-info']}>
                    <h3 className={classes['todo-title']}>Study Next.js</h3>
                    <p className={classes['todo-date']}>Due: 2026-01-18</p>
                </div>

                <div className={classes['todo-actions']}>
                    <span className={`${classes['priority']} ${classes['medium']}`}>Medium</span>
                    <button className={classes['complete-btn']}>✔</button>
                    <button className={classes['delete-btn']}>✖</button>
                </div>
            </li> */}
        </ul>
    )
}