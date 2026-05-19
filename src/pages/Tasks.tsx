import { useState } from "react";

import type { Task } from "../interfaces/Task";

import TaskForm from "../components/TaskForm";

import TaskList from "../components/TaskList";

interface Props {

  tasks: Task[];

  setTasks: React.Dispatch<
    React.SetStateAction<Task[]>
  >;
}

function Tasks({
  tasks,
  setTasks
}: Props) {

  const [title, setTitle] = useState("");

  const [priority, setPriority] = useState("Alta");

  const addTask = () => {

    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setPriority("Alta");

  };

  const completeTask = (id: number) => {

    const updatedTasks = tasks.map((task) =>

      task.id === id
        ? { ...task, completed: true }
        : task

    );

    setTasks(updatedTasks);

  };

  const deleteTask = (id: number) => {

    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(filteredTasks);

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