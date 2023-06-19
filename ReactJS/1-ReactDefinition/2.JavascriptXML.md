# JSX là gì:
## 1.Định nghĩa:
> JSX (JavaScript XML) là một phần mở rộng của JavaScript được sử dụng trong ReactJS để viết mã giao diện người dùng (UI). JSX cho phép bạn kết hợp mã JavaScript và mã HTML-like trong cùng một tệp để tạo ra các thành phần UI trong React.

Với JSX, bạn có thể viết mã giao diện một cách dễ dàng và rõ ràng hơn bằng cách sử dụng cú pháp giống HTML. Bạn có thể tạo ra các phần tử HTML, component React và kết hợp chúng lại với nhau.

Ví dụ, dưới đây là một ví dụ đơn giản về cách sử dụng JSX để tạo một component đơn giản trong React:
```
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX component.</p>
    </div>
  );
}

export default MyComponent;
```
Trong ví dụ trên, chúng ta sử dụng cú pháp JSX để tạo ra một đoạn mã HTML-like trong hàm render của component MyComponent. JSX cho phép chúng ta sử dụng các phần tử HTML `(như <div>, <h1>, <p>)` và đặt các thuộc tính và nội dung vào trong cặp dấu ngoặc nhọn {} để đánh dấu mã JavaScript. Mã JSX này sẽ được biên dịch thành mã JavaScript thông qua công cụ transpiler trước khi được thực thi trên trình duyệt.

## 2.Các tính năng của JSX:
JSX có một số tính năng quan trọng giúp nó trở thành một công cụ phát triển ứng dụng web mạnh mẽ. Dưới đây là một số tính năng chính của JSX:
- Hợp nhất mã JavaScript và HTML-like: JSX cho phép bạn kết hợp mã JavaScript và mã HTML-like trong cùng một tệp, giúp tạo ra mã giao diện người dùng (UI) dễ đọc và dễ hiểu hơn.
- Cú pháp giống HTML: JSX sử dụng cú pháp giống HTML, điều này giúp các nhà phát triển web quen thuộc với việc viết mã HTML có thể dễ dàng chuyển sang viết mã JSX.
- Expressiveness: JSX cho phép bạn sử dụng các biểu thức JavaScript bên trong cặp dấu ngoặc nhọn {} trong mã JSX, cho phép bạn tích hợp logic và tính toán vào các phần tử giao diện.
- Tích hợp dễ dàng với React Components: JSX là một phần của ReactJS và được sử dụng chủ yếu để tạo các component React. Bạn có thể tạo ra các component React bằng cách sử dụng cú pháp JSX.
- Tối ưu hiệu suất: JSX được biên dịch thành mã JavaScript thông qua công cụ transpiler trước khi chạy trên trình duyệt, điều này giúp tối ưu hiệu suất của ứng dụng ReactJS.
- Hỗ trợ cho các thuộc tính và sự kiện: JSX cho phép bạn sử dụng các thuộc tính và sự kiện HTML trong mã JSX, giúp tương tác với các phần tử giao diện và xử lý sự kiện.
- Hỗ trợ Fragment: JSX cung cấp Fragment, một cú pháp cho phép bạn nhóm các phần tử giao diện mà không cần thêm một phần tử container bên ngoài.
- Tích hợp với công cụ phân tích cú pháp: JSX được hỗ trợ bởi các công cụ phân tích cú pháp (linters) như ESLint, giúp bạn phát hiện và sửa các lỗi cú pháp trong mã JSX.

## 3.Cú pháp của JSX:
JSX sử dụng cú pháp giống HTML, điều này giúp các nhà phát triển web quen thuộc với việc viết mã HTML có thể dễ dàng chuyển sang viết mã JSX. Dưới đây là một số cú pháp chính của JSX:
- Sử dụng cặp dấu ngoặc nhọn {} để đánh dấu mã JavaScript bên trong mã JSX.
- Sử dụng cặp dấu ngoặc nhọn {} để đánh dấu các thuộc tính và nội dung bên trong các phần tử giao diện.
- JSX phải được bao bọc bên trong một cặp dấu ngoặc nhọn ({}) để đánh dấu đây là một biểu thức JavaScript.
- JSX có thể chứa các phần tử HTML, các thành phần React, và biểu thức JavaScript.
- JSX có thể chứa các thuộc tính HTML như class (được viết là className trong JSX) và style.
- JSX không thể được truyền trực tiếp vào câu lệnh `if, for,` hoặc các cấu trúc điều kiện khác. Thay vào đó, bạn có thể sử dụng các biểu thức điều kiện hoặc vòng lặp trong JSX để điều khiển hiển thị của các phần tử.
- JSX có thể chứa các sự kiện HTML như onClick, onChange, onKeyPress,...
- JSX có thể chứa các biểu thức JavaScript như các biểu thức toán học, các biểu thức logic, các biểu thức hàm, các biểu thức điều kiện, các biểu thức lặp,...

Ví dụ:
```
const name = 'John Doe';
const element = <h1>Hello, {name}!</h1>;
```