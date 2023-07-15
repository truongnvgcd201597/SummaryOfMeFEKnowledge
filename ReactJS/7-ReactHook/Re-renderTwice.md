# ReactJS re-render twice time although setState() have the same value

Có một vài lí do tại sao **setState** có thể re-render 2 lần mặc dù state có cùng giá trị:

Điều kiện để component re-render đó là ta phải setState với giá trị khác với state hiện tại (không phải là so sánh giá trị mà là so sánh địa chỉ vùng nhớ, React sử dụng **Object.is** để so sánh).

- Đối với kiểu dữ liệu nguyên thuỷ thì khác giá trị.
- Đối với object thì khác tham chiếu.

Trong ví dụ dưới đây, ta sẽ setState với giá trị bằng với state hiện tại nhưng vẫn re-render 2 lần:

```js
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Rahul");

  const onLoadUser = () => {
    setName("Rahul");
  };

  console.log("Rendered");

  return (
    <div>
      <h1>Print User details</h1>
      <p>
        User Name: <strong>{name}</strong>
      </p>
      <button onClick={onLoadUser}>Fetch user details</button>
    </div>
  );
}
```

Khi ta click vào button thì component sẽ re-render 2 lần.

Theo như React team thì ban đầu React sẽ không biết liệu bạn có thực sự muốn set state và re-render hay không nên React sẽ re-render. Ở lần set state tiếp theo, khi chúng ta lại set với trị cũ thì bây giờ React sẽ không re-render nữa, vì cả 2 state đều giống nhau.
