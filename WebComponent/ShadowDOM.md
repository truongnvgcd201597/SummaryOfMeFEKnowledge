# Shadow DOM

## 1. Định nghĩa:
> Shadow DOM là một phần của Web Components và cung cấp một cơ chế để tạo ra một cây DOM riêng biệt và được bảo vệ (encapsulated) cho một phần tử. Shadow DOM cho phép một phần tử có thể đóng gói các phần tử con của nó vào một cây DOM riêng biệt, cô lập chúng với phần tử cha và các phần tử khác trong trang web.

Shadow DOM được tạo ra bằng cách sử dụng phương thức `attachShadow()` của một phần tử. Phương thức này tạo ra một **shadow root** cho phần tử, trong đó các phần tử con của nó sẽ được gắn vào.

Sử dụng Shadow DOM, ta có thể định nghĩa các kiểu (styles) và các phần tử con (elements) cho phần tử một cách độc lập, mà không lo lắng về việc chúng sẽ tác động đến các phần tử khác trên trang web. Điều này giúp giảm thiểu xung đột kiểu (style conflicts) và cải thiện tính tái sử dụng của các phần tử.

Ngoài ra, Shadow DOM cũng cung cấp một số tính năng khác như slot để định nghĩa các điểm chèn nội dung (content insertion points) trong một phần tử và pseudo-elements để tạo ra các phần tử ảo và áp dụng kiểu cho chúng.

Shadow DOM là một công nghệ mạnh mẽ và cần thiết trong việc tạo ra các phần tử web tái sử dụng và bảo vệ được sự độc lập của chúng trong một trang web.

## 2. Các khái niệm cơ bản:
- Shadow root: Là một cấu trúc cây DOM được tạo bởi phương thức attachShadow() để bảo vệ các phần tử con của một phần tử. Shadow root chứa các phần tử con mà được định nghĩa trong phần Shadow DOM của phần tử cha.
- Shadow host: Là phần tử cha mà có chứa Shadow root. Shadow host cung cấp một giao diện cho các phần tử con bên trong Shadow root để có thể tương tác với phần tử cha.
- Shadow boundary: Là ranh giới giữa Shadow root và phần tử cha. Điều này giúp bảo vệ các phần tử con của Shadow root khỏi sự can thiệp của các phần tử khác trong trang web.
- Encapsulation: Là khả năng bảo vệ phần tử con của một phần tử bằng cách đóng gói chúng vào một Shadow root riêng. Encapsulation giúp tránh xung đột kiểu và tác động của các phần tử khác trong trang web.
- Slots: Là các điểm chèn nội dung (content insertion points) được định nghĩa trong phần Shadow DOM của một phần tử. Slots cho phép các phần tử con của Shadow root được chèn vào vị trí cụ thể trong cây DOM của phần tử cha.
- Pseudo-elements: Là các phần tử ảo được tạo ra bởi Shadow DOM và có thể được áp dụng kiểu như các phần tử thực sự. Pseudo-elements được định nghĩa trong phần Shadow DOM của phần tử và không xuất hiện trong cây DOM của trang web.

## 3. Các phương thức:
### 1. Phương thức:
- shadowRoot: Là thuộc tính chỉ đọc để truy cập đối tượng ShadowRoot của một phần tử.
- attachShadow(): Là phương thức để tạo một ShadowRoot cho phần tử, trả về một tham chiếu đến đối tượng ShadowRoot.
- mode: Là thuộc tính của đối tượng ShadowRoot, chỉ định chế độ hiển thị của Shadow DOM. Có hai giá trị là 'open' và 'closed'.
- host: Là thuộc tính chỉ đọc của đối tượng ShadowRoot, trả về phần tử chủ sở hữu của ShadowRoot.
- :host: Là một CSS pseudo-class, cho phép bạn áp dụng các quy tắc CSS vào phần tử chủ sở hữu của ShadowRoot.
- ::shadow: Là một CSS pseudo-element, cho phép bạn áp dụng các quy tắc CSS vào ShadowRoot.
- ::content: Là một CSS pseudo-element, cho phép bạn áp dụng các quy tắc CSS vào phần nội dung được chèn vào phần tử sử dụng thẻ.
- attachShadow(options): tạo một ShadowRoot mới và gắn nó vào phần tử hiện tại.
- open(): mở chế độ Shadow DOM của phần tử, cho phép truy cập và sửa đổi nội dung bên trong ShadowRoot.
- close(): đóng chế độ Shadow DOM của phần tử, không cho phép truy cập và sửa đổi nội dung bên trong ShadowRoot.
- querySelector(): trả về phần tử đầu tiên bên trong ShadowRoot mà khớp với một bộ chọn được cung cấp.
- querySelectorAll(): trả về một danh sách các phần tử bên trong ShadowRoot mà khớp với một bộ chọn được cung cấp.
### 2. Thuộc tính:
Thuộc tính:
- shadowRoot: trả về một tham chiếu tới đối tượng ShadowRoot được liên kết với phần tử hiện tại.
- mode: đặt hoặc trả về chế độ Shadow DOM hiện tại của phần tử.
<content>.
## 3. Ví dụ:
Đây là một ví dụ đơn giản về Shadow DOM. Trong ví dụ này, chúng ta sử dụng phương thức `attachShadow()` để tạo một Shadow DOM cho một phần tử `<my-element>` và thêm một số nội dung vào đó.
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Shadow DOM Example</title>
  </head>
  <body>
    <my-element></my-element>

    <script>
      class MyElement extends HTMLElement {
        constructor() {
          super();

          // Tạo một Shadow DOM cho phần tử
          const shadow = this.attachShadow({ mode: 'open' });

          // Tạo một phần tử bên trong Shadow DOM
          const div = document.createElement('div');
          div.textContent = 'Đây là một phần tử bên trong Shadow DOM.';

          // Thêm phần tử vào Shadow DOM
          shadow.appendChild(div);
        }
      }

      customElements.define('my-element', MyElement);
    </script>
  </body>
</html>
```

Trong ví dụ này, chúng ta định nghĩa một lớp MyElement, mở rộng từ HTMLElement. Trong phương thức constructor(), chúng ta sử dụng phương thức attachShadow() để tạo một Shadow DOM cho phần tử, với chế độ hiển thị là 'open'.

Sau đó, chúng ta tạo một phần tử <div> bên trong Shadow DOM, đặt nội dung là 'Đây là một phần tử bên trong Shadow DOM.', và thêm phần tử này vào Shadow DOM bằng cách sử dụng phương thức appendChild().

Khi chúng ta tạo một phần tử <my-element> và thêm nó vào trang, phần tử này sẽ hiển thị nội dung bên trong Shadow DOM của nó. Và vì Shadow DOM được cô lập khỏi phần tử bên ngoài, các quy tắc CSS áp dụng cho phần tử bên ngoài không ảnh hưởng đến phần tử bên trong Shadow DOM.
