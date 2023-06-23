# ESLint

## 1. ESLint là gì?
> ESLint là một công cụ kiểm tra lỗi và quy tắc lập trình JavaScript. Nó được sử dụng để tìm và báo cáo các vấn đề trong mã nguồn JavaScript, giúp bạn viết mã chính xác, đồng nhất và dễ đọc hơn.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--dWcPMxnR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hk083ugohb8gcuv8xt8t.png)

ESLint có thể tìm các lỗi cú pháp, các quy tắc không tuân thủ, các vấn đề về kiểu dữ liệu và các vấn đề liên quan đến hiệu suất. Nó cung cấp cho bạn một tập hợp các quy tắc mặc định, nhưng bạn cũng có thể tùy chỉnh các quy tắc hoặc thêm các quy tắc tuỳ chỉnh theo nhu cầu của bạn.

ESLint có thể tích hợp vào quy trình phát triển của bạn thông qua các công cụ như trình biên dịch JavaScript, trình biên dịch code và các trình soạn thảo mã nguồn phổ biến. Khi bạn chạy ESLint, nó sẽ kiểm tra mã nguồn JavaScript của bạn và cung cấp thông báo về các lỗi và cảnh báo tương ứng với các quy tắc đã định nghĩa.

ESLint giúp đảm bảo rằng mã JavaScript của bạn tuân thủ các quy tắc lập trình, giúp nâng cao chất lượng và khả năng duy trì của mã nguồn trong quá trình phát triển phần mềm.

## 2. Rules:
ESLint có một loạt các quy tắc mặc định để kiểm tra mã nguồn JavaScript. Những quy tắc này được thiết kế để phát hiện các vấn đề phổ biến, từ cú pháp sai sót đến các lỗi logic và quy tắc lập trình.

Một số ví dụ về các quy tắc phổ biến trong ESLint bao gồm:
- **no-unused-vars**: Kiểm tra và cảnh báo về các biến không được sử dụng trong mã.
- **no-undef**: Kiểm tra và cảnh báo về việc sử dụng các biến chưa được định nghĩa hoặc khai báo.
- **no-console**: Cảnh báo khi sử dụng các lệnh console.log hoặc các lệnh ghi ra bảng điều khiển trong mã sản phẩm cuối.
- **semi**: Yêu cầu sử dụng dấu chấm phẩy (;) sau mỗi câu lệnh.
- **indent**: Kiểm tra và yêu cầu một phong cách thụt lề cụ thể (ví dụ: dấu tab hoặc dấu cách) cho mã.
- **no-extra-semi**: Cảnh báo khi có dấu chấm phẩy (;) thừa không cần thiết trong mã.

Đây chỉ là một số ví dụ. ESLint cung cấp hơn 200 quy tắc khác nhau mà bạn có thể tùy chỉnh hoặc kích hoạt/tắt theo nhu cầu của bạn. Bạn có thể xem danh sách đầy đủ của các quy tắc ESLint và mô tả chi tiết của chúng trên trang web chính thức của ESLint
