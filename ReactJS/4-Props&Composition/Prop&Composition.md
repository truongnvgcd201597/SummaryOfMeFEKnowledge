Trong ReactJS, "props" (viết tắt của "properties") và "composition" là hai khái niệm quan trọng liên quan đến cách truyền dữ liệu và xây dựng các thành phần trong ứng dụng.

# 1. Props (Thuộc tính):
- Props là một cách để truyền dữ liệu từ một component cha xuống các component con.
- Props được truyền vào thành phần bằng cách sử dụng các thuộc tính (attributes) khi sử dụng component đó trong JSX.
- Props có thể là bất kỳ kiểu dữ liệu nào (chẳng hạn như chuỗi, số, mảng, đối tượng) và có thể được truyền từ component cha xuống component con qua nhiều cấp độ.
- Trong component con, props là chỉ đọc và không thể thay đổi. Điều này đảm bảo tính chất không thay đổi (immutability) và dễ kiểm tra (testability) của ứng dụng.
Ví dụ về việc truyền và sử dụng props trong React:
```
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="John" />;
}
```
Trong ví dụ trên, name là một props được truyền vào component Greeting. Component Greeting nhận props thông qua tham số props, và sử dụng giá trị của props.name để hiển thị lời chào.

# 2. Composition (Sự hợp thành):
- Composition trong React là cách xây dựng các component bằng cách kết hợp các component nhỏ thành một thành phần lớn hơn.
- Composition cho phép tái sử dụng và tổ chức code một cách linh hoạt, giúp phân chia logic và giao diện thành các phần nhỏ hơn và dễ quản lý hơn.
- Các component có thể chứa các component khác như các phần tử con (child elements), component con hoặc thậm chí các component đã được tạo trước.
- Composition cho phép xây dựng các cấu trúc giao diện phức tạp bằng cách kết hợp các thành phần nhỏ thành một cách có tổ chức và dễ đọc.
Ví dụ về sử dụng composition trong React:
```
function Button(props) {
  return <button>{props.label}</button>;
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Button label="Click Me" />
    </div>
  );
}
```
Trong ví dụ trên, component App sử dụng composition để bao gồm một component Button vào trong nội dung của nó. Component Button là một thành phần nhỏ được tái





