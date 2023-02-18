# Custom Element

## 1. Định nghĩa:
> Custom element là một tính năng trong Web Component, cho phép tạo ra các phần tử HTML mới và định nghĩa các thuộc tính, phương thức và sự kiện của chúng. Bằng cách sử dụng custom element, bạn có thể tạo ra các phần tử HTML tùy chỉnh mà không cần phải sử dụng các phần tử có sẵn của HTML.

## 2. Thành phần:
Một custom element bao gồm hai phần chính:
- Phần khai báo: Bao gồm tên của custom element, các thuộc tính và phương thức của phần tử, và các phần tử bên trong phần tử.
- Phần xử lý: Bao gồm các định nghĩa cho các phương thức, thuộc tính và sự kiện của phần tử.

Khi một custom element được tạo ra, bạn có thể sử dụng nó trong các trang HTML giống như bất kỳ phần tử HTML nào khác. Custom element cũng có thể được kế thừa và mở rộng bằng cách sử dụng lớp đối tượng, tương tự như các lớp đối tượng khác trong JavaScript.

Custom element là một tính năng rất mạnh mẽ của Web Component, cho phép bạn tạo ra các phần tử HTML tùy chỉnh, có khả năng tái sử dụng và dễ dàng bảo trì.

## 3. Cú pháp:
Cú pháp của custom element bao gồm hai phần chính:
### 1. Khai báo phần tử
Để khai báo một custom element, ta sử dụng phương thức customElements.define() với các tham số sau:
- Tên của phần tử: là một chuỗi đại diện cho tên của phần tử, phải chứa ít nhất một dấu gạch ngang (-).
- Lớp đối tượng: là lớp đối tượng đại diện cho phần tử, thường là một lớp đối tượng được kế thừa từ lớp HTMLElement.
Ví dụ:
```
class MyElement extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('my-element', MyElement);
```

### 2. Xử lý phần tử:
Sau khi khai báo phần tử, ta có thể sử dụng nó trong các trang HTML bằng cách sử dụng thẻ mở và đóng của phần tử. Ví dụ:
```
<my-element></my-element>
```
Khi trình duyệt tải trang HTML, nó sẽ tạo ra một thể hiện của lớp đối tượng MyElement và thêm nó vào DOM, với tên phần tử là my-element. Ta có thể sử dụng các phương thức và thuộc tính của phần tử bằng cách tham chiếu đến nó trong JavaScript hoặc CSS.