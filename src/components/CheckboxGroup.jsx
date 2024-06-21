import React from 'react';

const CheckboxGroup = ({ label, name, options, selectedOptions, onChange }) => {
  return (
    <div className="m-1 p-1">
      <label className="text-lg">{label}:</label>
      {options.map((option) => (
        <label key={option} className="block text-gray-700">
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={onChange}
            className="mr-2 text-md"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
