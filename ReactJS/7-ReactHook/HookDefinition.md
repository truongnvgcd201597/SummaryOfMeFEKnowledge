# React Hook:
## 1. Hook là gì?
> React Hook là một tính năng trong React từ phiên bản 16.8 trở đi, giúp bạn sử dụng các tính năng của React như state và lifecycle trong các functional component. Hooks có thể hiểu nôm na là một cái function được hook-into vào các features của React và sẽ được gọi khi cần thiết. Trước khi có React Hook, các tính năng này chỉ có thể được sử dụng trong các class component.

React Hook cung cấp một tập hợp các hàm built-in như useState, useEffect, useContext, và nhiều hơn nữa. Bằng cách sử dụng các hàm Hook này, bạn có thể quản lý state, thực hiện side effects, sử dụng context, và thực hiện các tác vụ khác trong functional component.

Ví dụ, hàm useState cho phép bạn khai báo và sử dụng state trong functional component như sau:
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

Trong ví dụ trên, useState(0) khai báo một state có tên là count và khởi tạo giá trị ban đầu là 0. Hàm setCount được sử dụng để cập nhật giá trị của state count khi người dùng nhấn vào nút "Increment".

React Hook giúp bạn viết code dễ hiểu hơn, tái sử dụng logic và quản lý state trong functional component một cách dễ dàng và gọn gàng hơn so với việc sử dụng class component truyền thống.

## 2. Khi nào nên sử dụng React Hook?
- React Hook có thể được sử dụng trong tất cả các functional component. Tuy nhiên, nó không thể được sử dụng trong các class component. Nếu bạn đang sử dụng class component, bạn có thể chuyển sang sử dụng functional component để sử dụng React Hook.
- React Hook có thể được sử dụng trong các project React mới hoặc các project React cũ. Nếu bạn đang sử dụng các class component trong project React cũ, bạn có thể chuyển sang sử dụng functional component và React Hook.
- React Hook có thể được sử dụng trong các project React Native.
- Khi bạn muốn sử dụng các tính năng của React như state và lifecycle trong functional component mà không thích làm việc với class component.

## 3. Ai nên sử dụng React Hook?
React Hook có thể được sử dụng bởi tất cả các developer React, bao gồm cả các developer mới bắt đầu học React. Tuy nhiên, nếu bạn mới bắt đầu học React, bạn nên học cách sử dụng class component trước khi học cách sử dụng React Hook.

## 4. React Hook có những lợi ích gì?
- React Hook giúp bạn viết code dễ hiểu hơn, tái sử dụng logic và quản lý state trong functional component một cách dễ dàng và gọn gàng hơn so với việc sử dụng class component truyền thống.
- React Hook giúp bạn viết code ngắn gọn hơn so với việc sử dụng class component truyền thống.
- React Hook giúp bạn viết code dễ test hơn so với việc sử dụng class component truyền thống.
- React Hook giúp bạn viết code dễ bảo trì hơn so với việc sử dụng class component truyền thống.

## 5. React Hook có những hạn chế gì?
- React Hook không thể được sử dụng trong các class component.
- React Hook không thể được sử dụng trong các functional component không phải là React component (ví dụ: functional component của thư viện UI).

