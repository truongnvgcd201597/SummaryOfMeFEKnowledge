# useLocation

## 1. useLocation Hook trong React Router:

> useLocation được cung cấp để lấy thông tin về địa chỉ URL hiện tại (current URL). Nó cho phép bạn truy cập và sử dụng thông tin về địa chỉ URL trong các thành phần của ứng dụng React.

```ts
function MyComponent() {
  const location = useLocation();

  // Sử dụng location để truy cập thông tin về địa chỉ URL hiện tại
  console.log(location.pathname); // Lấy đường dẫn của URL hiện tại
  console.log(location.search); // Lấy query parameters của URL hiện tại
  console.log(location.hash); // Lấy hash fragment của URL hiện tại

  return <div>{/* ... */}</div>;
}
```

Khi bạn sử dụng `useLocation`, hook sẽ trả về một đối tượng `location` chứa thông tin về địa chỉ URL hiện tại. Các thuộc tính quan trọng của đối tượng `location` bao gồm:

- **pathname**: Đường dẫn của URL hiện tại.
- **search**: Chuỗi query parameters của URL hiện tại (bao gồm ký tự "?" và các tham số sau đó).
- **hash**: Chuỗi hash fragment của URL hiện tại (bao gồm ký tự "#").

Bạn có thể sử dụng các thuộc tính này để điều hướng, xử lý logic hoặc hiển thị nội dung phụ thuộc vào địa chỉ URL hiện tại trong ứng dụng của mình.

Đây là một ví dụ đơn giản về việc sử dụng useLocation trong một ứng dụng React Router:

```ts
import { useLocation } from "react-router-dom";

function MyComponent() {
  const location = useLocation();

  return (
    <div>
      <h1>Current Path: {location.pathname}</h1>
      <p>Query Parameters: {location.search}</p>
      <p>Hash Fragment: {location.hash}</p>
    </div>
  );
}
```
