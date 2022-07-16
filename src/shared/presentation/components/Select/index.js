
import { CaretDown } from 'phosphor-react';
import React, { useState } from 'react';
import './Select.scss'
import PropTypes from "prop-types";

const Select = ({
  title,
  options,
  disabled,
  className,
  onSelectItem,
  defaultOption,
  defaultMessage,
  error,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState(defaultOption);

  const toggleDropdown = () => !disabled && setOpen(!isOpen);

  const handleItemClick = (value) => {
    setSelectedItem(value);
    setOpen(!isOpen);
    onSelectItem?.(value);
  };

  return (
    <div className={` select-container ${className} ${disabled && 'disabled'}`}>

        {title&&<div className='title'>{title}</div>}
      <div
        role="presentation"
        className={`dropdown-header ${isOpen && 'focused'} ${
          disabled && 'disabled'
        }`}
        onClick={toggleDropdown}
      >
        {selectedItem ? selectedItem.label : defaultMessage}
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {options?.map((item) => (
          <div
            aria-hidden="true"
            key={item.id}
            className={`dropdown-item ${
              item.id === selectedItem?.id && 'selected'
            }`}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {error && (
        <div className="footer">
          <p className="error">{error}</p>
        </div>
      )}
      <CaretDown 
        className={`icon ${isOpen && 'open'} ${isOpen && 'focused'} ${
          disabled && 'disabled'
        }`}
      />

    </div>
  );
};



Select.propTypes = {
    options: PropTypes.array,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onSelectItem: PropTypes.func,
    defaultOption: PropTypes.object,
    defaultMessage: PropTypes.string,
    title: PropTypes.string,
    error: PropTypes.string,

  };

  
export default Select;