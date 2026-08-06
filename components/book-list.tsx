//เเม่รอง
import Bookitem from "./book-item";
import type { book } from "@/types/book";

// Props ข้อมูล books และฟังก์ชันสลับสถานะ / ลบรายการที่ต้องรับมาจาก แม่ใหญ่
type BooklistProp = {
  books: book[];
  onToggle: (name: string) => void;
  onDelete: (name: string) => void;
};

function Booklist({ books, onToggle, onDelete }: BooklistProp) {
  return (
    <div>
      {/* วนลูปส่งข้อมูลแต่ละเล่ม และส่งฟังก์ชันต่อไปยัง Bookitem */}
      {books.map((book) => (
        <Bookitem 
          key={book.name} 
          book={book} 
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Booklist;