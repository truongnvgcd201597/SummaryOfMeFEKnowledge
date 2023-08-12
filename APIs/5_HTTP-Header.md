# HTTP-Header:

## 1.HTTP-Header là gì?

> HTTP Header là một phần của thông điệp HTTP (HTTP message), được gửi từ máy khách (client) tới máy chủ (server) hoặc ngược lại. Nó chứa các thông tin về thông điệp HTTP, chẳng hạn như loại dữ liệu (content type), độ dài dữ liệu (content length), phương thức HTTP, mã trạng thái (status code) và nhiều thông tin khác.

![](https://www.seobility.net/en/wiki/images/d/d2/HTTP-Header.png)

HTTP Header có hai loại: `Request Header` và `Response Header`. `Request Header` là các thông tin được gửi bởi máy khách đến máy chủ, còn `Response Header` là các thông tin được gửi bởi máy chủ đến máy khách. Cả hai loại header đều được định dạng theo chuẩn HTTP và có các trường thông tin (fields) được định nghĩa sẵn.

Một số trường thông tin phổ biến trong Request Header gồm User-Agent (thông tin về trình duyệt, hệ điều hành và thiết bị sử dụng để gửi yêu cầu), Host (tên miền của máy chủ đích), Cookie (dữ liệu lưu trữ trên máy khách), Authorization (thông tin xác thực của người dùng) và Accept (danh sách các định dạng dữ liệu mà máy khách có thể xử lý được).

Trong Response Header, một số trường thông tin phổ biến là Content-Type (loại dữ liệu trả về), Content-Length (độ dài của dữ liệu trả về), Set-Cookie (dữ liệu lưu trữ trên máy khách), Cache-Control (thông tin về bộ nhớ đệm) và Location (địa chỉ URL mới khi yêu cầu được chuyển hướng).

## 2.Cách kiểm tra HTTP Header:

Có nhiều cách để kiểm tra HTTP Header trong một truy vấn HTTP. Dưới đây là một số cách phổ biến:

- Sử dụng trình duyệt web: Để kiểm tra Header của trang web, bạn có thể sử dụng tính năng "Developer Tools" có sẵn trong các trình duyệt phổ biến như Google Chrome, Firefox, Safari, Edge, vv. Để mở Developer Tools, bạn có thể nhấp chuột phải và chọn "Inspect" hoặc nhấn tổ hợp phím Ctrl + Shift + I trên bàn phím của bạn. Sau đó, chuyển sang tab "Network" và tải lại trang web để xem các yêu cầu HTTP và các phản hồi, bao gồm các Header.
- Sử dụng Terminal hoặc Command Prompt: Nếu bạn đang làm việc với API hoặc các công cụ dòng lệnh, bạn có thể sử dụng Terminal hoặc Command Prompt để gửi yêu cầu HTTP và nhận phản hồi. Ví dụ, để gửi một yêu cầu HTTP GET đến một URL, bạn có thể sử dụng lệnh curl trên Unix hoặc PowerShell trên Windows như sau:

```
curl -i https://www.example.com
```

Lệnh trên sẽ gửi yêu cầu HTTP GET đến https://www.example.com và hiển thị các Header của phản hồi trên Terminal hoặc Command Prompt.

- Sử dụng các công cụ kiểm tra Header trực tuyến: Ngoài ra, có nhiều công cụ trực tuyến cho phép bạn kiểm tra các Header của một URL cụ thể. Một số ví dụ phổ biến bao gồm:

```
https://www.webconfs.com/http-header-check.php
https://redbot.org/
https://www.seobility.net/en/http-header-check/
```

## 3. Các thành phần trong header:

HTTP header bao gồm các thành phần sau:

- Request Line: Đây là thành phần đầu tiên của header và chứa thông tin về phương thức, đường dẫn và phiên bản của giao thức HTTP.
- Response Status Line: Thành phần này chỉ xuất hiện trong phản hồi từ máy chủ và chứa mã trạng thái HTTP và thông điệp tương ứng.
- Headers: Header chứa thông tin về các đặc tính của tài nguyên hoặc yêu cầu. Có nhiều loại header khác nhau, bao gồm header chung, header yêu cầu, header phản hồi và header riêng.
- Body: Thành phần cuối cùng của header chứa dữ liệu thực sự được truyền trong yêu cầu hoặc phản hồi. Nó thường được sử dụng để chứa nội dung của trang web, nhưng cũng có thể được sử dụng để truyền dữ liệu khác như hình ảnh, âm thanh, video, vv.

## 4. Các header phổ biến:

Dưới đây là danh sách một số header phổ biến được sử dụng trong các yêu cầu và phản hồi HTTP:

- Accept: Chỉ định định dạng phương tiện được chấp nhận cho phản hồi từ máy chủ.
- Content-Type: Chỉ định định dạng phương tiện của dữ liệu được gửi đến máy chủ.
- User-Agent: Chứa thông tin về trình duyệt, thiết bị hoặc ứng dụng sử dụng để tạo ra yêu cầu HTTP.
- Authorization: Chứa thông tin xác thực để truy cập vào tài nguyên được bảo vệ bởi một hệ thống xác thực nào đó.
- Cache-Control: Chỉ định các hướng dẫn về việc lưu trữ bộ đệm được sử dụng cho phản hồi HTTP.
- Content-Length: Chỉ định kích thước của dữ liệu được gửi đến máy chủ trong yêu cầu hoặc phản hồi HTTP.
- Location: Chỉ định URL mới cho tài nguyên được yêu cầu trong trường hợp chuyển hướng.
- Referer: Chứa URL của trang mà yêu cầu HTTP trước đó đến từ.
- Server: Chỉ định tên của máy chủ web phục vụ yêu cầu HTTP.
- Set-Cookie: Chứa thông tin về cookie được gửi đến trình duyệt để lưu trữ trên thiết bị của người dùng.
