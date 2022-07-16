import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const ButtonApp = ({
  onClick,
  textButton,
  titleButton,
  variant,
  ClassName,
  ...rest
}) => {

  return (
    <div className='button-container'>
      <div className='title'>{titleButton}</div>
      <button
        className={`${ClassName} ${variant}`}
        onClick={onClick}
        {...rest}
      >
        {textButton}
      </button>
    </div>
  );
};

ButtonApp.propTypes = {
  onClick: PropTypes.func,
  textButton: PropTypes.string,
  variant: PropTypes.string,
  ClassName: PropTypes.string,
  titleButton: PropTypes.string,
};

ButtonApp.defaultProps = {
  textButton: "",
  variant: "",
  ClassName: "",
  titleButton:""
};

export default ButtonApp;
