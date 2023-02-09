# Class

## Class là gì?
> Trong lập trình hướng đối tượng (OOP) trong JavaScript, một class là một kế hoạch hoặc mẫu cho một đối tượng. Nó mô tả các thuộc tính và phương thức mà một đối tượng cụ thể sẽ có, nhưng không thể thực sự tạo ra một đối tượng.

Để tạo một đối tượng, bạn sử dụng một lớp để tạo ra một đối tượng cụ thể bằng cách gọi hàm constructor của lớp. Hàm constructor của lớp sẽ chứa các thuộc tính và phương thức mà đối tượng sẽ sử dụng.

Ví dụ, bạn có thể tạo ra một lớp "Person" mô tả một đối tượng "Person" với các thuộc tính như tên, tuổi và địa chỉ, và phương thức như in thông tin cá nhân. Sau đó, bạn có thể tạo ra một đối tượng cụ thể của lớp "Person" với thông tin cụ thể cho tên, tuổi và địa chỉ cụ thể.

Classes là một công cụ rất hữu ích trong JavaScript, giúp bạn tạo ra các đối tượng mẫu và quản lý tính toàn vẹn và tính bảo mật của dữ liệu. Nó cung cấp một cách dễ dàng để tạo ra nhiều đối tượng cùng loại với các thuộc tính và phương thức giống nhau, và giúp bạn quản lý các đối tượng dễ dàng hơn.

Ví dụ, nếu bạn cần tạo ra 100 đối tượng "Person" với các thuộc tính khác nhau, bạn chỉ cần tạo ra một lớp "Person" và tạo ra 100 đối tượng từ lớp đó.

Trong JavaScript, bạn có thể sử dụng cả class và constructor function để tạo ra các lớp và đối tượng. Tuy nhiên, class cung cấp một cấu trúc rõ ràng và dễ đọc hơn so với constructor function, và cung cấp một cách dễ dàng để kế thừa và mở rộng các lớp.

## Ưu & nhược điểm của Class?
Các ưu điểm của sử dụng class trong JavaScript:
- Cấu trúc rõ ràng: Class cung cấp một cấu trúc rõ ràng và dễ đọc hơn so với constructor function, giúp bạn dễ dàng quản lý và tìm kiếm lỗi trong code.
- Dễ dàng kế thừa: Class cho phép bạn kế thừa các thuộc tính và phương thức từ một lớp cha, giúp bạn viết mã đơn giản hơn và giảm số lượng code trùng lặp.
- Tái sử dụng mã: Class giúp bạn tái sử dụng mã một cách dễ dàng, vì bạn có thể tạo ra nhiều đối tượng từ cùng một lớp.
Các nhược điểm của sử dụng class trong JavaScript:
- Tốc độ chậm: Class có thể gây ra tốc độ chậm hơn so với constructor function, vì nó phải tạo ra một prototype chain.
- Phức tạp hơn: Class có thể phức tạp hơn so với constructor function, vì nó cần phải sử dụng các từ khóa như "extends" và "super".
- Ít tính linh hoạt: Class có ít tính linh hoạt hơn so với constructor function, vì nó chỉ cho phép bạn tạo ra các đối tượng từ một lớp cụ thể.
- Không hỗ trợ multi-inheritance: Trong JavaScript, class chỉ hỗ trợ kế thừa từ một lớp cha duy nhất, nghĩa là nó không hỗ trợ multi-inheritance. Điều này có thể giảm sức mạnh của class trong một số trường hợp.
- Không hỗ trợ mixins: Mixins là một tính năng cho phép bạn kế thừa từ nhiều lớp khác nhau, và không hỗ trợ trong class trong JavaScript.

Tuy nhiên, để chọn sử dụng class hay constructor function phụ thuộc vào yêu cầu và mục đích của bạn. Nếu bạn muốn tạo ra một cấu trúc rõ ràng và dễ quản lý, thì class là một lựa chọn tốt. Nếu bạn muốn tạo ra một đối tượng đơn giản và nhanh chóng, thì constructor function là một lựa chọn tốt hơn.






