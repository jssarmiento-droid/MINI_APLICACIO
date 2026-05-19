import {
  Card,
  Button
} from "antd";

import {
  CheckOutlined,
  DeleteOutlined
} from "@ant-design/icons";

import type { Task } from "../interfaces/Task";

interface Props {
  task: Task;

  completeTask: (id: number) => void;

  deleteTask: (id: number) => void;
}

function TaskItem({
  task,
  completeTask,
  deleteTask
}: Props) {

  return (

    <Card style={{ marginBottom: 20 }}>

      <h3
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none"
        }}
      >
        {task.title}
      </h3>

      <p>Prioridad: {task.priority}</p>

      <p>
        Estado:
        {task.completed
          ? " Completada"
          : " Pendiente"}
      </p>

      <Button
        type="primary"
        icon={<CheckOutlined />}
        onClick={() => completeTask(task.id)}
      >
        Completar
      </Button>

      <Button
        danger
        icon={<DeleteOutlined />}
        style={{ marginLeft: 10 }}
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </Button>

    </Card>

  );
}

export default TaskItem;