# Browser overview

## 1. Browser là gì:
> Browser hay trình duyệt là một phần mềm trên máy tính hoặc điện thoại di động mà bạn có thể sử dụng để truy cập và xem các trang web trên internet. Trình duyệt là một công cụ quan trọng cho việc truy cập và trao đổi thông tin trên mạng, và có nhiều loại trình duyệt khác nhau như Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, v.v. Mỗi trình duyệt có những tính năng khác nhau và có thể sử dụng trên các hệ điều hành khác nhau.

|               | Internet    | Extranet  | Intranet |
| ------------- |:-------------:|:-------:|----------| 
|    Định nghĩa | Mạng lưới toàn cầu  | Mạng lưới riêng  | Mạng lưới nội bộ          |
|    Truy cập | Công cộng  | Có thể hạn chế  | Chỉ có thể truy cập bên trong công ty hoặc tổ chức      |
|    Mục đích    | Truy cập và trao đổi thông tin với cộng đồng toàn cầu	  |   Kết nối các nhà cung cấp, khách hàng và các đối tác với nhau	      | Trao đổi thông tin và tài nguyên giữa các nhân viên trong công ty hoặc tổ chức

## 2. Cross browser testing:
> Cross browser testing là quá trình kiểm tra một trang web hoặc ứng dụng trên nhiều trình duyệt khác nhau để đảm bảo rằng nó hoạt động tốt và hiển thị đúng trên mọi trình duyệt. Cross browser testing là một quá trình quan trọng trong quá trình phát triển phần mềm, bởi vì khách hàng có thể sử dụng nhiều loại trình duyệt khác nhau để truy cập vào một trang web hoặc ứng dụng, và bạn muốn đảm bảo rằng nó hoạt động tốt trên tất cả các trình duyệt đó.

Để thực hiện cross browser testing, bạn có thể sử dụng các công cụ hỗ trợ như `BrowserStack` hoặc `Sauce Labs` để kiểm tra trang web của bạn trên nhiều trình duyệt khác nhau và hệ điều hành khác nhau. Bạn cũng có thể thực hiện cross browser testing bằng tay bằng cách sử dụng các máy ảo hoặc các máy tính thực tế với các trình duyệt khác nhau để kiểm tra trang web của bạn.

## 3. Vendor prefix:
> Vendor prefix là một loại tiền tố được thêm vào trước tên một thuộc tính hoặc từ khóa CSS để chỉ rõ rằng thuộc tính hoặc từ khóa đó được hỗ trợ bởi một công ty cụ thể. Vendor prefix thường được sử dụng cho các thuộc tính hoặc từ khóa CSS mới hoặc đang được phát triển, và chúng thường chỉ được hỗ trợ trên một số trình duyệt cụ thể.

Vendor prefix là một loại tiền tố được thêm vào trước tên một thuộc tính hoặc từ khóa CSS để chỉ rõ rằng thuộc tính hoặc từ khóa đó được hỗ trợ bởi một công ty cụ thể. Vendor prefix thường được sử dụng cho các thuộc tính hoặc từ khóa CSS mới hoặc đang được phát triển, và chúng thường chỉ được hỗ trợ trên một số trình duyệt cụ thể.

| Vendor prefix  | Right columns |
| ------------- |:-------------:|
| -webkit-     | Google Chrome, Safari     |
| -moz-	      | Mozilla Firefox     |
| -ms-	     | Internet Explorer     |
| -o-      | Opera    |

**Lưu ý:** Các vendor prefix có thể bị thay đổi hoặc bị loại bỏ trong tương lai, vì vậy bạn nên kiểm tra các tài liệu cập nhật để biết thêm thông tin về các vendor prefix mới hoặc đang được sử dụng.

Để sử dụng vendor prefix trong mã CSS của bạn, bạn có thể thêm tiền tố vendor trước tên thuộc tính hoặc từ khóa CSS mà bạn muốn sử dụng. Ví dụ:

```
/* Sử dụng vendor prefix -webkit- trước tên thuộc tính transform */
-webkit-transform: rotate(45deg);
```

## 4. Global Object:
> Trong JavaScript, global object là một đối tượng đặc biệt mà các biến và hàm được khai báo trong phạm vi toàn cục (global scope) được lưu trữ. Global object cũng có nhiều thuộc tính và phương thức mà có thể được truy cập trong phạm vi toàn cục.

Trong trình duyệt web, global object là đối tượng window. Bạn có thể truy cập các thuộc tính và phương thức của global object bằng cách sử dụng tên của chúng trực tiếp, không cần khai báo biến hoặc









