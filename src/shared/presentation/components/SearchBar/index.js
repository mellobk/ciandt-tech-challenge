import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";
import Input from "../Input";

const SearchBar = ({
  title,
  seuggets,
  disabled,
  className,
  onChangeInput,
  onSelectItem,
}) => {
  const [isOpen, setOpen] = useState(false);
  useState("");

  const handleItemClick = (value) => {
    setOpen(!isOpen);
    onSelectItem?.(value);
  };

  return (
    <div className={` select-container ${className} ${disabled && "disabled"}`}>
      {title && <div className="title">{title}</div>}
      <Input onChange={onChangeInput} />
      <div className={`dropdown-body ${seuggets?.length && "open"}`}>
        {seuggets?.map((item, key) => (
          <div
            aria-hidden="true"
            key={key}
            className={`dropdown-item`}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  seuggets: PropTypes.array,
  disabled: PropTypes.bool,
  onChangeInput: PropTypes.func,
  className: PropTypes.string,
  onSelectItem: PropTypes.func,
  defaultMessage: PropTypes.string,
  title: PropTypes.string,
};

export default SearchBar;
