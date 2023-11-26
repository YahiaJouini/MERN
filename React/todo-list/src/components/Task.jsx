
export default function Task({ input, id, complete, HandleDelete, HandlComplete }) {
    return (
        <div className="task-contaiener">
            <div className="text">
                <h1 style={{ textDecoration: complete ? "line-through" : "none" }}>{input}</h1>
                <input type="checkBox" onClick={() => { HandlComplete(id) }} />
            </div>
            <button className="btn" onClick={() => HandleDelete(id)}>Delete</button>
        </div>
    )
}