import React from "react";

const HoverFocus = () => {
  return (
    <div>
      <div>
        <button className="w-40 bg-sky-400 hover:bg-sky-600 rounded hover:shadow-lg">
          Save
        </button>
        <button className="bg-red-300 text-white font-semibold w-40 hover:bg-red-500 focus:ring-4 focus:ring-red-400">
          Cancel
        </button>
      </div>

      <div>
        <input
          type="email"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-red-500 block w-1/2 p-2 mt-2 peer"
        />
        <p className="mt-2 text-red-600 text-sm invisible peer-invalid:visible">
          Please provide a valid email
        </p>
      </div>
    </div>
  );
};

export default HoverFocus;
