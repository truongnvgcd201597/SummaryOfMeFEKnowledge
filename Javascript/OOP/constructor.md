# Constructor:

## Constructor là gì?
> Constructor là một dạng đặc biệt của hàm trong JavaScript, được sử dụng để tạo ra các đối tượng mới dựa trên một mẫu (template). Mỗi constructor có thể có các tham số và các thuộc tính và phương thức được gán cho đối tượng mới được tạo ra từ nó.

```
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book = new Book('Book One', 'John Doe', '2013');
console.log(book.title); // Output: "Book One"
console.log(book.author); // Output: "John Doe"
console.log(book.year); // Output: "2013"
```

Trong ví dụ trên, chúng ta đã tạo một constructor Book với 3 tham số và gán chúng cho các thuộc tính của đối tượng mới được tạo ra từ nó. Cuối cùng, chúng ta tạo một đối tượng book mới dựa trên constructor Book.

## Ưu & nhược điểm của constructor?
Ưu điểm của constructor trong JavaScript:
- Tái sử dụng: Constructor có thể được sử dụng để tạo nhiều đối tượng có cùng kiểu dữ liệu mà không cần viết lại mã.
- Dễ quản lý: Constructor giúp chúng ta quản lý các thuộc tính và phương thức của đối tượng dễ dàng hơn.
- Tối ưu hóa mã: Constructor giúp chúng ta tối ưu hóa mã bằng cách tái sử dụng mã và giảm thiểu việc tạo nhiều đối tượng từ một mã duy nhất.

Nhược điểm của constructor:
- Khó hiểu: Constructor có thể rất khó hiểu với những người mới bắt đầu học JavaScript.
- Tốn thời gian: Việc sử dụng constructor có thể tốn thời gian và công sức để hiểu và sử dụng chúng đúng cách.
- Khó debug: Nếu có lỗi trong constructor, việc debug có thể rất khó và tốn thời gian.