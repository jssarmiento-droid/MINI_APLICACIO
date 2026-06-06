import { Card, Button } from "antd";

import { Link } from "react-router-dom";

function Home() {

  return (

    <div
      style={{
        padding: 40,
        display: "flex",
        justifyContent: "center"
      }}
    >

      <Card
        title="Sistema de Gestión de Tareas"
        style={{
          width: 500,
          textAlign: "center"
        }}
      >

        <h2>
          Bienvenido a la aplicación
        </h2>

        <p>
          Administra tus tareas fácilmente
        </p>

        <br />

        <Link to="/tasks">

          <Button
            type="primary"
            style={{ marginRight: 10 }}
          >
            Ir a tareas
          </Button>

        </Link>

        <Link to="/stats">

          <Button>
            Ver estadísticas
          </Button>

        </Link>

      </Card>

    </div>

  );
}

export default Home;