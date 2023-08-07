# NavLink

## 1. Định nghĩa:

> NavLink là một thành phần được cung cấp bởi thư viện react-router-dom trong React Router. Nó là một phiên bản mở rộng của thành phần <Link> và được sử dụng để tạo liên kết (link) cho các đường dẫn (routes) trong ứng dụng React của bạn. Tuy nhiên, NavLink cung cấp các tính năng bổ sung để xác định và cung cấp các phản hồi (feedback) hoặc lớp (class) đặc biệt khi liên kết đang được kích hoạt hoặc khớp với đường dẫn hiện tại.

Các thuộc tính chính của NavLink bao gồm:

- **to**: Đường dẫn đến nơi liên kết sẽ dẫn đến.
- **exact** (optional): Đặt giá trị true để chỉ kích hoạt liên kết khi đường dẫn khớp chính xác với URL hiện tại.
- **activeClassName** (optional): Đặt tên lớp (class) CSS sẽ được áp dụng khi liên kết đang được kích hoạt.
- **isActive** (optional): Một hàm nhận vào các tham số match, `location` và `history` để xác định xem liên kết có nên được kích hoạt hay không.
- **style** (optional): Đặt các thuộc tính CSS sẽ được áp dụng khi liên kết đang được kích hoạt.
- **end** (optional): Đặt giá trị true để chỉ kích hoạt liên kết khi đường dẫn khớp với URL hiện tại và là một phần tử cuối cùng trong cây (tree).

|             Link              |    URL     | isActive |
| :---------------------------: | :--------: | :------: |
|   `<NavLink to="/tasks" />`   |   /tasks   |   true   |
|   `<NavLink to="/tasks" />`   | /tasks/123 |   true   |
| `<NavLink to="/tasks" end />` |   /tasks   |   true   |
| `<NavLink to="/tasks" end />` | /tasks/123 |  false   |

`<NavLink to="/">` là một trường hợp đặc biệt vì mọi URL đều khớp với "/". Để tránh việc khớp với mọi route mặc định, nó hiệu quả bỏ qua thuộc tính "end" và chỉ khớp khi bạn đang ở route gốc.
