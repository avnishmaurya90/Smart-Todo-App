export default function TodoHeader({total,complete,percent}) {
    return (
        <div className="stats">
            <p>Total Tasks: <span>{total}</span></p>
            <p>Completed: <span>{complete}</span></p>
            <p>Completion: <span>{percent}%</span></p>
        </div>
    )
}