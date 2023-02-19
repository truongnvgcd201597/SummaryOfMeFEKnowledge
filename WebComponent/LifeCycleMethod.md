# Life Cycle Method:

Trong Web Component, có hai vòng đời mà một thành phần sẽ trải qua:
- Vòng đời kết nối (lifecycle connected): được kích hoạt khi thành phần được thêm vào DOM.
- Vòng đời ngắt kết nối (lifecycle disconnected): được kích hoạt khi thành phần được xóa khỏi DOM.

Trong mỗi vòng đời này, Web Component cung cấp một số phương thức được gọi tương ứng để thực hiện các hành động cần thiết. Dưới đây là các phương thức của vòng đời kết nối và vòng đời ngắt kết nối:
- connectedCallback(): được gọi khi thành phần được thêm vào DOM. Phương thức này cho phép bạn thực hiện các hành động như khởi tạo các thuộc tính, kết nối các sự kiện hoặc thêm các phần tử vào shadow DOM.
- disconnectedCallback(): được gọi khi thành phần bị xóa khỏi DOM. Phương thức này cho phép bạn dọn dẹp các tài nguyên đã được tạo ra trong vòng đời kết nối.
- adoptedCallback(): được gọi khi thành phần được chuyển sang một tài liệu khác.
- attributeChangedCallback(): được gọi khi một thuộc tính của thành phần thay đổi giá trị.

## 1. connectedCallback():
connectedCallback() là một trong những phương thức lifecycle của một Web Component. Nó được gọi khi một custom element được chèn vào DOM. Phương thức này cho phép bạn thực hiện các hoạt động sau:
- Thiết lập các thuộc tính, giá trị mặc định hoặc các thuộc tính khác của thành phần.
- Gắn bất kỳ sự kiện hoặc lắng nghe sự kiện nào mà bạn muốn bắt đầu bằng cách gọi addEventListener(). Bạn có thể xóa sự kiện bằng cách gọi removeEventListener() trong phương thức disconnectedCallback().
- Tạo và gắn các phần tử Shadow DOM nếu cần thiết.
- Điều chỉnh hoặc tạo lại các thành phần con, chẳng hạn như xử lý sự kiện, tạo thành phần con bằng cách sử dụng DOM hoặc truy cập các thành phần con đã có trong shadow DOM.

Các hoạt động thực hiện trong phương thức connectedCallback() sẽ thực hiện mỗi khi một custom element được chèn vào DOM.

Ví dụ:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Custom Element with connectedCallback</title>
  </head>
  <body>
    <my-element></my-element>
    <script>
      class MyElement extends HTMLElement {
        constructor() {
          super();
          this.textContent = 'Hello World';
        }

        connectedCallback() {
          console.log('The element was added to the DOM');
        }
      }

      customElements.define('my-element', MyElement);
    </script>
  </body>
</html>
```

## 2. disconnectedCallback():
disconnectedCallback() là một phương thức trong chu kỳ sống của một custom element trong web component, nó được gọi khi custom element bị loại bỏ khỏi DOM (document object model).

Cụ thể, khi một custom element bị loại bỏ khỏi DOM bằng cách gọi phương thức removeChild() trên phần tử cha của nó hoặc bằng cách sử dụng phương thức remove() trên chính phần tử đó, thì phương thức disconnectedCallback() sẽ được gọi.

Trong phương thức disconnectedCallback(), các tài nguyên có thể được giải phóng, các kết nối với các sự kiện hoặc phương thức của các phần tử khác có thể được ngắt kết nối để tránh lãng phí bộ nhớ và giảm độ trễ trong ứng dụng.

Đây là một ví dụ về sử dụng disconnectedCallback() để loại bỏ các sự kiện đã được đăng ký trong phương thức connectedCallback() khi phần tử bị xóa khỏi DOM:

```
class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.intervalId = null;
  }

  connectedCallback() {
    console.log('Connected to the DOM');
    this.intervalId = setInterval(() => {
      console.log('Interval');
    }, 1000);
  }

  disconnectedCallback() {
    console.log('Disconnected from the DOM');
    clearInterval(this.intervalId);
  }
}

customElements.define('custom-element', CustomElement);
```

Trong ví dụ này, khi phần tử tùy chỉnh được thêm vào DOM, connectedCallback() được gọi, thiết lập một setInterval() để in ra Interval sau mỗi giây và lưu ID của nó trong biến intervalId. Khi phần tử bị xóa khỏi DOM, disconnectedCallback() được gọi, dừng định kỳ bằng cách gọi clearInterval() với intervalId.

Điều này đảm bảo rằng các sự kiện được đăng ký không vẫn chạy sau khi phần tử bị xóa khỏi DOM, tránh lãng phí tài nguyên.

## 3. adoptedCallback():
adoptedCallback() là một phương thức lifecycle của một custom element trong web component, nó được gọi khi một custom element được chuyển từ một tài liệu DOM sang một tài liệu DOM khác.

Phương thức này cũng giống như connectedCallback(), chỉ khác là nó được gọi khi một custom element được di chuyển sang một document khác (được adopt bởi một document khác).

Các trường hợp khi adoptedCallback() được gọi bao gồm:

- Khi một custom element được di chuyển (move) từ một vị trí trong DOM tree sang một vị trí khác trong cùng một document.
- Khi một custom element được di chuyển từ một document khác sang document hiện tại (được adopt bởi document hiện tại).

Giống như connectedCallback() và disconnectedCallback(), adoptedCallback() cũng có thể được sử dụng để thực hiện các tác vụ nhất định khi một custom element được di chuyển.

Dưới đây là ví dụ về cách sử dụng adoptedCallback():
```
class CustomElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `<h1>Hello World</h1>`;
  }
  adoptedCallback() {
    console.log('The custom element has been adopted to a new document!');
  }
}
customElements.define('custom-element', CustomElement);

// Create a new document object
const newDoc = document.implementation.createHTMLDocument();

// Create a new custom element and add it to the new document
const newElement = new newDoc.defaultView.CustomElement();
newDoc.body.appendChild(newElement);

// Adopt the custom element to the current document
document.adoptNode(newElement);

// The adoptedCallback will be called
```

Trong ví dụ này, chúng ta định nghĩa một Custom Element với connectedCallback và adoptedCallback. Sau đó, chúng ta tạo một đối tượng newDoc là một đối tượng tài liệu HTML mới, tạo một đối tượng Custom Element mới và thêm nó vào newDoc. Sau đó, chúng ta sử dụng adoptNode để chuyển đối tượng Custom Element sang tài liệu hiện tại. Khi chúng ta gọi adoptNode, phương thức adoptedCallback sẽ được gọi.

## 4. attributeChangedCallback():
Phương thức attributeChangedCallback() được gọi khi giá trị của thuộc tính của một custom element được thay đổi. 
Phương thức này có các tham số truyền vào bao gồm:
- name: tên của thuộc tính bị thay đổi.
- oldValue: giá trị cũ của thuộc tính.
- newValue: giá trị mới của thuộc tính.
- namespace: không được sử dụng.

Phương thức này cho phép bạn phản ứng với các thay đổi của thuộc tính của một custom element và có thể cập nhật giao diện người dùng theo cách tương ứng.

Ví dụ, ta có thể định nghĩa một custom element my-element và theo dõi sự thay đổi giá trị của thuộc tính text:
```
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'text') {
      this.textContent = newValue;
    }
  }
}
```

Trong ví dụ này, chúng ta xác định thuộc tính observedAttributes trả về một mảng các tên thuộc tính để quan sát thay đổi. Khi giá trị của thuộc tính text bị thay đổi, phương thức attributeChangedCallback() được gọi và chúng ta cập nhật nội dung của phần tử theo giá trị mới của thuộc tính.

Lưu ý rằng các thuộc tính được định nghĩa trong phương thức observedAttributes phải được đặt trong các dấu nháy đơn hoặc kép để giá trị của nó có thể được đọc bởi trình duyệt.

## 5. static get observedAttributes():
Phương thức static get observedAttributes() được sử dụng để xác định thuộc tính nào của một custom element sẽ được theo dõi khi thay đổi giá trị. Phương thức này trả về một mảng các tên thuộc tính. Khi các thuộc tính này thay đổi, phương thức attributeChangedCallback() sẽ được gọi để xử lý các thay đổi đó.

Phương thức observedAttributes trả về một mảng các tên thuộc tính mà custom element muốn theo dõi. Ví dụ, trong đoạn mã sau:
```
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['my-attribute'];
  }
  
  // ...
}
```
Custom element MyElement đã khai báo rằng nó muốn lắng nghe sự thay đổi của thuộc tính my-attribute. Khi giá trị của thuộc tính này thay đổi, phương thức attributeChangedCallback() sẽ được gọi để xử lý sự kiện.




