# React.memo & useMemo

## 1. React.memo:

Trong ReactJS, **React.memo** là một HOC được cung cấp bởi React để tối ưu hóa hiệu suất của các component bằng cách giảm số lần render. Nó sẽ sử dụng toán tử === để so sánh các props được truyền vào component.
Khi một component được bao bọc bởi **React.memo**, React sẽ tự động lưu lại kết quả của việc render trước đó và chỉ render lại component nếu các props đã thay đổi. Nếu các props không thay đổi, **React.memo** sẽ trả về kết quả đã được lưu trữ trước đó, không cần thực hiện việc render lại component và ghi lại kết quả.

Dưới đây là một ví dụ đơn giản về cách sử dụng React.memo:

```js
import React from "react";

const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

Ở ví dụ trên, **React.memo** sẽ so sánh các props được truyền vào component và các props được lưu trữ trước đó. Nếu các props không thay đổi, **React.memo** sẽ trả về kết quả đã được lưu trữ trước đó, không cần thực hiện việc render lại component và ghi lại kết quả.

**Lưu ý**: Không sử dụng chúng trong phần `render` và bên trong `function` component.

Khi sử dụng React.memo, bạn cũng có thể cung cấp một hàm so sánh dependencies tùy chỉnh để xác định liệu component có cần render lại hay không dựa trên các điều kiện đặc biệt. Dưới đây là một ví dụ:

```js
import React from "react";

const isEqual = (prevProps, nextProps) => {
  // Kiểm tra sự khác biệt giữa prevProps và nextProps
  // Trả về true nếu các props khác biệt, ngược lại trả về false
};

const MyComponent = React.memo(({ name, age }) => {
  console.log("Rendering MyComponent");
  return (
    <div>
      Hello, {name}! You are {age} years old.
    </div>
  );
}, isEqual);
```

Trong ví dụ trên, isEqual là một hàm so sánh dependencies tùy chỉnh được truyền vào React.memo. Bạn có thể triển khai hàm này để kiểm tra sự khác biệt giữa các props (prevProps và nextProps), và trả về true nếu các props khác biệt và false nếu các props giống nhau.

## 2. useMemo:

**useMemo** là một hook được cung cấp bởi React để optimize performance của các tính toán trong component bằng cách lưu trữ kết quả tính toán trước đó và chỉ tính toán lại khi các dependency thay đổi.

Cú pháp:

```js
const memoizedValue = useMemo(() => {
  // Logic tính toán để trả về giá trị được memoized
}, dependencies);
```

- Hàm callback trong useMemo được thực thi khi component render và trả về giá trị được memoized.
- dependencies là một mảng các giá trị, khi các giá trị này thay đổi, **useMemo** sẽ tính toán lại giá trị và cập nhật lại memoized value.

Ví dụ:

```js
import React, { useMemo } from "react";

const ExpensiveComponent = ({ list }) => {
  const expensiveValue = useMemo(() => {
    // Logic tính toán tốn kém
    let result = 0;
    for (let i = 0; i < list.length; i++) {
      result += list[i];
    }
    return result;
  }, [list]);

  return <div>Expensive Value: {expensiveValue}</div>;
};

const App = () => {
  const list = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>App Component</h1>
      <ExpensiveComponent list={list} />
    </div>
  );
};
```

Trong ví dụ trên, `ExpensiveComponent` nhận prop list và tính toán giá trị tốn kém bằng cách cộng tất cả các phần tử trong mảng list. Bằng cách sử dụng **useMemo** với `dependency` là list, giá trị `expensiveValue` chỉ được tính toán lại khi list thay đổi.
