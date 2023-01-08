
# Timer là gì?
> Trong JavaScript, "timer" là một kỹ thuật mà cho phép chúng ta thực hiện một chức năng tại một thời điểm cụ thể. Sử dụng `timer`, bạn có thể trì hoãn việc thực thi code để nó không hoàn thành vào đúng thời điểm một sự kiện được kích hoạt hoặc khi trang được tải.

Ví dụ: Bạn có thể sử dụng bộ hẹn giờ để thay đổi các biểu ngữ quảng cáo trên trang web của mình theo khoảng thời gian đều đặn hoặc hiển thị đồng hồ thời gian thực, v.v.

Trong JavaScript, có hai hàm timer chính là setTimeout và setInterval.
- setTimeout: cho phép bạn chạy một hàm sau một khoảng thời gian nhất định.
- setInterval: cho phép bạn chạy một hàm lặp đi lặp lại sau mỗi khoảng thời gian nhất định.

Bạn có thể sử dụng timer trong JavaScript để làm nhiều việc khác nhau, chẳng hạn như cập nhật giá trị từ một API mỗi phút, hoặc chạy một hàm sau khi người dùng nhấp vào một nút.

Sử dụng bộ hẹn giờ, bạn có thể trì hoãn việc thực thi code để nó không hoàn thành vào đúng thời điểm một sự kiện được kích hoạt hoặc khi trang được tải. Trong JavaScript, có hai hàm timer chính là setTimeout và setInterval.


# setTimeout là gì?
## 1. Định nghĩa:
> setTimeout là một hàm trong JavaScript được sử dụng để thực thi một hàm hoặc đoạn mã được chỉ định chỉ một lần sau một khoảng thời gian nhất định. Một tham số tùy chọn để chỉ định độ trễ, là số mili giây thể hiện lượng thời gian chờ trước khi thực thi hàm (1 giây = 1000 mili giây).

Bạn có thể sử dụng setTimeout khi bạn muốn chạy một hàm sau một khoảng thời gian nhất định, hoặc khi bạn muốn chạy một hàm sau khi một sự kiện nào đó xảy ra. Ví dụ, bạn có thể sử dụng setTimeout để chạy một hàm sau khi người dùng nhấp vào một nút, hoặc sau khi một AJAX request hoàn thành.

src: https://hanoiict.edu.vn/bo-hen-gio-settimeout-va-setinterval-trong-javascript#:~:text=H%C3%A0m%20setTimeout()%20trong%20JavaScript,kho%E1%BA%A3ng%20th%E1%BB%9Di%20gian%20nh%E1%BA%A5t%20%C4%91%E1%BB%8Bnh.&text=%2B%20M%E1%BB%99t%20tham%20s%E1%BB%91%20t%C3%B9y%20ch%E1%BB%8Dn,gi%C3%A2y%20%3D%201000%20mili%20gi%C3%A2y).

## 2. Syntax:
Cú pháp của hàm setTimeout là:
```
setTimeout(function, milliseconds)
```
Trong đó:
- function là hàm sẽ được gọi sau khoảng thời gian đã định trước.
- milliseconds là số milisecond (1 giây bằng 1000 milisecond) mà bạn muốn hàm được gọi sau khi đã định trước.

Ví dụ:
```
setTimeout(function() {
  console.log("Hello");
}, 1000);
```
Trên đây là một ví dụ của hàm setTimeout. Hàm này sẽ in ra chuỗi "Hello" sau 1 giây kể từ khi hàm được gọi.

## 3. Termination:
Để hủy bỏ một hàm đã được thiết lập bằng `setTimeout`, bạn có thể sử dụng hàm `clearTimeout`. Cú pháp của hàm này là:
```
clearTimeout(timeoutId);
```
Trong đó, timeoutId là ID của hàm được trả về bởi hàm setTimeout khi nó được gọi.

Ví dụ:
```
const timeoutId = setTimeout(function() {
  console.log("Hello");
}, 1000);

clearTimeout(timeoutId);
```
Trên đây là một ví dụ của hàm clearTimeout. Hàm setTimeout sẽ được thiết lập, nhưng sẽ không được gọi do bị hủy bỏ bởi hàm clearTimeout.

# setInterval là gì?
## 1. Định nghĩa:
> setInterval là một hàm JavaScript tương tự setTimeout, nhưng để thực thi một hàm hoặc đoạn mã được chỉ định lặp đi lặp lại vào những khoảng thời gian cố định. 

## 2. Syntax:
Cú pháp của setInterval là:
```
setInterval(function, interval);
```
Trong đó:
- function là hàm JavaScript mà bạn muốn thực thi lặp đi lặp lại.
- interval là khoảng thời gian trong miliseconds mà hàm sẽ được thực thi lặp đi lặp lại sau mỗi lần.

Lưu ý rằng, setInterval sẽ tiếp tục chạy mã JavaScript của bạn mỗi khoảng thời gian nhất định, cho đến khi bạn dừng nó bằng cách sử dụng hàm clearInterval.







