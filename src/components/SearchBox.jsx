import React from "react";
import { MaterialSymbol } from "react-material-symbols";

const SearchBox = () => {
  return (
    <div className="flex items-center bg-cardBg shadow-lg max-sm:justify-center ml-4">
      <div className="flex items-center bg-[#292A30] border border-[#3A3D44] text-gray-400 rounded-lg max-sm:rounded-full px-2 py-2 w-full max-w-lg ml-4 max-sm:ml-0 max-sm:w-auto">
        <div className="flex max-sm:justify-center items-center max-sm:w-auto">
          <MaterialSymbol
            icon="search"
            size={24}
            weight={300}
            color="#D7D6D8"
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#292A30] text-white focus:outline-none ml-2 w-full "
        />
      </div>
    </div>
  );
};

export default SearchBox;
