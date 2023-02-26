# HTTP:

## 1. HTTP là gì?:
> HTTP (HyperText Transfer Protocol) là một giao thức truyền tải siêu văn bản được sử dụng để truyền tải dữ liệu giữa các thiết bị mạng trên Internet. HTTP cho phép các ứng dụng web truy cập và truyền tải các tài nguyên trên mạng, chẳng hạn như các trang web, ảnh, video, tệp tin văn bản và dữ liệu đa phương tiện khác.

HTTP hoạt động dựa trên mô hình yêu cầu/ phản hồi (request/response), trong đó các máy khách (client) gửi các yêu cầu (request) đến các máy chủ (server), yêu cầu truy cập tài nguyên cụ thể, và các máy chủ trả lời (response) bằng cách cung cấp tài nguyên được yêu cầu.

HTTP là một phần quan trọng của cơ sở hạ tầng mạng trên Internet và được sử dụng rộng rãi trong việc phát triển ứng dụng web. Hiện nay, phiên bản mới nhất của HTTP là HTTP/3, được phát triển bởi IETF (Internet Engineering Task Force).

## 2. Các thành phần của HTTP:
HTTP bao gồm các thành phần sau:
- Request message (Tin nhắn yêu cầu): Là thông điệp mà client gửi đến server để yêu cầu một tài nguyên cụ thể trên server.
- Response message (Tin nhắn phản hồi): Là thông điệp mà server gửi về client để cung cấp tài nguyên được yêu cầu hoặc thông báo lỗi.
- Uniform Resource Identifier (URI): Định danh địa chỉ tài nguyên trên mạng, bao gồm cả URL (Uniform Resource Locator) và URN (Uniform Resource Name).
- Method (Phương thức): Định nghĩa các phương thức mà client sử dụng để gửi các yêu cầu đến server, bao gồm GET, POST, PUT, DELETE và nhiều phương thức khác.
- Status codes: Là các mã số được server trả về trong tin nhắn phản hồi để báo cho client biết kết quả của yêu cầu của họ, bao gồm các mã như 200 (OK), 404 (Not Found), 500 (Internal Server Error) và nhiều mã khác.
- Headers: Là các thông tin bổ sung được gửi cùng với tin nhắn yêu cầu hoặc phản hồi, cung cấp thông tin về định dạng của tin nhắn, định dạng dữ liệu, thông tin xác thực và nhiều thông tin khác.
- Cookies: Là các thông tin được lưu trữ trên máy khách và được sử dụng để theo dõi thông tin của người dùng trên trình duyệt, cung cấp thông tin về phiên làm việc, dữ liệu đăng nhập và nhiều thông tin khác.

## 3. HTTP URLs:
> URL là viết tắt của "Uniform Resource Locator" (Trình định vị tài nguyên thống nhất), là một chuỗi ký tự định danh địa chỉ trên mạng cho một tài nguyên cụ thể, như một trang web, một tập tin hoặc một ứng dụng web. URL cung cấp thông tin về giao thức được sử dụng để truy cập tài nguyên (ví dụ: HTTP, FTP), địa chỉ máy chủ và đường dẫn đến tài nguyên trên máy chủ. Ví dụ: "https://www.example.com/index.html" là một URL cho trang chủ của trang web "example.com" được truy cập thông qua giao thức HTTPS.

## 4. HTTP Methods:
HTTP Methods, còn được gọi là HTTP Verbs, là các phương thức được sử dụng trong giao thức HTTP để chỉ định các hoạt động sẽ được thực hiện trên các tài nguyên được yêu cầu. Một số phương thức HTTP phổ biến bao gồm:
- GET: Lấy thông tin về tài nguyên được chỉ định.
- POST: Gửi dữ liệu để xử lý trên server. Thường được sử dụng để tạo mới một tài nguyên.
- PUT: Cập nhật hoặc tạo mới tài nguyên với nội dung được chỉ định.
- DELETE: Xóa tài nguyên được chỉ định.
- HEAD: Tương tự như GET, nhưng chỉ trả về thông tin tiêu đề của phản hồi HTTP, không bao gồm nội dung.
- OPTIONS: Trả về các phương thức được hỗ trợ cho tài nguyên được chỉ định.
- PATCH: Cập nhật một phần của tài nguyên được chỉ định.

Các phương thức HTTP khác cũng có thể được sử dụng, tuy nhiên những phương thức này là phổ biến nhất và được sử dụng rộng rãi trong các ứng dụng web.

| Tính năng	 | POST	| PUT/PUSH | PATCH |
|:-----------:|:-----------:|:-----------:|:-----------:|
|Tác vụ |	Tạo mới một tài nguyên |	Tạo hoặc cập nhật tài nguyên |	Cập nhật một phần tài nguyên |
| Thay đổi dữ liệu | Thay đổi toàn bộ dữ liệu của tài nguyên | Thay đổi toàn bộ dữ liệu của tài nguyên | Thay đổi một phần dữ liệu của tài nguyên |
| Thích hợp sử dụng khi | Không biết hoặc không quan tâm đến tài nguyên đã tồn tại | Biết rõ tài nguyên đã tồn tại và cần thay đổi | Biết rõ tài nguyên đã tồn tại và cần cập nhật một phần dữ liệu |
| Phương thức idempotent | Không | Có | Có |
| Response | Trả về mã tài nguyên mới | Trả về mã thành công | Trả về mã thành công |

## 5. HTTP Status Codes:
HTTP Status Codes là mã trả về của các yêu cầu HTTP, được sử dụng để xác định kết quả của yêu cầu đó có thành công hay không và thông báo cho client biết lỗi gì đã xảy ra (nếu có). HTTP Status Codes được trả về bởi server, bao gồm 3 chữ số đầu tiên để chỉ mã hiệu và thông báo tương ứng với mã đó.

HTTP Status Codes được chia thành 5 loại chính:
- Informational (1xx): Đây là các mã trả về chỉ cung cấp thông tin về yêu cầu đang được xử lý. Thông thường, các mã này được sử dụng trong các quá trình xử lý phức tạp và yêu cầu thêm thời gian xử lý.
- Success (2xx): Đây là các mã trả về xác nhận rằng yêu cầu đã được xử lý thành công.
- Redirection (3xx): Đây là các mã trả về cho biết client cần phải tiến hành thêm xử lý để hoàn thành yêu cầu.
- Client Error (4xx): Đây là các mã trả về khi client gửi yêu cầu không hợp lệ, không thể xử lý hoặc không có quyền truy cập.
- Server Error (5xx): Đây là các mã trả về khi server không thể xử lý yêu cầu của client, có lỗi trong quá trình xử lý yêu cầu hoặc server gặp sự cố.

Một số HTTP Status Codes phổ biến bao gồm:
- 200 OK: Yêu cầu thành công.
- 201 Created: Tài nguyên đã được tạo thành công.
- 301 Moved Permanently: Trang đã chuyển vĩnh viễn sang một URL mới.
- 400 Bad Request: Yêu cầu không hợp lệ.
- 401 Unauthorized: Client chưa được xác thực.
- 403 Forbidden: Client không có quyền truy cập tài nguyên.
- 404 Not Found: Không tìm thấy tài nguyên.
- 500 Internal Server Error: Server gặp sự cố trong quá trình xử lý yêu cầu.

## 6. HTTP Headers:
HTTP Headers là các thông tin được truyền trong HTTP request và response, giúp các thành phần trong hệ thống web có thể trao đổi thông tin và hiểu nhau một cách đồng bộ. Các header thông thường gồm:
- General Headers: Chứa các thông tin chung về request/response như date, connection, cache-control, v.v.
- Request Headers: Chứa các thông tin về request, ví dụ như method, URL, cookies, user-agent, v.v.
- Response Headers: Chứa các thông tin về response, ví dụ như content-type, content-length, server, v.v.
- Entity Headers: Chứa các thông tin về nội dung của message, ví dụ như content-type, content-encoding, content-language, v.v.

Các header này đóng vai trò rất quan trọng trong việc xử lý request và response của một trang web, từ đó giúp cho truyền thông giữa client và server diễn ra một cách hiệu quả và đáp ứng được các yêu cầu của người dùng.

## 7. HTTP Cookies:
HTTP Cookies là một công nghệ lưu trữ thông tin trên trình duyệt của người dùng, giúp cho trang web có thể lưu trữ thông tin về người dùng để sử dụng trong các lần truy cập sau. Cookies được tạo ra bởi server và gửi tới trình duyệt của người dùng thông qua header của HTTP response. Trình duyệt sẽ lưu trữ cookies này và gửi chúng trở lại server thông qua header của HTTP request mỗi khi người dùng truy cập vào trang web.

Cookies thường được sử dụng để lưu trữ thông tin đăng nhập, thông tin giỏ hàng, thông tin ngôn ngữ, lịch sử truy cập, v.v. Cookies có thể được thiết lập để có thời gian sống nhất định hoặc vô thời hạn, và có thể bị xóa bởi người dùng hoặc bởi trình duyệt khi hết thời gian sống hoặc khi người dùng xóa cookies.

Tuy nhiên, việc sử dụng cookies cũng có thể gây ra những vấn đề về bảo mật như cookie stealing, cookie poisoning, cookie hijacking, v.v. Do đó, các trang web cần phải chú ý đến vấn đề bảo mật khi sử dụng cookies.

## 8. HTTP Authentication:
HTTP Authentication là quá trình xác thực người dùng truy cập vào tài nguyên trên mạng bằng cách sử dụng thông tin đăng nhập. Nó cho phép một máy chủ bảo vệ tài nguyên của nó bằng cách yêu cầu người dùng cung cấp thông tin xác thực hợp lệ trước khi truy cập vào tài nguyên đó.

Có nhiều loại phương thức xác thực HTTP như:
- Basic Authentication: Sử dụng mã hóa base64 để mã hóa thông tin đăng nhập, tuy nhiên phương thức này không được bảo mật vì thông tin đăng nhập của người dùng được truyền đi một cách không an toàn.
- Digest Authentication: Sử dụng hàm băm để mã hóa thông tin đăng nhập, phương thức này tương đối bảo mật hơn Basic Authentication, tuy nhiên nó vẫn có thể bị tấn công bằng cách sử dụng kỹ thuật mã độc.
- Token-based Authentication: Sử dụng mã thông báo để xác thực người dùng. Phương thức này được coi là tương đối an toàn hơn, bởi vì không yêu cầu người dùng cung cấp thông tin đăng nhập nhưng lại cần cung cấp một mã thông báo hợp lệ để truy cập tài nguyên.
- OAuth Authentication: Phương thức này được sử dụng phổ biến trong các ứng dụng web, cho phép người dùng cấp quyền truy cập tài nguyên của họ cho các ứng dụng bên thứ ba một cách an toàn và bảo mật.

## 9. HTTP Caching:
HTTP Caching là một kỹ thuật tối ưu hóa hiệu suất của giao thức HTTP, giúp giảm thiểu thời gian tải trang và tăng tốc độ truyền tải dữ liệu giữa client và server.

Khi một trình duyệt yêu cầu tài nguyên từ server, server sẽ trả về tài nguyên đó kèm theo các thông tin về bộ nhớ cache của nó, bao gồm một số thông tin như thời gian khi tài nguyên được tạo ra (Last-Modified), định danh tài nguyên (ETag), hoặc các thông tin về kích thước tài nguyên. Trình duyệt sẽ lưu các thông tin này trong bộ nhớ cache của nó.

Khi truy cập lại tài nguyên đó trong tương lai, trình duyệt sẽ kiểm tra xem liệu thông tin trong bộ nhớ cache có giống với thông tin từ server không. Nếu giống nhau, trình duyệt sẽ sử dụng tài nguyên từ bộ nhớ cache thay vì tải lại từ server. Nếu không giống nhau, trình duyệt sẽ tải lại tài nguyên từ server.

Các lợi ích của HTTP Caching bao gồm:
- Giảm thiểu lưu lượng truy cập mạng và giảm thiểu thời gian phản hồi.
- Giảm tải cho server, giúp tăng hiệu suất của server.
- Cải thiện trải nghiệm người dùng và tăng tốc độ tải trang.

Tuy nhiên, khi sử dụng HTTP Caching cần chú ý để đảm bảo rằng tài nguyên truy cập vẫn đang được cập nhật và không bị lỗi. Có thể sử dụng các thẻ meta để điều chỉnh cách trình duyệt lưu cache và sử dụng phiên bản mới nhất của tài nguyên.

## 10. HTTP Security:
HTTP Security là một loạt các biện pháp và kỹ thuật được sử dụng để bảo vệ các ứng dụng web, dữ liệu và người dùng khỏi các cuộc tấn công và đe dọa bảo mật khác. Các biện pháp bảo mật HTTP bao gồm:
- SSL/TLS: Là một giao thức mật mã hóa đường truyền giữa máy khách và máy chủ, giúp ngăn chặn các cuộc tấn công Man-in-the-Middle (MITM), nâng cao tính bảo mật của thông tin truyền tải.
- HTTPS: Sử dụng SSL/TLS để mã hóa các thông tin giao tiếp giữa trình duyệt web và máy chủ, đảm bảo tính bảo mật của thông tin được truyền tải.
- CORS: Cross-Origin Resource Sharing, là một cơ chế bảo mật giúp ngăn chặn việc các tài nguyên của trang web bị truy cập và sử dụng bởi các trang web khác, tăng tính an toàn của ứng dụng web.
- X-XSS-Protection: Cung cấp bảo vệ chống lại cuộc tấn công XSS (Cross-Site Scripting), giúp ngăn chặn việc các kịch bản độc hại được chèn vào trang web và thực thi trên trình duyệt của người dùng.
- X-Frame-Options: Ngăn chặn các cuộc tấn công Clickjacking bằng cách giới hạn việc nhúng trang web trong các khung của các trang web khác.
- Content Security Policy (CSP): Cung cấp một số quy tắc và hạn chế để giảm thiểu các cuộc tấn công như XSS, code injection, clickjacking, giúp ngăn chặn việc các kịch bản độc hại được chèn vào trang web.
- HSTS: HTTP Strict Transport Security, là một cơ chế bảo mật giúp đảm bảo rằng trang web sẽ sử dụng HTTPS để truyền tải dữ liệu, tăng tính bảo mật của ứng dụng web.
- Secure and HTTPOnly Cookies: Giúp ngăn chặn việc đánh cắp cookie của người dùng bằng cách chỉ cho phép truy cập cookie thông qua HTTPS và không cho phép truy cập thông qua mã JavaScript.

s