import {
  Input,
  Select,
  Button
} from "antd";

interface Props {

  title: string;

  setTitle: React.Dispatch<
    React.SetStateAction<string>
  >;

  priority: string;

  setPriority: React.Dispatch<
    React.SetStateAction<string>
  >;

  addTask: () => void;
}

function TaskForm({
  title,
  setTitle,
  priority,
  setPriority,
  addTask
}: Props) {

  return (

    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 20
      }}
    >

      <Input
        placeholder="Ingrese tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select
        value={priority}
        onChange={(value) => setPriority(value)}
        style={{ width: 200 }}
        options={[
          { value: "Alta", label: "Alta" },
          { value: "Media", label: "Media" },
          { value: "Baja", label: "Baja" }
        ]}
      />

      <Button
        type="primary"
        onClick={addTask}
      >
        Agregar tarea
      </Button>

    </div>

  );
}

export default TaskForm;