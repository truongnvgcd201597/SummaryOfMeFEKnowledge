# Batching State

## 1. Batching State:

> React 18 giới thiệu một tính năng mới có tên là Automatic Batching, giúp cải thiện hiệu suất của các ứng dụng React của bạn bằng cách gộp các cập nhật trạng thái lại với nhau. Điều này có nghĩa là nếu bạn gọi setState() nhiều lần trong một hàm, React sẽ gộp các cập nhật lại với nhau thành một cập nhật duy nhất để tránh việc render lại nhiều lần.

Trong React 17 và các phiên bản trước đó, các cập nhật **state** chỉ được thực hiện theo đợt bên trong trình xử lý sự kiện React. Điều này có nghĩa là nếu bạn thực hiện một cập nhật trạng thái trong code bất đồng bộ hoặc trình xử lý sự kiện gốc, thì nó sẽ không được thực hiện cùng lúc với các cập nhật trạng thái khác. Điều này có thể dẫn đến việc kết xuất lại không cần thiết, điều này có thể ảnh hưởng đến hiệu suất của ứng dụng của bạn.

Với Automatic Batching, tất cả các cập nhật trạng thái được gộp lại với nhau, bất kể chúng được gọi ở đâu. Điều này có nghĩa là bạn có thể yên tâm rằng các thành phần của mình sẽ chỉ kết xuất lại một lần, ngay cả khi bạn thực hiện nhiều cập nhật trạng thái liên tiếp.

Dưới đây là một ví dụ về cách hoạt động của Batch tự động:

```js
import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState();
  const [city, setCity] = useState();

  // Sync Function call
  const onLoadUser = () => {
    setName("Rahul");
    setCity("Bangalore");
  };

  useEffect(() => {
    console.log(`UseEffect Called: userDeatils ${name} ${city}`);
  }, [name, city]);

  return (
    <div>
      <h1>Print User details</h1>
      <p>
        User Name: <strong>{name}</strong>
      </p>
      <p>
        City: <strong>{city}</strong>
      </p>
      <button onClick={onLoadUser}>Fetch user details</button>
    </div>
  );
}
```
