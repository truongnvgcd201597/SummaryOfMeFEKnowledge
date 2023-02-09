# Fetch

## 1. Fetch là gì?
> fetch là một API của JavaScript được sử dụng để gửi yêu cầu mạng (network requests) tới một URL và trả về dữ liệu từ đó. Nó cho phép bạn gửi các yêu cầu HTTP (như GET, POST, PUT, DELETE) và nhận dữ liệu từ một API hoặc trang web.

Ví dụ, bạn có thể sử dụng fetch để lấy dữ liệu từ một API như sau:
```
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```
Fetch cung cấp một cách dễ dàng để xử lý yêu cầu mạng và trả về dữ liệu dễ dàng để sử dụng trong JavaScript.

## 2. Ưu & nhược điểm của Fetch?
Ưu điểm của fetch API:
- Dễ sử dụng: fetch API là rất dễ sử dụng, đặc biệt so với các thư viện mạng khác và XMLHttpRequest (XHR).
- Tương thích trình duyệt: fetch API được hỗ trợ trên hầu hết các trình duyệt hiện đại, bao gồm cả trình duyệt di động.
- Tính năng bổ sung: fetch API cung cấp một số tính năng bổ sung, như việc có thể gửi dữ liệu và xác thực, trong khi vẫn giữ đơn giản.
- Đơn giản hóa việc xử lý lỗi: fetch API giúp đơn giản hóa việc xử lý lỗi bằng cách sử dụng các Promise và các lỗi có thể xảy ra trong quá trình gửi yêu cầu mạng.

Nhược điểm của fetch API:
- Đòi hỏi kiến thức về Promises: fetch API sử dụng Promises để xử lý các phản hồi mạng, vì vậy bạn cần phải có kiến thức về Promises trước khi sử dụng fetch.
- Tùy chọn nhận dữ liệu hạn chế: fetch API chỉ hỗ trợ một số tùy chọn nhận dữ liệu, nhưng không hỗ trợ một số tùy chọn nhận dữ liệu mạnh mẽ như các thư viện mạng khác.
- Chưa hỗ trợ tốt cho việc gửi dữ liệu đồng bộ: fetch API chưa hỗ trợ tốt cho việc gửi dữ liệu đồng bộ, vì vậy bạn cần phải sử dụng các thư viện mạng khác hoặc viết mã tự động để giải quyết vấn đề này.


# Axios

## 1. Định nghĩa:
> Axios là một thư viện JavaScript dùng để gửi yêu cầu HTTP tới API, nó cho phép bạn gửi yêu cầu HTTP dễ dàng, tạo và quản lý các yêu cầu HTTP đồng bộ hoặc bất đồng bộ, xử lý tốt kết quả trả về, và giải quyết một số vấn đề liên quan đến mạng, bao gồm tự động convert dữ liệu JSON. Axios cung cấp các tính năng tương đồng với fetch, nhưng có thêm một số tính năng mở rộng và được hỗ trợ rộng rãi hơn trong một số môi trường.

## 2. Cú pháp: 
Dưới đây là một ví dụ về cách sử dụng Axios để gửi yêu cầu GET đến API:
```
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
Trong ví dụ trên, chúng ta import thư viện Axios và sau đó gọi hàm get của Axios với địa chỉ URL của API mà chúng ta muốn gửi yêu cầu đến. Nếu yêu cầu thành công, kết quả trả về sẽ được truyền vào hàm then và được in ra console. Nếu có lỗi xảy ra, nó sẽ được truyền vào hàm catch và được in ra console.
Bạn cũng có thể gửi yêu cầu POST hoặc PUT bằng cách sử dụng các hàm post hoặc put tương tự như trên.

## 3. Cách sử dụng:
Cách sử dụng Axios rất đơn giản. Bạn có thể sử dụng nó để gửi yêu cầu HTTP (GET, POST, PUT, DELETE, ...) tới một API hoặc một URL để lấy dữ liệu hoặc gửi dữ liệu.

Để sử dụng Axios, bạn cần phải cài đặt nó bằng cách sử dụng npm:
```
npm install axios
```
Sau khi cài đặt, bạn có thể import Axios vào trong tệp JavaScript của bạn bằng cách sử dụng cú pháp sau:
```
import axios from 'axios';
```
Sau đó, bạn có thể sử dụng Axios để gửi yêu cầu HTTP như sau:
```
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
Trong ví dụ trên, chúng ta gửi yêu cầu GET tới URL https://api.example.com/data và khi có phản hồi từ API, nó sẽ được xử lý bởi hàm then. Nếu có lỗi xảy ra, nó sẽ được xử lý bởi hàm catch.

Bạn cũng có thể gửi yêu cầu POST hoặc PUT bằng cách sử dụng các hàm post hoặc put tương tự như trên và truyền tham số dữ liệu cần gửi kèm theo yêu cầu.





