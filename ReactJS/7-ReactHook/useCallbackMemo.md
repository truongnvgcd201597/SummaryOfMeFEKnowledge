# useCallBack:

## 1. useCallback là gì?
> Hook useCallback trong ReactJS được sử dụng để memoize (tối ưu) một hàm callback. Nó giúp tránh việc tạo lại hàm callback mới trong mỗi lần render của component, đặc biệt khi hàm callback được truyền vào các component con thông qua props.

Khi sử dụng useCallback, bạn cần truyền vào một hàm callback và một mảng dependencies. useCallback sẽ trả về một phiên bản memoized của hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useCallback sẽ trả về cùng một phiên bản hàm callback đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc render lại của các component con, đặc biệt khi component cha render lại mà không cần tạo lại hàm callback và truyền vào component con.

```
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    // Xử lý logic khi click
    console.log('Button clicked');
  }, []); // Không có dependency, hàm callback được memoize một lần và không thay đổi

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```
Trong ví dụ trên, hàm handleClick được memoize bởi useCallback và không thay đổi giữa các lần render của MyComponent. Điều này giúp giảm số lượng render lại không cần thiết của các component con khi component cha render lại.

# useMemo:
> useMemo trong ReactJS được sử dụng để memoize (tối ưu) giá trị của một biểu thức. Nó giúp tránh tính toán lại giá trị trong mỗi lần render của component, đặc biệt khi giá trị đó được sử dụng trong các phần tử JSX hoặc tính toán phức tạp.

Khi sử dụng useMemo, bạn cần truyền vào một hàm callback và một mảng dependencies. useMemo sẽ thực thi hàm callback và trả về giá trị được tính toán từ hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useMemo sẽ trả về cùng một giá trị đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc tính toán của các giá trị trong component, đặc biệt khi component render lại mà không cần tính toán lại giá trị đó.

Ví dụ sử dụng useMemo:
```
import React, { useMemo } from 'react';

function MyComponent() {
  const expensiveValue = useMemo(() => {
    // Tính toán giá trị phức tạp
    console.log('Calculating expensive value');
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