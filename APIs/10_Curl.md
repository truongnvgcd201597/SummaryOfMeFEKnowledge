# CURL 

## Curl là gì?
> CURL là một công cụ dòng lệnh để tải xuống hoặc tải lên các tài nguyên trên mạng thông qua các giao thức như HTTP, HTTPS, FTP và SCP. CURL có thể được sử dụng để lấy dữ liệu từ các trang web, tải xuống tệp tin, gửi yêu cầu HTTP, kiểm tra trạng thái của máy chủ, và thực hiện nhiều tác vụ khác trên mạng. CURL được phát triển ban đầu bởi Daniel Stenberg vào năm 1997 và hiện đã trở thành một công cụ phổ biến trong việc phát triển ứng dụng web và quản lý hệ thống mạng.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tWZKYq35174YInwfK9DtSujNiYDAlclPKw&usqp=CAU)

CURL có thể được sử dụng trên nhiều hệ điều hành khác nhau, bao gồm Windows, macOS và các bản phân phối Linux. Nó cũng được tích hợp vào nhiều công cụ và ngôn ngữ lập trình như Python, PHP và Node.js.

CURL cung cấp nhiều tùy chọn để điều chỉnh các yêu cầu mạng và xử lý dữ liệu phản hồi. Ví dụ, bạn có thể thiết lập tùy chọn để xác thực bằng cách sử dụng các giấy tờ chứng nhận SSL, tải xuống tệp tin theo định dạng được chỉ định hoặc kiểm soát thời gian chờ của yêu cầu mạng.

Một số ví dụ về việc sử dụng CURL bao gồm:
- Tải xuống một tệp tin từ một URL: curl -O [url]
- Gửi một yêu cầu GET đến một URL và hiển thị kết quả: curl [url]
- Gửi một yêu cầu POST với dữ liệu đầu vào đến một URL: curl  -X POST -d "data" [url]
- Tải xuống một tệp tin và lưu trữ nó với tên tùy chỉnh: curl -o [filename] [url]

## Câu lệnh CURL:
CURL có rất nhiều tùy chọn, nhưng chúng ta sẽ chỉ tập trung vào một số tùy chọn phổ biến nhất. Để hiển thị tất cả các tùy chọn, bạn có thể sử dụng lệnh curl --help hoặc curl -h.

Dưới đây là một số tùy chọn thông dụng trong lệnh CURL:
* -H: Thêm tiêu đề vào yêu cầu HTTP.
* -d: Gửi dữ liệu theo phương thức POST.
* -X: Chỉ định phương thức HTTP (GET, POST, PUT, DELETE, vv.).
* -o: Lưu phản hồi từ máy chủ vào tệp tin được chỉ định.
* -O: Lưu phản hồi từ máy chủ vào tệp tin cùng tên với tên tệp tin trên máy chủ.
* -u: Chỉ định thông tin đăng nhập của người dùng (tên người dùng và mật khẩu).
* -k: Bỏ qua các lỗi xác thực chứng chỉ SSL.
* -s: Tắt đầu ra dự phòng và hiển thị chỉ thông tin cần thiết.
* -v: Hiển thị các thông tin chi tiết và giao tiếp giữa máy khách và máy chủ.
* --head: Gửi yêu cầu HEAD đến máy chủ và hiển thị phản hồi tiêu đề.
* --trace: Ghi lại toàn bộ quá trình giao tiếp giữa máy khách và máy chủ vào tệp tin được chỉ định.

## Các ví dụ về CURL:
### 1. Tải xuống một tệp tin từ một URL:
```
curl -O https://example.com/file.zip
```

### 2. Gửi một yêu cầu GET đến một URL và hiển thị kết quả:
```
curl https://example.com
```

### 3. Gửi một yêu cầu POST với dữ liệu đầu vào đến một URL:
```
curl -X POST -d "data" https://example.com
```

### 4. Tải xuống một tệp tin và lưu trữ nó với tên tùy chỉnh:
```
curl -o file.zip https://example.com/file.zip
```

### 5. Gửi yêu cầu GET với tiêu đề đăng nhập:
```
curl -H "Authorization: Bearer mytoken" https://example.com/api/data
```

### 6. Tải xuống nhiều tệp tin từ một URL:
```
curl -O https://example.com/file1.zip -O https://example.com/file2.zip
```

### 7. Tải xuống tệp tin với SSL:
```
curl -k https://example.com/file.zip
```