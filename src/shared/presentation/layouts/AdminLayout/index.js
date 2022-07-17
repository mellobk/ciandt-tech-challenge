import React from "react";
import PropTypes from "prop-types";


const AdminLayout = ({children}) => {

  return (
  <div className="admin-layout">
    {children}
  </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
