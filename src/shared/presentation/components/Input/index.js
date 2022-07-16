import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const InputApp = ({
  title,
  titleColor,
  variant,
  className,
  children,
  error,
  register,
  ...rest
}) => {
  return (
    <div className={"input-container"}>
      {title && (
        <div
          className={"input-title"}
          style={{ color: titleColor && titleColor }}
        >
          {title}
        </div>
      )}

      <input
        className={`${className} ${variant}`}
        {...register}
        {...rest}
      />
      {children}

      {error && (
        <div className="footer">
          <p className="error">{error}</p>
        </div>
      )}
    </div>
  );
};

InputApp.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  register: PropTypes.object,
  titleColor: PropTypes.string,
};

InputApp.defaultProps = {
  title: "",
  variant: "",
  className: "",
  error: "",
};

export default InputApp;
