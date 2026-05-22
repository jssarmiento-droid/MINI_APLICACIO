import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";

import type { Task } from "./interfaces/Task";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await fetch("http://localhost:3001/tasks");

    const data = await respuesta.json();

    setTasks(data);
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tasks"
          element={
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
              obtenerTareas={obtenerTareas}
            />
          }
        />

        <Route
          path="/stats"
          element={<Stats tasks={tasks} />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;