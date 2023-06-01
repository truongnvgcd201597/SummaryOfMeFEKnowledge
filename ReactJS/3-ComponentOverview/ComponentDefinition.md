# Component Overview
## 1. Component là gì?
> Trong ngữ cảnh của ReactJS, một "component" là một đơn vị xây dựng độc lập của giao diện người dùng. Component là một cách để tách biệt logic và giao diện thành các phần nhỏ hơn, dễ quản lý và tái sử dụng.

Trong React, mọi thành phần được coi là một component, bao gồm cả các thành phần nhỏ như text, hình ảnh, và các thành phần lớn hơn như các phần tử UI phức tạp hoặc thậm chí cả trang web hoàn chỉnh.

Các component trong React được xây dựng bằng cách sử dụng JavaScript hoặc TypeScript. Có hai loại component chính:

- Function Component: Đây là cách đơn giản nhất để tạo một component trong React. Nó được viết dưới dạng một hàm JavaScript hoặc một arrow function. Function component nhận vào các thuộc tính (props) và trả về một phần tử React để hiển thị giao diện.
Ví dụ về một function component đơn giản:
```
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
- Class Component: Đây là một cách truyền thống để tạo component trong React, dựa trên class JavaScript. Một class component là một class JavaScript kế thừa từ React.Component. Nó phải triển khai phương thức render() để trả về phần tử React để hiển thị giao diện.
Ví dụ về một class component đơn giản:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
Cả hai loại component đều có thể nhận các thuộc tính (props) và có thể duy trì trạng thái (state) của nó để quản lý dữ liệu và tương tác với người dùng.

Các component trong React được sử dụng để xây dựng cấu trúc giao diện người dùng, phân chia logic và tái sử dụng code. Các component có thể được sử dụng để xây dựng các ứng dụng web động, tương tác và dễ bảo trì.