import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="menu">
        {menu.map((item, index) => {
          <Link
            key={index}
            onClick={() => toggleAction(key)}
            to={item.link}
            className="layout-link"
          >
            {item.icon}
          </Link>;
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
