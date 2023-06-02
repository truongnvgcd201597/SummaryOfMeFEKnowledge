# useEffect():
## 1. Side effects là gì?
> Side effects là các tác vụ phụ xảy ra trong quá trình thực hiện một hàm. Các tác vụ phụ có thể bao gồm việc gọi API, thay đổi DOM, đăng ký/diễn đàn sự kiện, và các hoạt động tương tác khác với môi trường bên ngoài.

Trong ReactJS, có hai loại side effect chính:

- Side effect đơn lẻ (Single Side Effect): Đây là các side effect không phụ thuộc vào bất kỳ sự thay đổi nào và thường được thực thi mỗi khi component được render lại. Các ví dụ về side effect đơn lẻ bao gồm thay đổi tiêu đề trang, gọi API để lấy dữ liệu ban đầu, hoặc đăng ký sự kiện.
- Side effect phụ thuộc (Dependency Side Effect): Đây là các side effect phụ thuộc vào các giá trị hoặc props thay đổi. Các side effect này chỉ được thực thi khi các giá trị hoặc props được chỉ định thay đổi. Ví dụ, khi giá trị của một biến thay đổi, bạn có thể muốn gọi một API để cập nhật dữ liệu mới.

React Hook useEffect được sử dụng để xử lý cả hai loại side effect này trong functional components.

## 2. useEffect là gì?
> useEffect là một React Hook được sử dụng để thực hiện các tác vụ phụ (side effects) trong functional components của React. Các tác vụ phụ có thể bao gồm việc gọi API, thay đổi DOM, đăng ký/diễn đàn sự kiện, và các hoạt động tương tác khác với môi trường bên ngoài.

Cú pháp sử dụng useEffect như sau:
```
 function useEffect(callback, [dependency])
```
```
useEffect(() => {
  // Logic xử lý tác vụ phụ 

  return () => {
    // Logic xử lý khi component unmount hoặc khi dependency thay đổi
  };
}, [dependency]);
```

Trong đó:

- Hàm callback đầu tiên là nơi bạn thực hiện các tác vụ phụ. Nó sẽ được gọi sau mỗi lần component render.
- Hàm callback thứ hai (optional) là nơi bạn xử lý việc "cleanup" khi component unmount hoặc khi dependency thay đổi. Nếu không cần thiết, bạn có thể bỏ qua phần này.
- Mảng dependency (optional) chứa các giá trị mà useEffect sẽ theo dõi. Khi một trong các giá trị trong dependency thay đổi, hàm callback đầu tiên sẽ được gọi lại. Nếu không cung cấp dependency, hàm callback sẽ được gọi sau mỗi lần component render.

Ví dụ về việc sử dụng useEffect để gọi API và cập nhật state:
```
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(result => {
        // Cập nhật state với dữ liệu mới
        setData(result);
      });
  }, []);

  return (
    <div>
      {/* Hiển thị dữ liệu */}
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
```
Trong ví dụ trên, useEffect được sử dụng để gọi API và cập nhật state data khi component được render lần đầu tiên (do mảng dependency rỗng []). Khi dữ liệu được nhận về từ API, state data sẽ được cập nhật và giao diện sẽ được render lại.

## 3. Clean up:
> Trong ReactJS, clean up (dọn dẹp) là quá trình loại bỏ các tài nguyên không cần thiết, hủy các kết nối hoặc xóa các tác vụ đã được thiết lập trước đó khi một component bị unmount hoặc thay đổi.

Clean up được thực hiện trong các lifecycle methods như componentWillUnmount hoặc trong hooks như useEffect thông qua việc trả về một hàm từ callback. Khi component bị unmount hoặc dependency trong useEffect thay đổi, hàm clean up sẽ được gọi để dọn dẹp và loại bỏ các tài nguyên không cần thiết.

Ví dụ, trong hooks useEffect, bạn có thể trả về một hàm từ callback để thực hiện clean up:
```
useEffect(() => {
  // Một số logic và tác vụ được thiết lập

  return () => {
    // Clean up, hủy bỏ kết nối, xóa tài nguyên, ...
  };
}, [dependency]);
```
Trong ví dụ trên, hàm clean up được trả về từ callback sẽ được gọi khi component bị unmount hoặc khi dependency thay đổi. Bạn có thể sử dụng clean up để hủy bỏ kết nối với API, dừng các interval hoặc timeout, xóa các listener sự kiện, hoặc giải phóng bộ nhớ và tài nguyên khác.

Quá trình clean up là quan trọng để đảm bảo rằng các tài nguyên không cần thiết được giải phóng và tránh lỗi bộ nhớ hoặc rò rỉ tài nguyên trong ứng dụng ReactJS.