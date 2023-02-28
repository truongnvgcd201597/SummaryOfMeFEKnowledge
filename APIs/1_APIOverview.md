# API documentation:

## 1. API là gì?
> API (Application Programming Interface) là một tập hợp các thiết lập, quy tắc và tiêu chuẩn được sử dụng để cho phép các ứng dụng khác giao tiếp với nhau hoặc truy cập dữ liệu của một hệ thống hoặc dịch vụ. API cung cấp một cách để các phần mềm khác có thể giao tiếp với nhau và sử dụng các tính năng của một hệ thống hoặc dịch vụ mà không cần biết cách thực sự hoạt động của hệ thống đó. API cũng có thể được sử dụng để truy cập dữ liệu từ các nguồn khác nhau, chẳng hạn như các cơ sở dữ liệu, các trang web hoặc các dịch vụ đám mây.


API có nhiều vai trò khác nhau trong phát triển phần mềm. Một số vai trò chính của API bao gồm:
- **Cho phép các ứng dụng khác giao tiếp với nhau**: API cung cấp một cách để các ứng dụng khác có thể giao tiếp với nhau và sử dụng các tính năng của một hệ thống hoặc dịch vụ mà không cần biết cách thực sự hoạt động của hệ thống đó.
- **Cung cấp truy cập đến dữ liệu từ các nguồn khác nhau**: API cũng có thể được sử dụng để truy cập dữ liệu từ các nguồn khác nhau, chẳng hạn như các cơ sở dữ liệu, các trang web hoặc các dịch vụ đám mây.
- **Giúp tăng tính bảo mật và an toàn**: API có thể được sử dụng để hạn chế truy cập đến các tính năng và dữ liệu của hệ thống hoặc dịch vụ, giúp tăng tính bảo mật và an toàn của hệ thống.
- **Giúp xây dựng các ứng dụng di động**: API cũng có thể được sử dụng trong việc xây dựng các ứng dụng di động, đặc biệt là các ứng dụng sử dụng các dịch vụ đám mây để lưu trữ dữ liệu và thực hiện các tác vụ khác.
- **Cung cấp các tính năng cho các nhà phát triển**: API cũng có thể được sử dụng để cung cấp các tính năng cho các nhà phát triển để họ có thể xây dựng các ứng dụng mới hoặc mở rộng các ứng dụng hiện có.
- **Giúp tăng khả năng tương tác và hợp tác giữa các hệ thống**: API cũng có thể giúp tăng khả năng tương tác và hợp tác giữa các hệ thống khác nhau bằng cách cho phép chúng giao tiếp với nhau và sử dụng các tính năng của nhau.

## 2. Roles:
API thường được xây dựng bởi các nhà phát triển phần mềm và thường nằm trong phần backend của một hệ thống hoặc dịch vụ. Tuy nhiên, cũng có thể có các nhà phát triển frontend đóng góp vào việc xây dựng API, đặc biệt là trong trường hợp họ cần truy cập dữ liệu từ các nguồn khác nhau để hiển thị trên giao diện người dùng.

Điều quan trọng là API cung cấp một cách để các phần mềm khác có thể giao tiếp với nhau và sử dụng các tính năng của hệ thống hoặc dịch vụ mà không cần biết cách thực sự hoạt động của hệ thống đó, vì vậy API có thể được xem là một phần quan trọng của hệ thống hoặc dịch vụ và có thể được xây dựng bởi cả nhà phát triển backend và frontend.

## 3. Environment:
| Name  | Description |
| ------------- |:-------------:|
| Development environment      | Đây là môi trường dùng để phát triển và thử nghiệm API. Trong môi trường này, các nhà phát triển có thể thử nghiệm và chỉnh sửa API mà không lo ngại về việc ảnh hưởng đến các ứng dụng sử dụng API.     |
| Staging environment      |  Đây là môi trường giống như môi trường phát triển, nhưng được dùng để thử nghiệm các tính năng mới trước khi đưa chúng vào sử dụng trong môi trường thật.     |
| Production environment      | Đây là môi trường chính thức mà API được sử dụng trong việc triển khai các ứng dụng và dịch vụ thực tế.     |
| Sandbox environment | Đây là một môi trường riêng biệt, biệt lập được sử dụng để kiểm tra và thử nghiệm. Nó thường được sử dụng để thử nghiệm những ý tưởng hoặc cách tiếp cận mới mà không ảnh hưởng đến môi trường sản xuất. |
| Cloud environment      | Đây là môi trường sử dụng các dịch vụ đám mây để cung cấp các tính năng và dữ liệu cho các ứng dụng sử dụng API.     |

## 4. API types:
Có nhiều cách để lấy API, bao gồm:
- Sử dụng fetch API trong JavaScript: Đây là cách phổ biến để lấy API trong JavaScript, như đã mô tả trong câu hỏi trước đó.
- Sử dụng thư viện XHR: Bạn có thể sử dụng XMLHttpRequest (XHR) để gửi yêu cầu mạng và lấy dữ liệu từ API. XHR là một API của JavaScript được sử dụng để gửi yêu cầu mạng trước khi fetch được ra đời.
- Sử dụng jQuery: Nếu bạn sử dụng jQuery, bạn có thể sử dụng phương thức $.ajax hoặc $.get để lấy dữ liệu từ API.
- Sử dụng Axios: Axios là một thư viện JavaScript mã nguồn mở dễ dàng sử dụng để gửi yêu cầu mạng và lấy dữ liệu từ API. Nó cung cấp các tính năng tương tự như fetch, nhưng có thêm tính năng và tùy chọn bổ sung.
- Sử dụng thư viện mạng khác: Có nhiều thư viện mạng khác, như Superagent và Request, có thể sử dụng để lấy dữ liệu từ API.
- Lựa chọn của bạn sẽ phụ thuộc vào nhu cầu và yêu cầu của dự án của bạn.