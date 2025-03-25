import React from "react";
import { cn } from "../../utils/cn";

interface InputProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  errorMessage,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-label-medium font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(
          "w-full py-3 px-4 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl text-body-md-regular",
          errorMessage ? "border-red-500" : "border-gray-300"
        )}
      />
      {errorMessage && (
        <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
