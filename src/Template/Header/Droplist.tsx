import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DropListProps {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

const DropList: React.FC<DropListProps> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left transition-all duration-300"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`px-4 py-2 text-violet-500 font-semibold h-15 border-b-3 transition-all duration-300 
        ${isOpen ? "border-amber-300" : "border-transparent"}`}
      >
        {placeholder}
      </button>

      <div
        className={`absolute left-0 w-48 bg-new-color rounded-md shadow-lg transform transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }`}
      >
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-primary cursor-pointer bg-new-color hover:bg-lime-800 transition-all duration-300"
            >
              <Link to="/careers">{option}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropList;
