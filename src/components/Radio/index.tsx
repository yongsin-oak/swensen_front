import React from "react";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className=" w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 radio-button"
      />
      <label
        htmlFor={value}
        className="text-gray-700 text-sm font-medium text-label-medium"
      >
        {label}
      </label>
      {errorMessage && (
        <span className="text-red-500 text-sm ml-2">{errorMessage}</span>
      )}
    </div>
  );
};

export default Radio;
