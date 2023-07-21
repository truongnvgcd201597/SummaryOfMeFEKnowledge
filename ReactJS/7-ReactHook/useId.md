# useId

## 1. useId là gì?

> useId là một custom hook (hook tự định nghĩa) được sử dụng để tạo ra một ID duy nhất và bảo đảm rằng ID này không thay đổi trong suốt quá trình render của component.

## 2. Khi nào sử dụng useId?

- Tạo ra một ID duy nhất: Bạn có thể sử dụng useId để tạo ra một ID duy nhất cho các phần tử trong component.
- Bảo đảm ID không thay đổi: Bạn có thể sử dụng useId để bảo đảm rằng ID của các phần tử không thay đổi trong suốt quá trình render của component.

## 3. Ví dụ:

```js
import { useState, useEffect } from "react";

// Custom hook to generate unique IDs
const useId = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    // Generate a random ID using a simple algorithm (you can use other algorithms as well)
    const generatedId = Math.random().toString(36).substr(2, 9);
    setId(generatedId);
  }, []);

  return id;
};

// Usage example
const MyComponent = () => {
  const uniqueId = useId();

  return <div>Unique ID: {uniqueId}</div>;
};
```

Trong ví dụ trên, khi MyComponent được render lần đầu tiên, hook useId sẽ tạo ra một ID duy nhất và giữ nguyên giá trị này trong suốt vòng đời của MyComponent. Nếu component được render lại, giá trị của ID sẽ không thay đổi, nhờ đó ta có thể sử dụng ID này một cách tin cậy trong ứng dụng.
