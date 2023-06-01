# Phân biệt giữa state và props trong ReactJS:
Trong ReactJS, state và props là hai khái niệm quan trọng để quản lý và truyền dữ liệu trong các component. Dưới đây là phân biệt giữa state và props:

## 1.State:
- Được quản lý trong component: State là một trạng thái (dữ liệu) của component được quản lý và duy trì bên trong component đó.
- Thay đổi được: State có thể thay đổi trong quá trình thực thi ứng dụng bằng cách sử dụng phương thức setState().
- Có hiệu lực trong component đó: State chỉ có tác dụng và ánh xạ dữ liệu trong phạm vi của component chứa nó.
- Thường được khởi tạo trong constructor hoặc bằng useState() hook trong functional component.
## 2. Props:
- Được truyền từ component cha: Props (viết tắt của "properties") là các giá trị dữ liệu được truyền từ component cha (gốc) đến component con (con).
- Bất biến (immutable): Props không thể thay đổi trong component con. Nó chỉ là giá trị chỉ đọc và không được phép thay đổi.
- Cung cấp dữ liệu cho component con: Props được sử dụng để truyền dữ liệu từ component cha xuống component con, cho phép các component con sử dụng dữ liệu và hiển thị giao diện phù hợp.
- Được khai báo trong component cha và truyền xuống component con thông qua các thuộc tính (attributes) trong JSX.

Tóm lại, state là trạng thái (dữ liệu) nội bộ của một component và được quản lý bởi component đó, trong khi props là các giá trị dữ liệu được truyền từ component cha xuống component con. State thay đổi trong component, trong khi props là bất biến và không thể thay đổi trong component con.