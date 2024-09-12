import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">MyApp</Link>
        </div>

        <nav className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/todos">Todos</NavLink>
          <NavLink to="/login" className="login-btn">Login</NavLink>
        </nav>

        <Button className="mobile-menu-button" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={closeDrawer} open={visible}>
          <Menu mode="vertical">
            <Menu.Item key="home">
              <Link to="/" onClick={closeDrawer}>Home</Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products" onClick={closeDrawer}>Products</Link>
            </Menu.Item>
            <Menu.Item key="posts">
              <Link to="/posts" onClick={closeDrawer}>Posts</Link>
            </Menu.Item>
            <Menu.Item key="todos">
              <Link to="/todos" onClick={closeDrawer}>Todos</Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to="/users" onClick={closeDrawer}>Users</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login" onClick={closeDrawer}>Login</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
