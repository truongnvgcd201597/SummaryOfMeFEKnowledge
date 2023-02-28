# XHR
## 1. XML là gì?
> XHR là viết tắt của cụm từ "XMLHttpRequest", là một API của JavaScript được sử dụng để tạo và quản lý các kết nối HTTP giữa trình duyệt web và máy chủ. XHR cho phép trang web tương tác với máy chủ để lấy hoặc gửi dữ liệu mà không cần tải lại trang.

Để sử dụng XHR, ta có thể tạo một đối tượng XHR bằng cách gọi hàm XMLHttpRequest(). Sau đó, ta có thể thiết lập các thuộc tính cho kết nối và gửi yêu cầu đến máy chủ bằng cách sử dụng các phương thức open() và send() của đối tượng XHR. Ta có thể xử lý các phản hồi từ máy chủ bằng cách sử dụng các sự kiện và phương thức của đối tượng XHR.

XHR được sử dụng rộng rãi trong việc lấy dữ liệu từ máy chủ và hiển thị dữ liệu động trên trang web, chẳng hạn như lấy dữ liệu từ một tệp JSON hoặc XML và hiển thị dữ liệu trên trang web.

## 2. Cách thức thực hiện:
#### __Step 1__: Tạo đối tượng XHR mới bằng cách sử dụng hàm XMLHttpRequest().
```
var xhr = new XMLHttpRequest();
```
#### __Step 2__: Thiết lập các tham số của kết nối XHR bằng cách sử dụng phương thức open(). Phương thức này nhận vào hai tham số là phương thức HTTP và đường dẫn đến tài nguyên trên máy chủ.
```
xhr.open('GET', 'https://example.com/data.json');
```
#### __Step 2__: Đăng ký một hàm callback để xử lý phản hồi từ máy chủ bằng cách sử dụng thuộc tính onreadystatechange. Hàm này sẽ được gọi mỗi khi trạng thái của kết nối thay đổi.

```
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // xử lý phản hồi ở đây
  }
};
```

#### __Step 3__: Gửi yêu cầu đến máy chủ bằng cách sử dụng phương thức send(). Đối với các yêu cầu GET, không cần truyền dữ liệu. Tuy nhiên, đối với các yêu cầu POST, bạn có thể truyền dữ liệu bằng tham số truyền vào cho phương thức send().
```
xhr.send();
```

### __Step 4__: Xử lý phản hồi từ máy chủ bằng cách sử dụng các thuộc tính và phương thức của đối tượng XHR. Các thuộc tính và phương thức thường được sử dụng bao gồm:
```
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // xử lý phản hồi ở đây
      console.log(xhr.responseText);
    } else {
      console.error('Đã xảy ra lỗi khi lấy dữ liệu: ' + xhr.status);
    }
  }
};
```

### 3. Các thuộc tính và phương thức của đối tượng XHR:
#### 1. readyState:
> readyState một thuộc tính của đối tượng XMLHttpRequest (XHR), biểu thị trạng thái của kết nối giữa trình duyệt và máy chủ. readyState có 5 giá trị khác nhau:
- 0: Máy khách đã được khởi tạo, nhưng phương thức open() chưa được gọi.
- 1: Phương thức open() đã được gọi, nhưng phương thức send() chưa được gọi.
- 2: Phương thức send() đã được gọi và phản hồi của máy chủ đang được nhận.
- 3: Phản hồi đang được xử lý; XHR đang tải các phần của phản hồi.
- 4: Phản hồi đã được xử lý hoàn toàn và sẵn sàng để sử dụng.

readyState được sử dụng để theo dõi tiến trình của yêu cầu và xác định khi nào kết quả có sẵn để xử lý. Khi readyState đạt giá trị 4, XHR đã hoàn thành yêu cầu và bạn có thể xử lý phản hồi được trả về từ máy chủ.

Trong đối tượng XMLHttpRequest, có một số hằng số được định nghĩa để đại diện cho các trạng thái khác nhau của yêu cầu. Các hằng số này là:

XMLHttpRequest.UNSENT (giá trị 0): đối tượng XMLHttpRequest đã được tạo nhưng phương thức open() chưa được gọi.
XMLHttpRequest.OPENED (giá trị 1): phương thức open() đã được gọi, nhưng phương thức send() chưa được gọi.
XMLHttpRequest.HEADERS_RECEIVED (giá trị 2): phương thức send() đã được gọi và các tiêu đề phản hồi (response headers) đã được nhận.
XMLHttpRequest.LOADING (giá trị 3): phản hồi đang được nhận. Giá trị responseText chứa dữ liệu phản hồi.
XMLHttpRequest.DONE (giá trị 4): phản hồi đã hoàn thành và sẵn sàng xử lý. Giá trị responseText chứa dữ liệu phản hồi.
Để xem giá trị phản hồi tương ứng với trạng thái XMLHttpRequest.DONE, bạn có thể truy cập thuộc tính responseText hoặc responseXML của đối tượng XMLHttpRequest. Giá trị của hai thuộc tính này phụ thuộc vào kiểu phản hồi trả về từ máy chủ. Nếu phản hồi là văn bản, responseText sẽ chứa nội dung của phản hồi. Nếu phản hồi là tài liệu XML, responseXML sẽ chứa đối tượng tài liệu XML.

#### 2. xhr.open():
> xhr.open(method, url, async) là phương thức được sử dụng trong đối tượng XMLHttpRequest để thiết lập các thông số cho yêu cầu. Các tham số truyền vào phương thức open:

- method: Phương thức HTTP được sử dụng cho yêu cầu, ví dụ "GET", "POST", "PUT", "DELETE" và các phương thức khác.
- url: Đường dẫn đến tài nguyên mà yêu cầu sẽ được gửi đến.
- async: Giá trị boolean xác định xem yêu cầu sẽ được xử lý bất đồng bộ (true) hay đồng bộ (false).

```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/api/data', true);
xhr.send();
```

Trong ví dụ trên, phương thức GET được sử dụng và yêu cầu sẽ được gửi đến đường dẫn http://example.com/api/data bất đồng bộ (asynchronously) bằng cách sử dụng giá trị boolean true cho tham số async. Sau khi yêu cầu được khởi tạo, phương thức send() được sử dụng để gửi yêu cầu đến máy chủ.

#### 3. xhr.onload():
> xhr.onload là một sự kiện được kích hoạt trên đối tượng XMLHttpRequest khi yêu cầu được hoàn thành thành công. Sự kiện này được kích hoạt khi phản hồi từ máy chủ được trả về và được hoàn thành mà không có lỗi xảy ra.

Khi sự kiện onload được kích hoạt, ta có thể truy cập đối tượng XMLHttpRequest (thường được đại diện bằng biến xhr) và sử dụng các thuộc tính như responseText hoặc responseXML để xử lý phản hồi từ máy chủ.
```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/api/data', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    // Xử lý phản hồi từ máy chủ
    console.log(xhr.responseText);
  } else {
    console.log('Yêu cầu không thành công.');
  }
};

xhr.send();
```
Trong ví dụ trên, khi sự kiện onload được kích hoạt, ta kiểm tra xem mã trạng thái của yêu cầu có phải là 200 hay không (200 là mã trạng thái OK của HTTP). Nếu đúng, ta sử dụng responseText để xử lý phản hồi từ máy chủ. Nếu mã trạng thái khác 200, ta log ra thông báo lỗi.

#### 4. xhr.send():
> xhr.send() là phương thức của đối tượng XMLHttpRequest, dùng để gửi yêu cầu HTTP đến máy chủ.

Phương thức send() được gọi sau khi XMLHttpRequest đã được thiết lập bằng phương thức open(). Nó cho phép gửi các dữ liệu yêu cầu bao gồm các thông tin của header (nếu có) hoặc phần thân của yêu cầu, nếu yêu cầu đó là một POST request.

Ví dụ, nếu bạn muốn gửi một yêu cầu GET đến một API, bạn có thể sử dụng xhr.open() để thiết lập yêu cầu, sau đó gọi xhr.send() để gửi nó:
```
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/api/data', true);
xhr.send();
```
Trong ví dụ này, đối tượng XMLHttpRequest được tạo bằng cách gọi hàm khởi tạo new XMLHttpRequest(). Sau đó, phương thức open() được gọi để thiết lập yêu cầu GET đến https://example.com/api/data, và cuối cùng xhr.send() được gọi để gửi yêu cầu.







