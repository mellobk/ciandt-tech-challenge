import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AdminLayout.scss";
import menu from "../../../application/constants/menu";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="menu">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="layout-link"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
