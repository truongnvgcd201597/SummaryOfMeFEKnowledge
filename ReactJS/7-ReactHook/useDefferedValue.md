# useDeferredValue

## 1. useDeferredValue là gì?

> `useDeferredValue` là một Hook cho phép bạn `trì hoãn` giá trị của một biến state trong một khoảng thời gian nhất định. Nó có thể được sử dụng để trì hoãn việc render một component con cho đến khi nó được cần thiết.

Khi sử dụng useDeferredValue, bạn có thể trì hoãn việc cập nhật giá trị của một biến state trong component để tránh việc render lại không cần thiết và tối ưu hóa hiệu suất. Điều này đặc biệt hữu ích khi bạn có các giá trị state thay đổi liên tục, và bạn chỉ quan tâm đến giá trị cuối cùng của chúng.

## 2. Khi nào sử dụng useDeferredValue?

- Khi bạn muốn trì hoãn việc render một component con cho đến khi nó được cần thiết.
- Khi bạn muốn tối ưu hóa hiệu suất bằng cách trì hoãn việc cập nhật giá trị của một biến state trong component.
- Khi bạn muốn trì hoãn việc cập nhật giá trị của một biến state trong component để tránh việc render lại không cần thiết.

## 3. Cú pháp sử dụng

```js
import { useDeferredValue } from "react";

const MyComponent = () => {
  // Khai báo một biến state
  const [value, setValue] = useState(initialValue);

  // Sử dụng useDeferredValue để trì hoãn cập nhật giá trị value
  const deferredValue = useDeferredValue(value, options);

  // ...
};
```

- value: Giá trị mà bạn muốn trì hoãn cập nhật.
- options: Đối tượng chứa các tùy chọn cho việc trì hoãn giá trị. Ví dụ: { timeoutMs: 1000 } để trì hoãn cập nhật trong 1 giây.
