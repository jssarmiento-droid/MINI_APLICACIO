import {
  Card,
  Statistic
} from "antd";

import type { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
}

function Stats({ tasks }: Props) {

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (

    <div
      style={{
        padding: 40,
        maxWidth: 700,
        margin: "0 auto"
      }}
    >

      <h1>Estadísticas</h1>

      <Card style={{ marginBottom: 20 }}>

        <Statistic
          title="Total tareas"
          value={tasks.length}
        />

      </Card>

      <Card style={{ marginBottom: 20 }}>

        <Statistic
          title="Completadas"
          value={completedTasks}
        />

      </Card>

      <Card>

        <Statistic
          title="Pendientes"
          value={pendingTasks}
        />

      </Card>

    </div>

  );
}

export default Stats;