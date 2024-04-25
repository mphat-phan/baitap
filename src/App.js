import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/todo-item";
import { taskData } from "./data";
// function App() {
//     const [data, setData] = useState(taskData);
//     const [tasks, setTasks] = useState(data);
//     const [textFilter, setTextFilter] = useState("");
//     const [statusFilter, setStatusFilter] = useState("all");

//     const [text, setText] = useState("");
//     function addTask(text) {
//         const newTask = {
//             id: Date.now(),
//             text,
//             completed: false,
//         };
//         setData([...tasks, newTask]);
//         setText("");
//     }

//     function deleteTask(id) {
//         setTasks(tasks.filter((task) => task.id !== id));
//     }

//     useEffect(() => {
//         const status =
//             statusFilter === "all"
//                 ? null
//                 : statusFilter === "todo"
//                 ? false
//                 : true;

//         const filteredData = data.filter((item) =>
//             item.text.toLowerCase().includes(textFilter.toLowerCase()) &&
//             status != null
//                 ? item.completed === status
//                 : true
//         );
//         console.log(filteredData);
//         setTasks(filteredData);
//     }, [textFilter, data, statusFilter]);

//     function onChangeItem(id, key, value) {
//         setTasks(
//             tasks.map((task) => {
//                 if (task.id === id) {
//                     return { ...task, [key]: value };
//                 } else {
//                     return task;
//                 }
//             })
//         );
//     }

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h2>TODO LIST</h2>
//                 <div
//                     className="row align-center"
//                     style={{
//                         marginBottom: 24,
//                     }}
//                 >
//                     <input
//                         value={text}
//                         style={{
//                             width: "250px",
//                             height: "32px",
//                         }}
//                         onChange={(e) => setText(e.target.value)}
//                     />
//                     <button onClick={() => addTask(text)}>Add</button>
//                 </div>
//                 <div className="column gap-md">
//                     <div
//                         style={{
//                             width: "80vw",
//                             background: "#40444c",
//                             minHeight: "200px",
//                             borderRadius: "16px",
//                             padding: "24px",
//                         }}
//                         className="column gap-md"
//                     >
//                         <div className="row gap-md">
//                             <input
//                                 value={textFilter}
//                                 style={{
//                                     width: "250px",
//                                     height: "32px",
//                                 }}
//                                 onChange={(e) => setTextFilter(e.target.value)}
//                             />
//                             <select
//                                 onChange={(e) => {
//                                     setStatusFilter(e.target.value);
//                                 }}
//                                 value={statusFilter}
//                             >
//                                 <option value="all">All</option>
//                                 <option value="todo">To do</option>
//                                 <option value="done">Done</option>
//                             </select>
//                         </div>

//                         <div className="todo-list w-100">
//                             <div className="column gap-md">
//                                 {tasks.map((task) => (
//                                     <TodoItem
//                                         key={task.id}
//                                         task={task}
//                                         deleteTask={deleteTask}
//                                         onChangeItem={onChangeItem}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// }

function LatGach({ type }) {
    return (
        <div
            style={{
                width: "80px",
                height: "80px",
                border: "1px solid gray",
                display: "flex",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid gray",
                    borderRadius: "100%",
                    boxSizing: "border-box",
                    overflow: "hidden",
                }}
            >
                <div className="row">
                    <div
                        style={{
                            height: "40px",
                            width: "40px",
                            boxSizing: "border-box",
                            background: type === 1 ? "black" : "none",
                        }}
                    ></div>
                    <div
                        style={{
                            height: "40px",
                            width: "40px",
                            boxSizing: "border-box",
                            background: type === 1 ? "none" : "black",
                        }}
                    ></div>
                </div>
                <div className="row">
                    <div
                        style={{
                            height: "40px",
                            width: "40px",
                            boxSizing: "border-box",
                            background: type === 1 ? "none" : "black",
                        }}
                    ></div>
                    <div
                        style={{
                            height: "40px",
                            width: "40px",
                            boxSizing: "border-box",
                            background: type === 1 ? "black" : "none",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [xLength, setXLength] = useState(1);
    const [yLength, setYLength] = useState(1);
    return (
        <div
            className="column"
            style={{
                alignItems: "center",
            }}
        >
            <div className="row gap-md">
                <div className="column">
                    <div>X Length</div>
                    <input
                        value={xLength}
                        onChange={(e) =>
                            setXLength(Number(e.currentTarget.value))
                        }
                        min={1}
                        type="number"
                    />
                </div>

                <div className="column">
                    <div>Y Length</div>
                    <input
                        value={yLength}
                        onChange={(e) =>
                            setYLength(Number(e.currentTarget.value))
                        }
                        min={1}
                        type="number"
                    />
                </div>
            </div>
            <div>
                {[...Array(yLength)].map((x, xi) => {
                    return (
                        <React.Fragment>
                            <div className="row">
                                {[...Array(xLength)].map((y, yi) => (
                                    <LatGach
                                        type={(xLength - xi + yLength - yi) % 2}
                                    />
                                ))}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
