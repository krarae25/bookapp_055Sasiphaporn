"use client";

import { useState } from "react";

type AddBookFormProps = {
  onAdd: (name: string, year: number, status: boolean) => void;
};

export default function AddBookForm({ onAdd }: AddBookFormProps) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  // State สำหรับเก็บค่าการติ๊กสถานะ (ค่าเริ่มต้นเป็น false)
  const [status, setStatus] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() === "" || year === "") return;

    // status กลับไปด้วย
    onAdd(name, Number(year), status);

    // ล้างค่าอินพุต
    setName("");
    setYear("");
    setStatus(false);
  }

  return (
    <div className="max-w-lg mx-auto my-4 rounded-xl bg-white p-4 shadow-sm border-2 border-blue-100">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ชื่อหนังสือ..."
            className="flex-1 min-w-120px rounded-lg border border-gray-300 px-3 py-2 text-gray-700 outline-none focus:border-blue-500 text-sm"
          />

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="ปี ค.ศ."
            className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-gray-700 outline-none focus:border-blue-500 text-sm"
          />
        </div>

        {/* Checkbox สำหรับติ๊กสถานะ In Stock */}
        <div className="flex items-center gap-2 px-1">
          <input
            type="checkbox"
            id="status"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="status" className="flex items-center gap-1.5 text-sm text-gray-700 whitespace-nowrap select-none px-1">
            In Stock 
          </label>
        </div>

        <button
          type="submit"
          className="shrink-0 rounded-lg bg-green-500 px-4 py-2 font-medium text-white text-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
}