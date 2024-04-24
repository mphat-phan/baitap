import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({ task, deleteTask, onChangeItem }) {
    function handleChangeStatus(completed) {
        onChangeItem(task.id, "completed", completed);
    }

    function handleChangeText(text) {
        onChangeItem(task.id, "text", text);
    }

    return (
        <div className="row w-100 space-between align-center">
            <div className="row align-center gap-md">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleChangeStatus(!task.completed)}
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                />
                <p
                    style={{
                        margin: "0px",
                        textDecoration: task.completed
                            ? "line-through"
                            : "none",
                    }}
                    contentEditable
                    onMouseLeave={(e) => {
                        handleChangeText(e.currentTarget.textContent);
                    }}
                >
                    {task.text}
                </p>
            </div>

            <button onClick={() => deleteTask(task.id)}>
                <AiOutlineDelete />
            </button>
        </div>
    );
}
export default TodoItem;
