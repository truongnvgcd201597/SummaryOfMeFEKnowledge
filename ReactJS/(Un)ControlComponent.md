# Controlled component:

> Trong controlled component, giá trị của thành phần nhập liệu được điều khiển hoàn toàn bởi React thông qua trạng thái (state). Mỗi khi giá trị của thành phần thay đổi, React sẽ cập nhật lại trạng thái và render lại giao diện người dùng.

- Để tạo controlled component, bạn cần khai báo một **state** trong thành phần cha và sử dụng prop value để gán giá trị cho thành phần nhập liệu. Khi có sự kiện `onChange` xảy ra, bạn cần cập nhật trạng thái thông qua hàm `setState` để đồng bộ giá trị mới và giao diện người dùng.
- Controlled component giúp bạn kiểm soát và xử lý dữ liệu nhập vào một cách linh hoạt và có thể kiểm tra trước khi đưa vào trạng thái hoặc gửi đi.

```js
import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledInput;
```

# Uncontrolled component:

> Trong uncontrolled component, giá trị của thành phần nhập liệu được quản lý bởi trình duyệt (DOM). React không theo dõi và không can thiệp vào giá trị của thành phần này.

- Để tạo uncontrolled component, bạn không cần khai báo **state** và không cần sử dụng prop value. Thay vào đó, bạn sử dụng `ref` để lấy giá trị của thành phần nhập liệu sau khi người dùng thay đổi.
- Uncontrolled component thường được sử dụng khi bạn không cần quản lý trạng thái của thành phần đó hoặc khi bạn cần truy cập giá trị của thành phần một cách trực tiếp.

Sự lựa chọn giữa controlled component và uncontrolled component phụ thuộc vào yêu cầu và quyết định thiết kế của bạn. Controlled component thường cần nhiều công sức hơn để quản lý trạng thái, nhưng cho phép bạn có kiểm soát cao hơn và có thể kiểm tra dữ liệu trước khi sử dụng. Uncontrolled component đơn giản hơn và thích hợp trong một số trường hợp đơn giản khi bạn chỉ cần truy cập giá trị thành phần một cách trực tiếp.

```
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
```
