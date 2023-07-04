# ComponentWillUnMount:

## 1. ComponentWillUnMount là gì?

> componentWillUnmount là một trong các phương thức lifecycle trong React. Nó được gọi khi component sẽ bị xóa khỏi DOM và bị hủy bỏ.

- Clean setTimout, setInterval.
- Huỷ gọi API, subscription, event listener được tạo ra trong componentDidMount.
- Không nên setState trong componentWillUnmount vì component sẽ không được re-render.

Phương thức componentWillUnmount được sử dụng để thực hiện các công việc dọn dẹp hoặc huỷ bỏ các tài nguyên, đăng ký sự kiện, hoặc các tác vụ khác cần được thực hiện trước khi component bị xóa.

Để sử dụng componentWillUnmount, bạn cần định nghĩa nó trong class component của bạn như sau:
