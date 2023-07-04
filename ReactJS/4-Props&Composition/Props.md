# Props trong ReactJS:

## 1. Định nghĩa:

> Props là một thuộc tính của component trong ReactJS. Nó được sử dụng để truyền dữ liệu giữa các component. Props là viết tắt của từ properties, có nghĩa là các thuộc tính của component.

Trong ReactJS, một component có thể nhận dữ liệu từ component cha thông qua props. Các props được truyền vào component giống như các thuộc tính của một đối tượng. Mỗi props có một tên và một giá trị tương ứng. Giá trị của props có thể là một giá trị đơn như một chuỗi, một số, một boolean, hoặc một giá trị đối tượng như một mảng, một đối tượng, một function, ...

Ví dụ, bạn có thể truyền một giá trị đơn như một chuỗi vào một component thông qua props như sau:

```
function ParentComponent() {
  return <ChildComponent name="John" age={25} />;
}
```

Ở đây, ta đã truyền hai props cho component con `ChildComponent`. Prop đầu tiên là name có giá trị là `"John"`, và prop thứ hai là age có giá trị là `25`.

Trong component con ChildComponent, ta có thể sử dụng props bằng cách nhận chúng như là một tham số của component:

```
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

Ở đây, ta sử dụng `props.name` để truy cập giá trị của `prop name` và `props.age` để truy cập giá trị của prop age.

Props là một cách mạnh mẽ để truyền dữ liệu giữa các component trong ReactJS và giúp tạo ra sự tương tác và tái sử dụng linh hoạt trong ứng dụng ReactJS.

## 2. Sử dụng props trong ReactJS:

### 2.1. Truyền rest props vào component:

Trong ReactJS, bạn có thể sử dụng `{...this.props}` để truyền hết tất cả các prop vào một component con. Khi bạn sử dụng `...this.props`, tất cả các prop được truyền vào component hiện tại sẽ được chuyển tiếp đến component con mà bạn đang render.

```js
class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent {...this.props} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Prop1: {this.props.prop1}</p>
        <p>Prop2: {this.props.prop2}</p>
        <p>Prop3: {this.props.prop3}</p>
      </div>
    );
  }
}
```

Trong ví dụ trên, <ParentComponent> có các prop là prop1, prop2, và prop3. Bằng cách sử dụng {...this.props}, tất cả các prop này sẽ được truyền vào <ChildComponent>.

Khi bạn sử dụng {...this.props} trong component cha và truyền các prop vào component con, component con có thể nhận các prop trực tiếp từ component cha và sử dụng chúng trong render của nó. Điều này giúp tái sử dụng và giảm sự lặp lại của việc truyền prop một cách rõ ràng từ component cha đến component con.

### 2.2. Đổi tên props trong rest props:

Sử dụng cú pháp {a, b, ...rest} để áp dụng phần `rest` của một đối tượng prop vào một component hoặc một biến. Nếu bạn chỉ muốn sử dụng phần `rest` và không quan tâm đến các prop cụ thể như a và b, bạn có thể bỏ qua chúng và chỉ sử dụng rest.

Dưới đây là một ví dụ minh họa về cách sử dụng {a, b, ...rest} khi chỉ muốn sử dụng phần `rest` trong một component:

```
function MyComponent({ a, b, ...rest }) {
  // Sử dụng rest prop
  // ...
  return <div>My Component</div>;
}
```

Ví dụ về cách sử dụng {a, b, ...rest} khi chỉ muốn sử dụng phần "rest" trong một biến:

```
const { a, b, ...rest } = props;
```

Trong ví dụ này, {a, b, ...rest} được sử dụng để trích xuất các prop a và b từ đối tượng props, trong khi phần "rest" (rest) sẽ chứa các prop còn lại và có thể được sử dụng một cách linh hoạt trong phạm vi biến.

### 2.3 Đổi tên props trong component:

Trong ReactJS, để đổi tên của một prop, bạn có thể sử dụng cú pháp destructuring assignment và tạo một biến mới với tên mong muốn. Dưới đây là một ví dụ minh họa:

```js
function MyComponent(props) {
  // Đổi tên prop
  const { oldPropName: newPropName } = props;

  // Sử dụng newPropName
  // ...

  return <div>My Component</div>;
}
```

### 2.4. Sử dụng children props:

prop `children` là một prop đặc biệt cho phép bạn truyền nội dung con (child content) vào component. Nó cho phép bạn chèn và truyền các phần tử con, component con hoặc đoạn văn bản trực tiếp vào trong component mẹ (parent component).

Để sử dụng `children`, bạn chỉ cần truyền nội dung con vào component bằng cách đặt nội dung đó giữa thẻ mở và thẻ đóng của component.

Dưới đây là một ví dụ minh họa về cách sử dụng children:

```js
function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent>
        <p>This is the child content.</p>
        <button>Click Me</button>
      </ChildComponent>
    </div>
  );
}

function ChildComponent({ children }) {
  return (
    <div>
      <h2>Child Component</h2>
      <div>{children}</div>
    </div>
  );
}
```

Trong ví dụ trên, <ParentComponent> chứa một <ChildComponent>. Nội dung con được truyền vào <ChildComponent> bằng cách đặt nó giữa thẻ mở và thẻ đóng của <ChildComponent>. Trong <ChildComponent>, prop children sẽ chứa nội dung con và bạn có thể sử dụng nó trong phạm vi của component.

### 2.5. Sử dụng defaultProps:

defaultProps là một thuộc tính đặc biệt cho phép bạn định nghĩa giá trị mặc định cho các props của một component. Khi một prop không được truyền vào component hoặc có giá trị undefined, giá trị mặc định từ defaultProps sẽ được sử dụng thay thế.

Để sử dụng defaultProps, bạn có thể định nghĩa nó trong component bằng cách gán một object chứa các giá trị mặc định cho thuộc tính defaultProps của component.

Dưới đây là một ví dụ minh họa về cách sử dụng defaultProps:

```
function MyComponent(props) {
  return <div>{props.text}</div>;
}

MyComponent.defaultProps = {
  text: "Default Text",
};
```
