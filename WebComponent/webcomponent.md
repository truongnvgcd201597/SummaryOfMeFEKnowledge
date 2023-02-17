# Web Component

## 1. Định nghĩa:
> Web Component là một kỹ thuật trong phát triển web, cho phép bạn tạo ra các thành phần web tùy chỉnh để sử dụng trong các ứng dụng web của mình. Điều đó có nghĩa là bạn có thể xây dựng các thành phần web tùy chỉnh và sử dụng chúng trong các trang web của mình một cách dễ dàng, đồng thời tận dụng lại các thành phần này trong các dự án khác.

Web Component giúp giảm độ phức tạp của việc phát triển web, cho phép các nhà phát triển xây dựng các thành phần web tùy chỉnh dễ dàng hơn và đảm bảo tính tái sử dụng của mã nguồn.

## 2. Các kỹ thuật của Web Component::
Web Component cung cấp ba kỹ thuật cơ bản cho việc tạo các thành phần web tùy chỉnh:
- Custom Elements: Cho phép bạn định nghĩa các phần tử HTML tùy chỉnh của riêng mình. Ví dụ, bạn có thể tạo một phần tử HTML <my-component> tùy chỉnh, cung cấp các tính năng và giao diện người dùng mà bạn muốn.
- Shadow DOM: Cho phép bạn tạo ra một phạm vi phạm vi giữa các phần tử của phần tử HTML và các phần tử bên trong của phần tử đó. Điều này giúp tránh xung đột với CSS hoặc JavaScript từ các phần tử khác trong trang web.
- HTML Templates: Cho phép bạn định nghĩa các khuôn mẫu HTML để sử dụng cho các phần tử tùy chỉnh của bạn. Khuôn mẫu HTML này không hiển thị trên trang web của bạn nhưng chứa các đoạn mã HTML và CSS bạn muốn sử dụng trong các phần tử tùy chỉnh của mình.

## 3. Cú pháp thực thi:
Mỗi kỹ thuật của Web Component có cú pháp và API riêng. Dưới đây là cú pháp cơ bản cho mỗi kỹ thuật:
### 3.1. Custom Elements:
Để tạo một phần tử HTML tùy chỉnh, sử dụng phương thức customElements.define() với cú pháp như sau:
```
customElements.define('my-element', MyElement);
```
Trong đó, 'my-element' là tên của phần tử tùy chỉnh và MyElement là lớp JavaScript đại diện cho phần tử đó.
### 3.2. Shadow DOM:
Để tạo Shadow DOM cho một phần tử, sử dụng phương thức attachShadow() với cú pháp như sau:
```
let shadowRoot = element.attachShadow({mode: 'open'});
```
Trong đó, element là phần tử HTML muốn tạo Shadow DOM, và mode có thể là 'open' hoặc 'closed', tùy thuộc vào việc bạn muốn cho phép hay cấm truy cập từ bên ngoài.

### 3.3. HTML Templates:
Để tạo một mẫu HTML, sử dụng thẻ <template> với cú pháp như sau:
```
<template id="my-template">
  <p>Hello, world!</p>
</template>
```
Sau đó, để sử dụng mẫu này, sử dụng phương thức content.cloneNode(true) để tạo ra một bản sao của mẫu và chèn nó vào trong Shadow DOM:
```
let template = document.querySelector('#my-template');
let clone = template.content.cloneNode(true);
shadowRoot.appendChild(clone);
```
Trong đó, template là phần tử <template> và shadowRoot là Shadow DOM của phần tử tùy chỉnh.




