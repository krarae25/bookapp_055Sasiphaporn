//ลูก
import type { book } from "@/types/book";

//ชนิดข้อมูล (Type) ของ Props
type BookItemProps = {
  book: book;
  onToggle: (name: string) => void;
  onDelete: (name: string) => void;
};

//รับ Props มาแกะตัวแปรใช้งาน เพื่อแสดงผลหน้า UI
function Bookitem({ book, onToggle, onDelete }: BookItemProps) {
  return (
    <div>
      <div className="max-w-lg mx-auto my-3 flex items-center justify-between p-3 border-2 border-blue-800 rounded-xl bg-white shadow-sm">
  
         {/* ดึงชื่อและปีของหนังสือเล่มนั้นมาวางแสดงผลบน UI */}
        <div className="font-semibold text-gray-800">{book.name}</div>
        
        <div className="flex items-center gap-3">
          <div className="text-gray-800">{book.year}</div>

          {/* สถานะ */}
          <div className="w-20 text-center font-medium">
            {book.status ? "in stock" : "NA"}
          </div>

          {/* ปุ่มสลับสถานะ */}
          <button 
            type="button" 
            onClick={() => onToggle(book.name)} 
            className="bg-blue-500 p-2 px-4 text-white rounded-2xl text-sm"
          >
            Status
          </button>

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