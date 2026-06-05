import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Stats from "./pages/Stats";
import Navbar from "./components/Navbar";
import api from "./api/axios";

import { useEffect, useState } from "react";

import type { Task } from "./interfaces/Task";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await api.get<Task[]>("/tasks");

    setTasks(respuesta.data);
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