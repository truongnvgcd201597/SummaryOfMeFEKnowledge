# startTransition & useTransition

## 1. startTransition:

> startTransition là một hàm dùng trong ReactJS ver 18 và phiên bản sau này để hỗ trợ việc thực hiện các chuyển đổi mượt mà và tối ưu hiệu suất trong ứng dụng React, sẽ được React đánh dấu là độ ưu tiên thấp hơn các tác vụ khác trong ứng dụng.

Khi bạn sử dụng `startTransition`, bạn cho biết rằng một tác vụ đang bắt đầu thực hiện và React sẽ ưu tiên việc cập nhật UI và tránh hiệu ứng gián đoạn (jank) trong quá trình thực hiện tác vụ đó. Nó giúp cải thiện trải nghiệm người dùng trong trường hợp có các tác vụ phức tạp hoặc tốn nhiều thời gian để thực hiện.

Thông thường, chúng ta sử dụng `startTransition` khi không muốn dùng `useTransition` sẽ được cung cấp thêm giá trị nữa đó là pending. Nếu bạn không muốn dùng pending thì có thể sử dụng `startTransition` thay thế.

```js
import { startTransition } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1);
      // Các tác vụ khác sau khi tăng count
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};
```

Trong ví dụ trên, chúng ta sử dụng `startTransition` trong hàm handleClick để bao bọc các tác vụ cập nhật trạng thái. Khi người dùng nhấn vào nút "Increase," các tác vụ cập nhật count và các tác vụ khác sau đó được bao bọc bởi startTransition, và React sẽ ưu tiên việc cập nhật UI và tránh hiệu ứng gián đoạn trong quá trình thực hiện chúng.

# 2. useTransition:

> useTransition là một trong những hook mới hỗ trợ việc thực hiện các chuyển đổi mượt mà khi thay đổi trạng thái của ứng dụng.

Khi bạn sử dụng `useTransition`, nó cho phép chúng ta chia nhỏ các tác vụ cần thực hiện khi có sự thay đổi trong trạng thái (state) thành các phần nhỏ nhằm tối ưu hóa hiệu suất và giảm thiểu gián đoạn trong giao diện người dùng (UI). Điều này đặc biệt hữu ích khi có sự thay đổi trạng thái phức tạp hoặc tác vụ có thời gian thực hiện dài.

```js
import { useTransition } from "react";

const MyComponent = () => {
  const [isShow, setShow] = useState(false);

  const transitions = useTransition(isShow, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      {transitions(
        (style, item) => item && <div style={style}>Content to show/hide</div>
      )}
      <button onClick={() => setShow(!isShow)}>Toggle</button>
    </div>
  );
};
```
