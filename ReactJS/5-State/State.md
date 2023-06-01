# State 

## Định nghĩa:
> Trong ReactJS, "state" (trạng thái) là một khái niệm quan trọng để quản lý và theo dõi các dữ liệu có thể thay đổi trong một component. State đại diện cho trạng thái hiện tại của component và ảnh hưởng đến cách component hiển thị và hoạt động.

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




