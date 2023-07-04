# ComponentDidMount():

## 1. Định nghĩa:

> componentDidMount là một phương thức lifecycle trong ReactJS, được gọi sau khi component đã được render lần đầu tiên trên giao diện người dùng. Nó là một trong những phương thức lifecycle quan trọng và thường được sử dụng để thực hiện các tác vụ như gọi API, tương tác với DOM, hoặc khởi tạo các subscriptions.

- Truy cập DOM Node, bởi vì nó được gọi sau khi render nên chắc chắn DOM đã được tạo ra.
- Gọi API.
- Set state.

Khi component đã được `mount`, componentDidMount sẽ được gọi một lần duy nhất. Nó đánh dấu thời điểm mà component đã được gắn kết với DOM và sẵn sàng để tương tác với dữ liệu và các thành phần khác trong ứng dụng.

Ví dụ, bạn có thể sử dụng `componentDidMount` để gọi một API và lấy dữ liệu sau khi component đã được hiển thị trên giao diện người dùng. Khi dữ liệu đã được nhận về, bạn có thể cập nhật state của component và gọi `setState` để kích hoạt việc render lại component với dữ liệu mới.

## 2. Cách sử dụng:

Để sử dụng componentDidMount trong một component React, bạn cần định nghĩa phương thức này trong class component. Sau đó, React sẽ tự động gọi phương thức này sau khi component đã được render lần đầu tiên trên giao diện người dùng.

Dưới đây là cách sử dụng `componentDidMount` trong một class component:

```js
import React, { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    // Thực hiện các tác vụ sau khi component đã được mount
    console.log("Component mounted");
    // Gọi API, tương tác với DOM, khởi tạo subscriptions, ...
  }

  render() {
    return <div>{/* Nội dung của component */}</div>;
  }
}
```

Trong ví dụ trên, phương thức componentDidMount được định nghĩa trong class component MyComponent. Khi component này được render lần đầu tiên, React sẽ tự động gọi phương thức componentDidMount, và bạn có thể thực hiện các tác vụ mong muốn bên trong phương thức này.

Lưu ý rằng componentDidMount chỉ được gọi một lần sau khi component đã được render lần đầu tiên. Nếu bạn muốn thực hiện các tác vụ mỗi khi component được render lại, bạn có thể sử dụng các phương thức lifecycle khác như componentDidUpdate.
