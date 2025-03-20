import React from "react";
import { FiUpload } from "react-icons/fi";

interface InputfieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
  accept?: string;
}

const Inputfield: React.FC<InputfieldProps> = ({
  label,
  name,
  value,
  onChange,
  type,
  error,
  required,
}) => {
  return (
    <div className="flex m-3">
      <label className="block text-secondary text-sm font-medium mr-9 w-20">
        {label} {required && <span className="error-color">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-[30vw] py-2 px-2 border border-color rounded-md outline-none focus:outline-none"
      />

      {error && <p className="error-color text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Inputfield;
