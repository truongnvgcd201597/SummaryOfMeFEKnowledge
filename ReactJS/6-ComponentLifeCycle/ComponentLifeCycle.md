# Component Life Cycle:

## 1. Component Life Cycle là gì?
> Trong ReactJS, "component life cycle" (chu kỳ sống của component) là một khái niệm quan trọng để hiểu cách một component được tạo ra, cập nhật và hủy bỏ trong quá trình thực thi ứng dụng.

Trong ReactJS, các component có các vòng đời (lifecycle) khác nhau, tức là các pha và sự kiện xảy ra từ khi component được tạo ra, render, cập nhật và cuối cùng bị hủy. Các lifecycle methods (phương thức vòng đời) trong ReactJS cho phép bạn thực hiện các hành động cần thiết trong các giai đoạn khác nhau của một component. Dưới đây là các lifecycle methods quan trọng trong ReactJS:

### 1. Mounting (Lắp đặt):
- constructor(): Được gọi khi một component được khởi tạo. Thường được sử dụng để khởi tạo state và bind các phương thức.
static getDerivedStateFromProps(props, state): Được gọi trước khi render và khi props thay đổi. Thường được sử dụng để cập nhật state dựa trên props mới.
- render(): Phương thức bắt buộc, tạo và trả về JSX để hiển thị giao diện của component.
- componentDidMount(): Được gọi sau khi component đã được render lần đầu tiên. Thường được sử dụng để tạo các subscriptions, gọi API, và thực hiện các tác vụ khởi tạo.
### 2. Updating (Cập nhật):
- static getDerivedStateFromProps(props, state): Được gọi trước khi component được cập nhật. Tương tự như trong Mounting phase, nó được sử dụng để cập nhật state dựa trên props mới.
- shouldComponentUpdate(nextProps, nextState): Được gọi trước khi component được cập nhật để quyết định xem component có cần render lại hay không. Thường được sử dụng để tối ưu hóa hiệu suất.
- render(): Tạo và trả về JSX để hiển thị giao diện của component.
- componentDidUpdate(prevProps, prevState): Được gọi sau khi component đã cập nhật. Thường được sử dụng để tương tác với DOM hoặc gọi các API dựa trên sự thay đổi của props hoặc state.
### 3. Unmounting:
- componentWillUnmount(): Được gọi trước khi component bị hủy. Thường được sử dụng để hủy các subscriptions, xóa các timers hoặc tài nguyên không cần thiết.

Ngoài ra, React còn cung cấp các lifecycle methods khác như `shouldComponentUpdate(), getSnapshotBeforeUpdate(), componentDidCatch() và static getDerivedStateFromError(),` cho phép xử lý các trường hợp đặc biệt như xử lý lỗi (error handling) và tạo snapshot trước khi cập nhật.