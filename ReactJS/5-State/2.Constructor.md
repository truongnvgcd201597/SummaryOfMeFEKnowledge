# Constructor

## 1. Định nghĩa constructor trong ReactJS:

> Constructor là một phương thức đặc biệt được sử dụng trong class component để khởi tạo một instance của component và thiết lập các giá trị ban đầu, bao gồm cả state và các props.

Phương thức constructor được gọi khi một instance của class component được tạo ra. Trong constructor, bạn có thể khởi tạo state và gán giá trị ban đầu cho các thuộc tính của class.

Nếu chúng ta không khởi tạo `state` hoặc `bind` thì không cần phải cài đặt constructor cho component.

Để có thể sử dụng được `this` trong constructor, chúng ta cần gọi phương thức `super(props)` trước khi sử dụng `this` trong constructor.

Thông thường, constructor có 2 nhiệm vụ chính:

- Khởi tạo **local state** bằng cách gán giá trị cho `this.state`.
- Bind các event handler methods với instance của component.

## 2. Ví dụ về constructor trong ReactJS:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    // Khởi tạo state
    this.state = {
      count: 0,
    };

    // Gán giá trị ban đầu cho thuộc tính của class
    this.myProperty = "Hello, world!";
  }

  render() {
    return (
      <div>
        <p>{this.myProperty}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
```

## 3. Lưu ý khi sử dụng constructor trong ReactJS:

- Gọi super(props) trong constructor: Trong constructor, hãy đảm bảo gọi super(props) để gọi constructor của lớp cha (React.Component). Điều này cần thiết để kế thừa các thuộc tính và phương thức của lớp cha và đảm bảo rằng các props được truyền vào component được xử lý đúng cách.
- Không gọi setState trong constructor: Tránh gọi phương thức setState trong constructor. Việc gọi setState trong constructor có thể gây ra các vấn đề không mong muốn hoặc không cần thiết. Thay vào đó, hãy gán giá trị ban đầu cho state trực tiếp thông qua gán this.state.
- Tránh gán giá trị cho state từ props: Trong constructor, tránh gán giá trị cho state từ props trực tiếp. Lý do là trong quá trình khởi tạo, các props có thể không được truyền vào hoặc có giá trị undefined. Thay vào đó, hãy sử dụng props trực tiếp trong phương thức render hoặc componentDidMount để cập nhật giá trị của state.
- Khởi tạo giá trị ban đầu cho thuộc tính của class: Constructor cũng có thể được sử dụng để khởi tạo các giá trị ban đầu cho các thuộc tính của class. Bạn có thể gán giá trị cho các thuộc tính của class bằng cách sử dụng this.myProperty = 'value'; trong constructor.
- Ràng buộc (bind) các phương thức: Nếu bạn sử dụng các phương thức của class (không phải arrow function) và muốn đảm bảo rằng các phương thức này được ràng buộc với instance của class, bạn có thể thực hiện ràng buộc này trong constructor. Ví dụ: this.handleClick = this.handleClick.bind(this);
- Sử dụng constructor chỉ khi cần thiết: Từ phiên bản React 16.3 trở đi, bạn có thể sử dụng cú pháp arrow function để định nghĩa các phương thức của class và không cần ràng buộc chúng trong constructor. Vì vậy, hãy sử dụng constructor chỉ khi cần thiết, ví dụ như khởi tạo state hoặc thiết lập các giá trị ban đầu cho các thuộc tính của class.
