import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsVisible(true)}
        className="p-2 text-secondary"
      >
        <AiOutlineSearch size={24} />
      </button>

      <div
        className={`absolute right-0 top-0 h-10 flex items-center transition-all duration-300 ${
          isVisible ? "w-88 opacity-100" : "w-0 opacity-0"
        } overflow-hidden border border-color bg-surface rounded-md`}
      >
        <input
          type="text"
          className="w-full px-3 py-1 outline-none mt-3 "
          placeholder="Search..."
        />
        <button
          onClick={() => setIsVisible(false)}
          className="px-3 text-secondary"
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
