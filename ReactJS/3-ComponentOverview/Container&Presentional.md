# Container & Presentional Component:

Trong kiến trúc React, "Container" và "Presentational" là hai khái niệm để phân chia và tổ chức các thành phần trong ứng dụng.

## 1. Container Components (Các thành phần chứa):
- Container components chịu trách nhiệm về logic và dữ liệu.
- Chúng có thể chứa các thành phần UI khác, bao gồm các thành phần hiển thị (presentational components) và các thành phần chứa khác.
Thường là các class components.
- Trực tiếp tương tác với các API, dữ liệu và trạng thái ứng dụng.
- Xử lý logic nghiệp vụ, gọi các hàm xử lý dữ liệu, quản lý trạng thái và truyền dữ liệu xuống cho các thành phần hiển thị.
## 2. Presentational Components (Các thành phần hiển thị):
- Presentational components tập trung vào việc hiển thị giao diện người dùng.
- Chúng nhận dữ liệu từ các container component thông qua props và hiển thị nội dung.
- Thường là các function components.
- Không quan tâm đến dữ liệu hoặc trạng thái ứng dụng và không có logic phức tạp.
- Tập trung vào việc render giao diện, tạo ra các thành phần UI, xử lý sự kiện và truyền ngược dữ liệu lên các container component.
- Lợi ích của phân chia này là cải thiện sự tách biệt giữa logic và giao diện trong ứng dụng React. Điều này giúp dễ dàng quản lý, tái sử dụng và kiểm thử các thành phần.

Cách phân chia Container và Presentational components không phải luôn cứng nhắc và có thể được điều chỉnh tùy theo yêu cầu cụ thể của ứng dụng. Một cách thường được sử dụng để tổ chức các thành phần là sử dụng mô hình "Container and Presentational" (CPS - Container-Presentational-Separation).