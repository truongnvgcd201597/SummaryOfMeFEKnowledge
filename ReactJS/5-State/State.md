# State

## 1. Định nghĩa:

> Trong ReactJS, "state" (trạng thái) là một khái niệm quan trọng để quản lý và theo dõi các dữ liệu có thể thay đổi trong một component. Nó được tạo ra và quản lý bởi component hiện tại, đại diện cho trạng thái hiện tại của component đó và ảnh hưởng đến cách component hiển thị và hoạt động.

State trong React có các đặc điểm sau:

- Trạng thái của component: State đại diện cho trạng thái của một component tại một thời điểm cụ thể. Nó chứa các dữ liệu mà component cần để hiển thị và hoạt động.
- Có thể thay đổi: State có thể thay đổi trong quá trình thực thi ứng dụng. Khi state thay đổi, React sẽ tự động cập nhật lại giao diện và render lại component để phản ánh trạng thái mới.
- Quản lý bởi component: Mỗi component có thể có riêng một state của nó. State là một thuộc tính của component và được quản lý bởi React. Component có thể tự cập nhật và thay đổi trạng thái của nó bằng cách gọi phương thức setState().
- Immutable (Bất biến): Trạng thái trong React được coi là bất biến (immutable), điều đó có nghĩa là không thể thay đổi trực tiếp giá trị của state. Thay vào đó, bạn cần tạo ra một bản sao của state, thay đổi bản sao đó và sử dụng phương thức setState() để cập nhật trạng thái mới.
- Làm cơ sở cho UI và logic: State thường được sử dụng để điều khiển việc hiển thị và hoạt động của giao diện người dùng. Khi state thay đổi, React sẽ tự động cập nhật giao diện để phản ánh trạng thái mới.

Ví dụ về việc sử dụng state trong React:

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Trong ví dụ trên, chúng ta sử dụng useState() hook để tạo một state có tên là "count" và một hàm "setCount" để cập nhật state. Khi người dùng nhấn vào nút "Increment", state "count" được tăng lên 1 và giao diện được cập nhật để hiển thị giá trị mới của state.

```js
class Counter extends PureComponent {
  constructor(props) {
    super(props);
    // State declaration
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        {this.state.count}
        {/* use this.setState() function to update state */}
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increase
        </button>
      </div>
    );
  }
}
```

## 2. Sử dụng state đúng cách:

### 2.1. State có thể bất đồng bộ:

Khi bạn gọi phương thức setState(), React sẽ tự động gộp các thay đổi vào trong một batch (nhóm) và cập nhật lại giao diện. Điều này có nghĩa là, dù bạn gọi setState() nhiều lần trong một phương thức, React chỉ thực hiện một lần cập nhật giao diện.

```js
import React, { Component } from "react";

export default class AsyncState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return <div>AsyncState. Count: {this.state.count}</div>;
  }
}
```

Dựa vào cách ReactJS hoạt động, việc gọi setState không đảm bảo rằng this.state.count sẽ được cập nhật ngay lập tức. Thay vào đó, ReactJS sẽ **gom nhóm các lệnh setState lại** và **thực hiện việc cập nhật state một cách tối ưu**.

Trong trường hợp này, các lệnh setState được gọi liên tiếp nhau trong cùng một vòng đời của component, và chỉ sau khi vòng đời này hoàn thành, ReactJS mới áp dụng các thay đổi vào state và render lại component. Do đó, kết quả sẽ là count chỉ tăng lên 1, không phải là 2.

Để đảm bảo tính bất đồng bộ của việc cập nhật state, bạn có thể sử dụng hàm callback của setState, như sau:

```js
// Way 1:
componentDidMount() {
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
}

// Way 2:
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment
  }
})

// Way 3:
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment
  }
})
```

### 2.2. Merge state:

Trong ReactJS, để merge (kết hợp) các giá trị mới vào state hiện tại, bạn có thể sử dụng phương thức setState cùng với spread operator (...) hoặc phương thức Object.assign(). Dưới đây là hai cách để merge state trong ReactJS:

- Sử dụng spread operator (...):

```js
this.setState({
  ...this.state,
  newProperty: newValue,
});
```

Trong ví dụ trên, ...this.state tạo ra một bản sao của state hiện tại và sau đó bạn có thể thêm một thuộc tính mới (newProperty) với giá trị mới (newValue).

- Sử dụng phương thức Object.assign():

```js
this.setState(Object.assign({}, this.state, { newProperty: newValue }));
```

Trong đoạn mã trên, Object.assign() tạo ra một object mới, lấy các thuộc tính từ state hiện tại (this.state) và thêm một thuộc tính mới (newProperty) với giá trị mới (newValue).

Cả hai cách trên đều tạo ra một bản sao của state hiện tại và merge các giá trị mới vào bản sao đó. Sau đó, setState được gọi để cập nhật state bằng bản sao mới đã merge.

Lưu ý rằng, trong ReactJS, việc merge state thường là cách tốt nhất để cập nhật state thay vì thay đổi trực tiếp giá trị của state. Điều này giúp bảo đảm tính bất biến (immutable) của state và đảm bảo rằng ReactJS nhận biết các thay đổi và thực hiện việc render lại các component liên quan một cách chính xác.
