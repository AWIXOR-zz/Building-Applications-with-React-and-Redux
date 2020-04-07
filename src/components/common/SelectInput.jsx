import React from "react";

const SelectInput = ({
  name,
  label,
  onCahnge,
  defaultOption,
  value,
  options,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onCahnge}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
