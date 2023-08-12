# useSearchParams

## 1. useSearchParams là gì?

> **useSearchParams** sử dụng để truy cập và quản lý các tham số truy vấn (query parameters) trong URL. Hook này giúp bạn đọc và cập nhật các tham số truy vấn một cách dễ dàng trong thành phần React.

```ts
function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Đọc giá trị của các tham số truy vấn
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  // Cập nhật giá trị của các tham số truy vấn
  const updateSearchParams = () => {
    setSearchParams({ query: "example", page: 1 });
  };

  return (
    <div>
      <p>Query: {query}</p>
      <p>Page: {page}</p>
      <button onClick={updateSearchParams}>Update</button>
    </div>
  );
}
```

Trong ví dụ trên, chúng ta đang sử dụng useSearchParams để lấy giá trị của các tham số truy vấn query và page. Bằng cách gọi setSearchParams, chúng ta có thể cập nhật giá trị của các tham số truy vấn.

Lưu ý rằng useSearchParams trả về một mảng gồm hai phần tử. Phần tử đầu tiên chứa đối tượng URLSearchParams để thao tác với các tham số truy vấn. Phần tử thứ hai là một hàm để cập nhật tham số truy vấn mới.
