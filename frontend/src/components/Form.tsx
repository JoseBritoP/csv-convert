import React from "react";

export default function Form() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files ?? [];
    console.log(file);
  };
  return (
    <form className="border-gray-100 p-4 flex flex-col">
      <fieldset className="border-2 p-6 border-gray-100 rounded-lg">
        <div className="flex items-center gap-6 border-2 p-4 rounded-lg">
          <label
            htmlFor="file"
            className="text-center text-slate-200 font-semibold cursor-pointer"
          >
            CSV File
          </label>
          <input
            onChange={handleInputChange}
            type="file"
            name="file"
            id="file"
            accept=".csv"
            className="text-gray-200 px-4 font-semibold "
          />
        </div>
        <div className="flex items-center w-full justify-evenly pt-4">
          <button className="text-emerald-500 border-2 border-emerald-600 px-2 py-4 rounded-lg font-semibold hover:bg-emerald-950 transition-colors duration-300 ease-in-out hover:text-emerald-300">
            Upload file
          </button>
          <button className="text-red-500 border-2 border-red-600 px-2 py-4 rounded-lg font-semibold hover:bg-red-950 hover:text-red-300 transition-colors duration-300 ease-in-out">
            Remove file
          </button>
        </div>
      </fieldset>
    </form>
  );
}
