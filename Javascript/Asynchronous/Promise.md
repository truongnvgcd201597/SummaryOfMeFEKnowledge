# Promise:
## Promise là gì?
> Promise là một đối tượng trong JavaScript, nó cho phép chúng ta thực hiện một tác vụ bất đồng bộ và xử lý kết quả của tác vụ đó sau khi hoàn tất. Promise là một cách tốt hơn so với callback để xử lý các tác vụ bất đồng bộ, vì nó cho phép chúng ta theo dõi trạng thái của một tác vụ và xử lý kết quả của nó một cách dễ dàng hơn.

Một Promise có thể trong một trong ba trạng thái:
- Pending: Trạng thái ban đầu của một Promise, chỉ khi tác vụ bất đồng bộ hoàn tất hoặc bị lỗi mới nó chuyển sang trạng thái khác.
- Fulfilled: Trạng thái khi tác vụ bất đồng bộ hoàn tất thành công và đã trả về kết quả.
- Rejected: Trạng thái khi tác vụ bất đồng bộ bị lỗi và không thể hoàn tất.

Ví dụ:
```
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The data has arrived!");
    }, 1000);
});

myPromise.then(data => {
    console.log(data);
});
```

Kết quả:
```
The data has arrived!
```
Trong ví dụ trên, chúng ta tạo ra một Promise với một tác vụ bất đồng bộ đơn giản là chờ một khoảng thời gian. Sau khi tác vụ đồng bộ hoàn tất, chúng ta có thể sử dụng phương thức then để xử lý kết quả của tác vụ. Phương thức then nhận vào một hàm xử lý với kết quả trả về bởi tác vụ bất đồng bộ. Promise còn cung cấp các phương thức khác như catch để xử lý lỗi và finally để xử lý hoàn tất tác vụ, dù tác vụ hoàn tất thành công hay bị lỗi.

## Question:
### 1. Có phải resolve hoặc reject được truyền gì thì promise sẽ hiển thị kết quả tương tự?
Đúng, resolve hoặc reject được truyền vào Promise sẽ quyết định trạng thái hoàn tất của tác vụ bất đồng bộ. Nếu tác vụ hoàn tất thành công, phương thức resolve sẽ được gọi với kết quả của tác vụ. Ngược lại, nếu tác vụ gặp lỗi, phương thức reject sẽ được gọi với nội dung lỗi. Kết quả được truyền vào resolve hoặc reject sẽ được truyền đến phương thức then hoặc catch để xử lý.

### 2. Sự khác biệt giữa Promise và Callback?
- Callback là một hàm được truyền vào một hàm khác để xử lý khi một tác vụ hoàn tất. Callback cung cấp một cách để chờ đợi một tác vụ bất đồng bộ hoàn tất và sau đó xử lý kết quả của nó. Tuy nhiên, việc sử dụng quá nhiều callback có thể gây khó khăn trong việc quản lý và debug mã lệnh.
- Promise là một đối tượng đại diện cho một tác vụ bất đồng bộ trong tương lai. Nó cho phép bạn xử lý kết quả của một tác vụ bất đồng bộ mà không cần phải chờ đợi hoặc sử dụng quá nhiều callback. Bạn có thể xử lý kết quả của một Promise bằng cách sử dụng phương thức then hoặc catch.

|   | Promise |	Callback |
|:--:|:------:|:--------:|
| Xử lý tác vụ bất đồng bộ |	Có	| Có |
| Cấu trúc |	Có một cấu trúc rõ ràng với then và catch	| Không có cấu trúc rõ ràng |
| Chaining |	Dễ dàng kết nối nhiều tác vụ bất đồng bộ	| Khó khăn hơn trong việc kết nối nhiều tác vụ bất đồng bộ |
| Debugging	| Dễ dàng hơn trong việc debug và quản lý lỗi	| Khó khăn hơn trong việc debug và quản lý lỗi |





