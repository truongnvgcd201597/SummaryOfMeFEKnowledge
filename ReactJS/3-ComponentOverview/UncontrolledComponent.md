# Uncontrolled Component

## 1. Uncontrolled Component là gì?

> Một uncontrolled component (thành phần không được điều khiển) là một thành phần mà giá trị của nó được quản lý bởi DOM thay vì được ReactJS quản lý thông qua state. Trong các thành phần không được điều khiển, giá trị của thành phần được lấy trực tiếp từ DOM và không được theo dõi bởi ReactJS.

Hầu hết, chúng ta khuyên dùng `controlled components` để implement form. Trong `controlled components`, `form data` được xử lý bởi React component. Còn với `uncontrolled components`, `form data` được xử lý bởi DOM.

Để sử dụng `uncontrolled components`, thay vì sử dụng `event handlers` để lấy giá trị từ mỗi thành phần, bạn có thể sử dụng `ref` để lấy giá trị từ DOM.

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Trong đó, `this.input` là một `ref` được tạo bởi `React.createRef()`. Chúng ta có thể truy cập vào giá trị của `input` bằng cách sử dụng `this.input.current.value`. Vì vậy, khi form được submit, `this.input.current.value` sẽ trả về giá trị của `input`.
