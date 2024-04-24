import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/todo-item";
import { taskData } from "./data";
function App() {
    const [data, setData] = useState(taskData);
    const [tasks, setTasks] = useState(data);
    const [textFilter, setTextFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const [text, setText] = useState("");
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setData([...tasks, newTask]);
        setText("");
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    useEffect(() => {
        const status =
            statusFilter === "all"
                ? null
                : statusFilter === "todo"
                ? false
                : true;

        const filteredData = data.filter((item) =>
            item.text.toLowerCase().includes(textFilter.toLowerCase()) &&
            status != null
                ? item.completed === status
                : true
        );
        console.log(filteredData);
        setTasks(filteredData);
    }, [textFilter, data, statusFilter]);

    function onChangeItem(id, key, value) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, [key]: value };
                } else {
                    return task;
                }
            })
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>TODO LIST</h2>
                <div
                    className="row align-center"
                    style={{
                        marginBottom: 24,
                    }}
                >
                    <input
                        value={text}
                        style={{
                            width: "250px",
                            height: "32px",
                        }}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={() => addTask(text)}>Add</button>
                </div>
                <div className="column gap-md">
                    <div
                        style={{
                            width: "80vw",
                            background: "#40444c",
                            minHeight: "200px",
                            borderRadius: "16px",
                            padding: "24px",
                        }}
                        className="column gap-md"
                    >
                        <div className="row gap-md">
                            <input
                                value={textFilter}
                                style={{
                                    width: "250px",
                                    height: "32px",
                                }}
                                onChange={(e) => setTextFilter(e.target.value)}
                            />
                            <select
                                onChange={(e) => {
                                    setStatusFilter(e.target.value);
                                }}
                                value={statusFilter}
                            >
                                <option value="all">All</option>
                                <option value="todo">To do</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <div className="todo-list w-100">
                            <div className="column gap-md">
                                {tasks.map((task) => (
                                    <TodoItem
                                        key={task.id}
                                        task={task}
                                        deleteTask={deleteTask}
                                        onChangeItem={onChangeItem}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

// function Matrix({ xLength, yLength }) {
//     return (
//         <div>
//             {[...Array(yLength)].map((x, xi) => {
//                 return (
//                     <React.Fragment>
//                         <div className="row">
//                             {[...Array(xLength)].map((y, yi) => (
//                                 <img
//                                     key={`${xi}-${yi}`} // Combined key based on both indices
//                                     src={
//                                         (xi + yi) % 2 === 1
//                                             ? "./one.png"
//                                             : "./zero.png"
//                                     }
//                                     alt=""
//                                 />
//                             ))}
//                         </div>
//                     </React.Fragment>
//                 );
//             })}
//         </div>
//     );
// }

// function App() {
//     const [xLength, setXLength] = useState(5);
//     const [yLength, setYLength] = useState(8);
//     const [matrix, setMatrix] = useState();

//     const onSubmit = () => {
//         setMatrix(<Matrix xLength={xLength} yLength={yLength} />);
//     };

//     return (
//         <div
//             className="column"
//             style={{
//                 alignItems: "center",
//             }}
//         >
//             <div className="row gap-md">
//                 <div className="column">
//                     <div>X Length</div>
//                     <input
//                         value={xLength}
//                         onChange={(e) =>
//                             setXLength(Number(e.currentTarget.value))
//                         }
//                         min={1}
//                         type="number"
//                     />
//                 </div>

//                 <div className="column">
//                     <div>Y Length</div>
//                     <input
//                         value={yLength}
//                         onChange={(e) =>
//                             setYLength(Number(e.currentTarget.value))
//                         }
//                         min={1}
//                         type="number"
//                     />
//                 </div>

//                 <button onClick={onSubmit}>Submit</button>
//             </div>
//             <div>{matrix}</div>
//         </div>
//     );
// }

export default App;
