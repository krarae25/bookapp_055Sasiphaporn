import Bookitem from "./book-item";
import type { book } from "@/types/book";

// เพิ่ม onEdit ใน Type
type BooklistProp = {
  books: book[];
  onToggle: (name: string) => void;
  onDelete: (name: string) => void;
  onEdit: (oldName: string, newName: string, newYear: number) => void;
};

function Booklist({ books, onToggle, onDelete, onEdit }: BooklistProp) {
  return (
    <div>
      {books.map((book) => (
        <Bookitem
          key={book.name} // หากชื่อหนังสือซ้ำกัน อาจมีปัญหาเตือนเรื่อง key ซ้ำได้ในอนาคต
          book={book}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit} 
        />
      ))}
    </div>
  )
}

export default Booklist;