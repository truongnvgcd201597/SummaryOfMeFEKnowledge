# useDebugValue

## 1. useDebugValue là gì:

> `useDebugValue` là một Hook cho phép bạn cung cấp một label cho một biến state trong React DevTools. Nó có thể được sử dụng để cung cấp thông tin hữu ích về một biến state trong khi debug.

## 2. Khi nào sử dụng useDebugValue:

- Hiển thị giá trị của một biến state hoặc prop: Bạn có thể sử dụng `useDebugValue` để hiển thị giá trị của một biến `state` hoặc `prop` trong component trong khi debug. Điều này giúp ta dễ dàng xem giá trị và theo dõi các thay đổi khi bạn thay đổi logic của component.
- Định dạng và hiển thị thông tin tùy chỉnh: Bạn có thể sử dụng hàm callback trong useDebugValue để định dạng và hiển thị thông tin tùy chỉnh.

## 3. Cú pháp sử dụng:

```js
import { useDebugValue } from "react";

const MyComponent = () => {
  // Khai báo một biến state
  const [value, setValue] = useState(initialValue);

  // Sử dụng useDebugValue để hiển thị giá trị của biến state
  useDebugValue(value, formatValue);

  // ...
};
```

- `value`: Giá trị mà bạn muốn hiển thị trong React DevTools.
- `formatValue`: Hàm callback nhận vào giá trị của biến state và trả về một chuỗi để hiển thị trong React DevTools. Ví dụ: `(value) => formatValue(value)` để định dạng giá trị một cách tùy chỉnh.

Lưu ý rằng useDebugValue chỉ được sử dụng cho mục đích gỡ lỗi và phân tích trong quá trình phát triển và không ảnh hưởng đến logic hoạt động của ứng dụng trong môi trường sản xuất.
