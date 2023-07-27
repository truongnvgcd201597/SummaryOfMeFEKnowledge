# useCallBack:

## 1. useCallback là gì?

> Hook useCallback trong ReactJS được sử dụng để memoize (tối ưu) một hàm callback. Nó giúp tránh việc tạo lại hàm callback mới trong mỗi lần render của component, đặc biệt khi hàm callback được truyền vào các component con thông qua props.

Khi sử dụng useCallback, bạn cần truyền vào một hàm callback và một mảng dependencies. useCallback sẽ trả về một phiên bản memoized của hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useCallback sẽ trả về cùng một phiên bản hàm callback đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc render lại của các component con, đặc biệt khi component cha render lại mà không cần tạo lại hàm callback và truyền vào component con.

```js
import React, { useCallback } from "react";

function MyComponent() {
  const handleClick = useCallback(() => {
    // Xử lý logic khi click
    console.log("Button clicked");
  }, []); // Không có dependency, hàm callback được memoize một lần và không thay đổi

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

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

Trong ví dụ trên, hàm handleClick được memoize bởi useCallback và không thay đổi giữa các lần render của MyComponent. Điều này giúp giảm số lượng render lại không cần thiết của các component con khi component cha render lại.

# 2. memo:

> React.memo() là một Higher Order Component (HOC) trong React.js được sử dụng để tối ưu hóa việc render lại của component. Nó giúp tránh việc render lại không cần thiết khi các props của component không thay đổi.

Khi một component được bao bọc bởi React.memo(), nó sẽ kiểm tra các props được truyền vào và chỉ render lại component khi có sự thay đổi trong các props đó. Nếu không có sự thay đổi, React.memo() sẽ sử dụng kết quả render trước đó và tránh quá trình render lại không cần thiết, giúp cải thiện hiệu suất ứng dụng.

```js
import React from "react";

const MyComponent = React.memo(({ prop1, prop2 }) => {
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
});
```

Trong ví dụ trên, MyComponent được bao bọc bởi React.memo(). Khi các props prop1 và prop2 không thay đổi, component sẽ không được render lại. Chỉ khi có sự thay đổi trong các props này, component mới được render lại.

React.memo() sử dụng shallow comparison (so sánh nông) để kiểm tra sự thay đổi của props. Điều này có nghĩa là nó chỉ so sánh giá trị của các props nguyên thủy (primitive values) hoặc tham chiếu (references) và không kiểm tra sâu vào cấu trúc dữ liệu phức tạp hơn như đối tượng (objects) hay mảng (arrays). Nếu các props có cấu trúc phức tạp và bạn muốn kiểm tra sâu hơn, bạn có thể sử dụng useCallback() hoặc useMemo() để tối ưu hóa.

Lưu ý rằng React.memo() chỉ tối ưu hóa việc render lại của component và không ảnh hưởng đến việc xử lý logic bên trong component.

# 3. useMemo:

> useMemo trong ReactJS được sử dụng để memoize (tối ưu) giá trị của một biểu thức. Nó giúp tránh tính toán lại giá trị trong mỗi lần render của component, đặc biệt khi giá trị đó được sử dụng trong các phần tử JSX hoặc tính toán phức tạp.

Khi sử dụng useMemo, bạn cần truyền vào một hàm callback và một mảng dependencies. useMemo sẽ thực thi hàm callback và trả về giá trị được tính toán từ hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useMemo sẽ trả về cùng một giá trị đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc tính toán của các giá trị trong component, đặc biệt khi component render lại mà không cần tính toán lại giá trị đó.

Ví dụ sử dụng useMemo:

```js
import React, { useMemo } from "react";

function MyComponent() {
  const expensiveValue = useMemo(() => {
    // Tính toán giá trị phức tạp
    console.log("Calculating expensive value");
    return someExpensiveCalculation();
  }, []); // Không có dependency, giá trị được memoize một lần và không thay đổi

  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
    </div>
  );
}
```

Trong ví dụ trên, giá trị expensiveValue được memoize bởi useMemo và không thay đổi giữa các lần render của MyComponent. Điều này giúp giảm số lượng tính toán không cần thiết khi component render lại và chỉ tính toán lại khi các dependencies thay đổi.

# So sánh useCallback và useMemo:

## 1. Giống nhau:

- Tối ưu hóa tính toán: Cả useCallback và useMemo đều giúp tránh tính toán lại giá trị trong mỗi lần render của component, đảm bảo rằng chỉ tính toán lại khi các dependencies thay đổi.
- Sử dụng dependencies: Cả useCallback và useMemo đều nhận một mảng dependencies làm đối số cuối cùng. Khi các dependencies không thay đổi, cả hai hook đều trả về giá trị đã được memoize từ lần render trước đó.
- Tăng hiệu suất: Cả useCallback và useMemo đều giúp giảm số lượng tính toán không cần thiết và tăng hiệu suất của các component.
- Sử dụng trong functional component: Cả useCallback và useMemo đều chỉ có thể được sử dụng trong functional component.

## 2. Khác nhau:

- Tối ưu hóa hàm callback và giá trị: useCallback được sử dụng để tối ưu hóa hàm callback, trong khi useMemo được sử dụng để tối ưu hóa giá trị.
- Giá trị trả về: useCallback trả về một hàm callback, trong khi useMemo trả về một giá trị.
- Sử dụng trong các trường hợp khác nhau: useCallback được sử dụng khi bạn muốn tối ưu hóa hàm callback, trong khi useMemo được sử dụng khi bạn muốn tối ưu hóa giá trị.

# 4. Kết luận:

- `useMemo` giữ cho hàm không được thực thi lại nếu nó không nhận được các tham số mới. Và nó sẽ trả về một function, sử dụng nó khi bạn muốn truyền một function vào một component con.
-
