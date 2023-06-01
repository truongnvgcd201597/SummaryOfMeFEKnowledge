# Props trong ReactJS:

## 1. Định nghĩa:
> Props là một thuộc tính của component trong ReactJS. Nó được sử dụng để truyền dữ liệu giữa các component. Props là viết tắt của từ properties, có nghĩa là các thuộc tính của component.

Trong ReactJS, một component có thể nhận dữ liệu từ component cha thông qua props. Các props được truyền vào component giống như các thuộc tính của một đối tượng. Mỗi props có một tên và một giá trị tương ứng. Giá trị của props có thể là một giá trị đơn như một chuỗi, một số, một boolean, hoặc một giá trị đối tượng như một mảng, một đối tượng, một function, ...

Ví dụ, bạn có thể truyền một giá trị đơn như một chuỗi vào  một component thông qua props như sau:

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

