# Composition và Inheritance

## 1. Composition (Sự hợp thành):

> Composition là một nguyên tắc quan trọng để xây dựng các thành phần phức tạp bằng cách kết hợp các thành phần đơn giản hơn. Bằng cách sắp xếp các thành phần theo cấu trúc cây, ta có thể xây dựng giao diện phong phú và tái sử dụng.

Thông thường để thực hiện Composition trong ReactJS là thông qua việc nhúng các thành phần vào bên trong nhau bằng cách sử dụng cú pháp JSX. Ví dụ, ta có thể tạo một thành phần cha (parent component) và nhúng một hoặc nhiều thành phần con (child component) bên trong nó:

```js
import React, { Component } from "react";

class Button extends Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.handleClick}
      >
        {this.props.name} Button
      </button>
    );
  }
}

class Layout extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="layout">
        <div className="layout-left">{left}</div>
        <div className="layout-right">{right}</div>
      </div>
    );
  }
}

export class Composition extends Component {
  render() {
    return (
      <div>
        Composition
        <Button name="Yellow" className="btn-yellow" />
        <Layout
          left={<Button name="Green" className="btn-green" />}
          right={<Button name="Red" className="btn-red" />}
        />
      </div>
    );
  }
}

export default Composition;
```

## 2. Inheritance (Sự kế thừa):

> Kế thừa (inheritance) không được khuyến khích sử dụng như là một cách để xây dựng các thành phần. Thay vào đó, ReactJS khuyến khích sử dụng Composition để tái sử dụng code và chia nhỏ giao diện thành các thành phần độc lập. Lý do chính là ReactJS đã cung cấp một cách khác để chia sẻ logic và trạng thái giữa các thành phần thông qua các khái niệm như Render Props, Higher-Order Components (HOCs), và React Hooks.

```js
import React, { Component } from "react";

class Button extends Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Button
      </button>
    );
  }
}

class YellowButton extends Button {
  render() {
    return (
      <button className="btn btn-yellow" onClick={this.handleClick}>
        Yellow Button
      </button>
    );
  }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <YellowButton />
      </div>
    );
  }
}

export default Inheritance;
```
