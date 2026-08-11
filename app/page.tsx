"use client";

import Booklist from "@/components/book-list";
import AddBookForm from "@/components/add-book-from";
import { book } from "@/types/book";
import { mockBooks } from "@/lib/mock-books";
import { useState } from "react";

function Home() {
  const [books, setBooks] = useState<book[]>(mockBooks);

  // ฟังก์ชันอัปเดตสถานะ
  function handleToggle(name: string) {
    setBooks((prev) =>
      prev.map((book) =>
        book.name === name ? { ...book, status: !book.status } : book
      )
    );
  }

  // ฟังก์ชันลบรายการหนังสือ
  function handleDelete(name: string) {
    setBooks((prev) => prev.filter((book) => book.name !== name));
  }

  // ฟังก์ชันเพิ่มชื่อหนังสือ
  function handleAdd(name: string, year: number, status: boolean) {
    const newBook: book = {
      name,
      year,
      status, 
    };
    setBooks((prev) => [newBook, ...prev]);
  }

  // === เพิ่มฟังก์ชันสำหรับแก้ไข (Edit) ===
  // รับชื่อเดิม (เพื่อหาตัวที่จะแก้) และรับชื่อใหม่+ปีใหม่ (เพื่อไปอัปเดต)
  function handleEdit(oldName: string, newName: string, newYear: number) {
    setBooks((prev) =>
      prev.map((book) =>
        book.name === oldName ? { ...book, name: newName, year: newYear } : book
      )
    );
  }

  return (
    <div>
      <div id="Headers" className="text-center max-w-lg mx-auto my-6">
        <h1 className="text-2xl font-bold text-gray-800">Book Store App</h1>
        <p className="text-gray-500">Every book, you can find here.</p>
      </div> 

      <AddBookForm onAdd={handleAdd} />
      {/* ส่งฟังก์ชัน onEdit ต่อไปให้ลูก */}
      <Booklist 
        books={books} 
        onToggle={handleToggle} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />  
    </div>
  );
}

export default Home;