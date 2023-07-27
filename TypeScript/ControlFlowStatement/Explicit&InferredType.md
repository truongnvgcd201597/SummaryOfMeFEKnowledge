# Explicit & Inferred Type

## 1. Explicit Type:

> Explicit type trong TypeScript đề cập đến việc xác định kiểu dữ liệu một cách rõ ràng và tường minh cho biến, hàm, lớp, và các thành phần khác trong mã TypeScript. Khai báo kiểu explicit type thì sử dụng dấu 2 chấm đằng sau tên biến.

```ts
// Sử dụng explicit type cho biến
let age: number = 25;
let username: string = "John Doe";
let isStudent: boolean = true;

// Sử dụng explicit type cho hàm
function add(a: number, b: number): number {
  return a + b;
}

// Sử dụng explicit type cho lớp
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Sử dụng explicit type cho mảng
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

Lợi ích của explicit type bao gồm:

- Đảm bảo kiểm tra kiểu dữ liệu: Việc sử dụng explicit type giúp TypeScript kiểm tra và đảm bảo rằng các giá trị được gán cho biến hoặc trả về từ hàm phải tuân thủ đúng kiểu dữ liệu đã định nghĩa.
- Làm cho mã dễ đọc và dễ hiểu: Khai báo kiểu dữ liệu một cách rõ ràng giúp người đọc mã hiểu được ý nghĩa và kiểu dữ liệu của các biến và thành phần trong mã.
- Hỗ trợ IntelliSense và autocompletion: Khi bạn sử dụng explicit type, trình biên dịch và trình biên tập mã có thể cung cấp gợi ý và tự động hoàn thành mã (IntelliSense) dựa trên kiểu dữ liệu đã xác định.

## 2. Inferred Type:

> Inferred types là tính năng tự động trong TypeScript cho phép trình biên dịch suy luận kiểu dữ liệu của biến, hàm, lớp và các thành phần khác dựa vào giá trị hoặc cấu trúc mã mà bạn đã khai báo.

Khi bạn không xác định kiểu dữ liệu một cách rõ ràng, TypeScript sẽ tự động suy luận kiểu dữ liệu dựa vào các thông tin có sẵn trong mã.

```ts
let name = "John"; // TypeScript suy luận biến name là kiểu string
let age = 30; // TypeScript suy luận biến age là kiểu number
let isStudent = true; // TypeScript suy luận biến isStudent là kiểu boolean

function add(a: number, b: number) {
  return a + b; // TypeScript suy luận hàm trả về kiểu number
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("Alice", 25); // TypeScript suy luận biến person là kiểu Person
```

Lợi ích của inferred types bao gồm:

- Giảm sự lặp lại: Bạn không cần phải viết lại kiểu dữ liệu nếu TypeScript có thể suy luận được nó từ giá trị hoặc cấu trúc mã.
- Giúp mã ngắn gọn và dễ đọc: Với kiểu dữ liệu được suy luận tự động, mã TypeScript thường ngắn gọn hơn và dễ đọc hơn vì không cần phải viết các khai báo kiểu dữ liệu thừa.
- Tự động cập nhật: Khi bạn thay đổi giá trị hoặc cấu trúc mã, TypeScript sẽ tự động cập nhật kiểu dữ liệu suy luận mà không yêu cầu bạn phải chỉnh sửa các khai báo kiểu dữ liệu thủ công.
