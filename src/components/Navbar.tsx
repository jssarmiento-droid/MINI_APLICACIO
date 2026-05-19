import { Link } from "react-router-dom";

import { Menu } from "antd";

function Navbar() {

  return (

    <Menu
      mode="horizontal"
      theme="dark"
    >

      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="tasks">
        <Link to="/tasks">Tareas</Link>
      </Menu.Item>

      <Menu.Item key="stats">
        <Link to="/stats">Estadísticas</Link>
      </Menu.Item>

    </Menu>

  );
}

export default Navbar;