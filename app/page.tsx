"use client";
//เเม่ใหญ่
import Booklist from "@/components/book-list"
import { book } from "@/types/book";
import { mockBooks } from "@/lib/mock-books";
import { useState } from "react";

function Home() {
  // แปลง mockBooks มาเก็บใน State เพื่อให้กดแก้ไข/ลบแล้วหน้าเว็บอัปเดตได้
   const [books, setBooks] = useState<book[]>(mockBooks);

   //ฟังก์ชันอัปเดตสถานะ
   function handleToggle(name: string) {
    setBooks((prev) =>
      //วนลูปหาหนังสือที่ชื่อตรงกับ name ที่ถูกกด แล้วสลับค่า status จาก true เป็น false (หรือกลับกัน)
      prev.map((book) =>
        book.name === name ? { ...book, status: !book.status } : book
      )
    );
  }

  //ฟังก์ชันลบรายการหนังสือตามชื่อ
  function handleDelete(name: string) {
    //คัดเอาเฉพาะหนังสือที่ชื่อ ไม่ตรงกับ name ที่กดลบ แล้วอัปเดตลง State ทำให้เล่มที่กดโดนลบหายไปจากหน้าจอ
    setBooks((prev) => prev.filter((book) => book.name !== name));
  }

  return (
    <div>
    <div id = "Headers" className="text-center max-w-lg mx-auto my-6">
      <h1 className="text-2xl font-bold text-gray-800">Book Store App</h1>
      <p className="text-gray-500">Every book, you can find here.</p>
    </div> 
    
     <Booklist books={books} onToggle={handleToggle} onDelete={handleDelete}/>  
     </div>
  
  )
}
export default Home
