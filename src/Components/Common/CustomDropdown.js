import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CustomDropdown = ({ field, form, options, title, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value, name) => {
    form.setFieldValue(field.name, value);
    setSelectedOption(name);
    setIsOpen(false);
  };

  return (
    <>
      <label htmlFor={field.name}>{title}</label>
      <div className="relative inline-block w-full">
        <input
          id={field.name}
          {...field}
          placeholder={placeholder}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          onBlur={field.onBlur}
          className="bg-gray-100 rounded px-3 py-2 w-full cursor-pointer focus:outline-none focus:shadow-outline"
        />
        <div className="absolute right-0 top-0 bottom-0 flex items-center px-3 pointer-events-none">
          <BiChevronDown className="w-6 h-6 text-gray-600" />
        </div>
        {isOpen && (
          <div className="absolute z-10 bg-white border rounded mt-1 w-full max-h-36 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value, option.name)}
                // className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                className={
                  option.name === selectedOption
                    ? "py-2 px-4 cursor-pointer bg-gray-200 rounded m-1"
                    : "py-2 px-4 cursor-pointer hover:bg-gray-200 rounded m-1"
                }
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {form.touched[field.name] && form.errors[field.name] ? (
        <div>{form.errors[field.name]}</div>
      ) : null}
    </>
  );
};

export default CustomDropdown;
