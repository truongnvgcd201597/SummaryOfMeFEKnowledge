# Object Literals:

## Định nghĩa:
> Object literals là một cách để tạo một đối tượng trong JavaScript. Đối tượng được tạo bằng cách sử dụng một cặp khóa-giá trị đặt trong dấu ngoặc nhọn {}. Mỗi cặp khóa-giá trị trong đối tượng là một thuộc tính của đối tượng.

Ví dụ:
```
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA'
  }
};
```

Trong ví dụ trên, person là một đối tượng có ba thuộc tính: name, age, và address. Thuộc tính address là một đối tượng con có ba thuộc tính khác.

## Ưu & nhược điểm của Object literals?
Ưu điểm:
- Định nghĩa đối tượng dễ dàng: Object literals là một cách để định nghĩa đối tượng một cách nhanh chóng và dễ dàng, với cú pháp đơn giản và dễ hiểu.
- Sử dụng nhanh: Object literals có thể được sử dụng nhanh chóng và dễ dàng để tạo một đối tượng với một số thuộc tính.
- Dễ mở rộng: Object literals có thể dễ dàng mở rộng bằng cách thêm thuộc tính hoặc phương thức vào đối tượng đã tồn tại.
Nhược điểm:
- Không có sự tổ chức tốt: Object literals không cung cấp bất kỳ sự tổ chức hoặc hệ thống cho việc quản lý thuộc tính và phương thức của đối tượng.
- Không thể dùng lại: Object literals không thể dùng lại cho nhiều đối tượng khác nhau, do đó nếu cần tạo nhiều đối tượng cùng kiểu, bạn phải viết lại cấu trúc cho từng đối tượng.
Không có kiểm soát truy cập: Object literals không cung cấp bất kỳ kiểm soát truy cập nào cho thuộc tính và phương thức của đối tượng, nên tất cả các thuộc tính và phương thức của đối tượng đều có thể truy cập và sửa đổi bởi bất kỳ ai có truy cập đến đối tượng đó. Điều này có thể gây ra các vấn đề về bảo mật và tính toàn vẹn của dữ liệu.
- Không có hỗ trợ cho việc xử lý ngoại lệ: Object literals không cung cấp bất kỳ hỗ trợ nào cho việc xử lý ngoại lệ hoặc lỗi, vì vậy cần phải thêm mã riêng để xử lý những trường hợp ngoại lệ có thể xảy ra.







