# useImperativeHandle

## 1. useImpertiveHandle là gì?

> `useImperativeHandle` là một hook cho phép ta tùy chỉnh cách một component con lưu trữ và tiếp tục sử dụng một số phương thức hoặc thuộc tính bên ngoài. Nó thường được sử dụng khi bạn muốn tạo ra một giao diện API cho component con mà các component cha có thể gọi và tương tác với nó.

Khi bạn sử dụng useImperativeHandle, bạn cung cấp một hàm callback và một mảng dependencies. Hàm callback này sẽ được gọi khi component con được khởi tạo hoặc các dependencies trong mảng thay đổi. Trong hàm callback, bạn có thể định nghĩa các phương thức hoặc thuộc tính mà bạn muốn component cha có thể gọi hoặc truy cập.

## 2. Ví dụ về useImperativeHandle:

```js
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    getValue: () => {
      return inputRef.current.value;
    },
  }));

  return <input ref={inputRef} type="text" />;
});

const ParentComponent = () => {
  const childRef = useRef();

  const handleButtonClick = () => {
    childRef.current.focusInput();
    const value = childRef.current.getValue();
    console.log(value);
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};
```

Trong ví dụ trên, ChildComponent sử dụng `useImperativeHandle` để khai báo hai phương thức: `focusInput` và `getValue`. Khi component cha (ParentComponent) gọi `childRef.current.focusInput()`, phương thức focusInput được gọi và đặt focus vào phần tử input của ChildComponent. Tương tự, khi component cha gọi `childRef.current.getValue()`, phương thức getValue được gọi và trả về giá trị của phần tử input
