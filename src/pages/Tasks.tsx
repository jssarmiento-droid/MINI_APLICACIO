import { useState } from "react";

import type { Task } from "../interfaces/Task";

import TaskForm from "../components/TaskForm";

import TaskList from "../components/TaskList";

interface Props {
  tasks: Task[];

  setTasks: React.Dispatch<
    React.SetStateAction<Task[]>
  >;

  obtenerTareas: () => Promise<void>;
}

function Tasks({
  tasks,
  setTasks,
  obtenerTareas
}: Props) {

  const [title, setTitle] = useState("");

  const [priority, setPriority] = useState("Alta");

  const addTask = async () => {

    if (title.trim() === "") {
      return;
    }

    await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        priority,
      }),
    });

    await obtenerTareas();

    setTitle("");
    setPriority("Alta");

  };

  const completeTask = async (id: number) => {

    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
    });

    await obtenerTareas();

  };

  const deleteTask = async (id: number) => {

    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });

    await obtenerTareas();

  };

  return (

    <div
      style={{
        padding: 40,
        maxWidth: 700,
        margin: "0 auto"
      }}
    >

      <h1>Tareas</h1>

      <p>Total tareas: {tasks.length}</p>

      <TaskForm
        title={title}
        setTitle={setTitle}
        priority={priority}
        setPriority={setPriority}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />

    </div>

  );
}

export default Tasks;