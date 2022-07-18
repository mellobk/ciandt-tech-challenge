import React from "react";
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
  searchValue,
  placeholder
}) => {
  const handleItemClick = (value) => {
    onSelectItem?.(value);
  };


  return (
    <div className={` search-bar-container ${className} ${disabled && "disabled"}`}>
      {title && <div className="title">{title}</div>}
      <Input value={searchValue} onChange={onChangeInput} placeholder={placeholder}/>
      <div className={`dropdown-body ${(seuggets?.length && searchValue) && "open"}`}>
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
  searchValue: PropTypes.string,
  onChangeInput: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onSelectItem: PropTypes.func,
  defaultMessage: PropTypes.string,
  title: PropTypes.string,
};

export default SearchBar;
