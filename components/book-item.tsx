"use client"; // จำเป็นต้องใส่เพราะมีการใช้ useState

import { useState } from "react";
import type { book } from "@/types/book";

// เพิ่ม onEdit ใน Type
type BookItemProps = {
  book: book;
  onToggle: (name: string) => void;
  onDelete: (name: string) => void;
  onEdit: (oldName: string, newName: string, newYear: number) => void;
};

function Bookitem({ book, onToggle, onDelete, onEdit }: BookItemProps) {
  // === UI State ชั่วคราวสำหรับการแก้ไข ===
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(book.name);
  const [draftYear, setDraftYear] = useState(book.year);

  // ฟังก์ชันบันทึกข้อมูลเมื่อแก้ไขเสร็จ
  function saveEdit() {
    const trimmedName = draftName.trim();
    // ตรวจสอบว่าไม่ได้พิมพ์ชื่อว่างเปล่า
    if (trimmedName !== "") {
      onEdit(book.name, trimmedName, Number(draftYear));
    } else {
      // ถ้ายกเลิกหรือพิมพ์ว่าง ให้คืนค่าเดิม
      setDraftName(book.name);
      setDraftYear(book.year);
    }
    setIsEditing(false); // ปิดโหมดแก้ไข
  }

  return (
    <div>
      <div className="max-w-lg mx-auto my-3 flex items-center justify-between p-3 border-2 border-violet-300 rounded-xl bg-white shadow-sm">
  
        {/* ส่วนแสดงชื่อหนังสือ หรือ ช่องกรอกชื่อเมื่อกำลังแก้ไข */}
        <div className="flex-1 mr-4">
          {isEditing ? (
            <input
              type="text"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-gray-700 outline-none focus:border-violet-500"
              autoFocus
            />
          ) : (
            <div 
              onDoubleClick={() => setIsEditing(true)} 
              className="font-semibold text-gray-800"
            >
              {book.name}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          {/* ส่วนแสดงปี หรือ ช่องกรอกปีเมื่อกำลังแก้ไข */}
          {isEditing ? (
            <input
              type="number"
              value={draftYear}
              onChange={(e) => setDraftYear(Number(e.target.value))}
              className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center text-gray-700 outline-none focus:border-violet-500"
            />
          ) : (
            <div className="text-gray-800 w-12 text-center">{book.year}</div>
          )}

          {/* สถานะ */}
          <div className="w-16 text-center font-medium text-sm">
            {book.status ? "in stock" : "NA"}
          </div>

          {/* ปุ่มบันทึก (Save) หรือ แก้ไข (Edit) */}
          {isEditing ? (
            <button 
              type="button" 
              onClick={saveEdit} 
              className="bg-green-500 p-2 px-4 text-white rounded-2xl text-sm w-20"
            >
              Save
            </button>
          ) : (
            <button 
              type="button" 
              onClick={() => setIsEditing(true)} 
              className="bg-yellow-500 p-2 px-4 text-white rounded-2xl text-sm w-20"
            >
              Edit
            </button>
          )}

          {/* ปุ่มสลับสถานะ (ซ่อนตอนกำลังแก้ไข) */}
          {!isEditing && (
            <button 
              type="button" 
              onClick={() => onToggle(book.name)} 
              className="bg-blue-500 p-2 px-4 text-white rounded-2xl text-sm"
            >
              Status
            </button>
          )}

          {/* ปุ่มลบ */}
          <button 
            type="button" 
            onClick={() => onDelete(book.name)} 
            className="bg-red-600 p-2 px-4 text-white rounded-2xl text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bookitem;