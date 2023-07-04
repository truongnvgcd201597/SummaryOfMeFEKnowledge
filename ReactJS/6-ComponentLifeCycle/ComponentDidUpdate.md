# ComponentDidUpdate:

## 1. Định nghĩa:

> componentDidUpdate là một phương thức lifecycle trong React được gọi sau khi component đã được render lại. Nó được sử dụng để xử lý các tác vụ sau khi component đã được cập nhật và re-render trên giao diện người dùng.

- Tracking state changes.
- Triggering re-rendering.
- Call API và setState và cẩn thận vì nó có thể gây ra vòng lặp vô tận.
  Khi một component đã được re-render, `componentDidUpdate` sẽ được gọi ngay sau khi quá trình re-render kết thúc. Phương thức này nhận vào hai đối số: `prevProps` và `prevState`, đại diện cho các `props` và `state` trước khi component được cập nhật.

## 2. Cách sử dụng:

Phương thức componentDidUpdate trong React được sử dụng để xử lý các tác vụ sau khi component đã được cập nhật và re-render trên giao diện người dùng. Đây là một trong các phương thức lifecycle của React.

Để sử dụng componentDidUpdate, bạn cần định nghĩa nó trong class component của bạn như sau:

```
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    // Xử lý các tác vụ sau khi component đã được cập nhật và re-render
    // Kiểm tra sự thay đổi của props hoặc state trước đó và hiện tại
    // Thực hiện các tác vụ cần thiết
  }

  render() {
    return (
      <div>
        {/* Nội dung của component */}
      </div>
    );
  }
}
```

Khi component được re-render, React sẽ tự động gọi phương thức `componentDidUpdate` và truyền vào hai đối số: prevProps và prevState, đại diện cho props và state trước khi component được cập nhật.

Trong phương thức `componentDidUpdate`, bạn có thể kiểm tra sự thay đổi của props hoặc state trước đó và hiện tại bằng cách so sánh giá trị của chúng. Sau đó, bạn có thể thực hiện các tác vụ cần thiết, chẳng hạn như gọi API để tải dữ liệu mới, cập nhật các biến tham chiếu, hoặc thực hiện các tác vụ khác phù hợp với logic của ứng dụng của bạn.

Lưu ý rằng khi sử dụng `componentDidUpdate`, bạn cần đảm bảo rằng bạn đã kiểm tra điều kiện để tránh rơi vào vòng lặp vô tận. Ví dụ, nếu bạn thay đổi props hoặc state trong phương thức `componentDidUpdate`, hãy đảm bảo kiểm tra sự khác biệt giữa giá trị trước và sau khi cập nhật để xác định khi nào cần thực hiện các tác vụ cần thiết.
