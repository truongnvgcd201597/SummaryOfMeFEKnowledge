# Fetch

## 1. Fetch là gì?

> fetch là một API của JavaScript được sử dụng để gửi yêu cầu mạng (network requests) tới một URL và trả về dữ liệu từ đó. Nó cho phép bạn gửi các yêu cầu HTTP (như GET, POST, PUT, DELETE) và nhận dữ liệu từ một API hoặc trang web.

Ví dụ, bạn có thể sử dụng fetch để lấy dữ liệu từ một API như sau:

```
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

Fetch cung cấp một cách dễ dàng để xử lý yêu cầu mạng và trả về dữ liệu dễ dàng để sử dụng trong JavaScript.

## 2. Ưu & nhược điểm của Fetch?

Ưu điểm của fetch API:

- Dễ sử dụng: fetch API là rất dễ sử dụng, đặc biệt so với các thư viện mạng khác và XMLHttpRequest (XHR).
- Tương thích trình duyệt: fetch API được hỗ trợ trên hầu hết các trình duyệt hiện đại, bao gồm cả trình duyệt di động.
- Tính năng bổ sung: fetch API cung cấp một số tính năng bổ sung, như việc có thể gửi dữ liệu và xác thực, trong khi vẫn giữ đơn giản.
- Đơn giản hóa việc xử lý lỗi: fetch API giúp đơn giản hóa việc xử lý lỗi bằng cách sử dụng các Promise và các lỗi có thể xảy ra trong quá trình gửi yêu cầu mạng.

Nhược điểm của fetch API:

- Đòi hỏi kiến thức về Promises: fetch API sử dụng Promises để xử lý các phản hồi mạng, vì vậy bạn cần phải có kiến thức về Promises trước khi sử dụng fetch.
- Tùy chọn nhận dữ liệu hạn chế: fetch API chỉ hỗ trợ một số tùy chọn nhận dữ liệu, nhưng không hỗ trợ một số tùy chọn nhận dữ liệu mạnh mẽ như các thư viện mạng khác.
- Chưa hỗ trợ tốt cho việc gửi dữ liệu đồng bộ: fetch API chưa hỗ trợ tốt cho việc gửi dữ liệu đồng bộ, vì vậy bạn cần phải sử dụng các thư viện mạng khác hoặc viết mã tự động để giải quyết vấn đề này.
