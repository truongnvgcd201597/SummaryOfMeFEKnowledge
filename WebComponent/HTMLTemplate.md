# HTML Template

## 1. Định nghĩa:
> HTML Template là một phần tử HTML được sử dụng để tạo ra các phần tử HTML khác. Nó được sử dụng để định nghĩa các phần tử HTML mà không cần hiển thị trên trang web. HTML Template được sử dụng để tạo ra các phần tử HTML khác bằng cách sử dụng JavaScript. 

Một template được định nghĩa trong HTML bằng cách sử dụng thẻ <template> và bao gồm một khối mã HTML bên trong. Các thẻ HTML trong template có thể được cung cấp với các thuộc tính và nội dung theo như các thẻ HTML khác.

Một số ứng dụng của HTML Template là giúp cho việc tạo các phần tử DOM trong JavaScript dễ dàng hơn, giảm thiểu sự trùng lặp mã HTML, cải thiện hiệu suất tải trang và bảo mật bằng cách ngăn chặn mã JavaScript không an toàn được thực thi.

## 2. Phương thức và thuộc tính của HTML Template:
Các thuộc tính và phương thức của HTML Template như sau:
### 1. Thuộc tính:
- content: Trả về một DocumentFragment chứa toàn bộ nội dung bên trong của template.
- innerHTML: Thiết lập hoặc trả về nội dung bên trong của template dưới dạng chuỗi HTML.
- outerHTML: Thiết lập hoặc trả về nội dung của toàn bộ template dưới dạng chuỗi HTML.
### 2. Phương thức:
- content.cloneNode(deep): Tạo một bản sao của nội dung template. Tham số deep xác định liệu các nút con của template có được sao chép theo đệ quy hay không.
- content.querySelector(selectors): Trả về phần tử đầu tiên trong nội dung template phù hợp với các selectors được chỉ định.
- content.querySelectorAll(selectors): Trả về tất cả các phần tử trong nội dung template phù hợp với các selectors được chỉ định.
- content.appendChild(node): Thêm một phần tử hoặc nút khác vào cuối nội dung của template.
Với những thuộc tính và phương thức này, HTML Template cho phép chúng ta tạo ra các mẫu HTML động và có thể được sử dụng trong các ứng dụng JavaScript một cách dễ dàng.

## 3. Cách sử dụng HTML Template:
Để sử dụng HTML Template, ta cần làm như sau:
Tạo một đoạn mã HTML và bọc nó trong thẻ <template>. 
```
<template id="my-template">
  <h1>Hello, world!</h1>
</template>
```
Sử dụng JavaScript để truy cập đến template và lấy nội dung bên trong.
```
const template = document.querySelector('#my-template');
const templateContent = template.content;
```
Lưu ý rằng phải sử dụng thuộc tính content để lấy nội dung của template.

Sử dụng phương thức cloneNode() để tạo một bản sao của nội dung template và thêm vào DOM.
```
const clonedNode = templateContent.cloneNode(true);
document.body.appendChild(clonedNode);
```
Lưu ý rằng phải truyền đối số true vào cloneNode() để sao chép tất cả các phần tử con của template. Nếu không truyền đối số này, chỉ template chính sẽ được sao chép và không có phần tử con nào được sao chép.
Với cách sử dụng này, ta có thể tạo một mẫu HTML dùng chung cho nhiều vị trí trên trang web một cách dễ dàng và tiết kiệm thời gian.

