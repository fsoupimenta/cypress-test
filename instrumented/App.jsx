import React from "react";
import { useState } from "react";

import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks.jsx"

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,
        },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            title: taskTitle,
            id: Math.random(10),
            completed: false
        },
    ];
        setTasks(newTask);
    };

    function sum (a, b){
        return a + b;
    }

    return (
        <div className="container">
            <AddTasks handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} />
        </div>
    )
};

export default App;