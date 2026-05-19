import type { Task } from "../interfaces/Task";

import TaskItem from "./TaskItem";

interface Props {

  tasks: Task[];

  completeTask: (id: number) => void;

  deleteTask: (id: number) => void;
}

function TaskList({
  tasks,
  completeTask,
  deleteTask
}: Props) {

  return (

    <>
      {
        tasks.map((task) => (

          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />

        ))
      }
    </>

  );
}

export default TaskList;