# Callback:

## Callback là gì?
> Callback trong JavaScript là một hàm mà chúng ta cung cấp như một tham số cho một hàm khác, và hàm đó sẽ gọi lại hàm đó khi nó hoàn tất việc thực hiện. Callback được sử dụng để xử lý các tác vụ bất đồng bộ trong JavaScript, trong đó một tác vụ phải hoàn tất trước khi tác vụ khác có thể bắt đầu.
Ví dụ:
```
function printData(data, callback) {
    console.log(data);
    callback();
}

function printFinished() {
    console.log("Finished Printing");
}

printData("My Data", printFinished);
```

Kết quả:
```
My Data
Finished Printing
```
Callback là một kỹ thuật quan trọng trong JavaScript và được sử dụng rộng rãi trong các tác vụ liên quan đến xử lý bất đồng bộ, như lấy dữ liệu từ một API, hoặc thực hiện một tác vụ nặng khi không muốn chậm lại việc chạy của trang web.

Ngoài ra, callback còn được sử dụng trong các tính năng mở rộng của các thư viện JavaScript như jQuery, để xử lý sự kiện khi một hoạt động nhất định hoàn tất.

Tóm lại, callback là một kỹ thuật quan trọng trong JavaScript và để có thể sử dụng nó tốt, bạn cần phải hiểu rõ về cách nó hoạt động và cách sử dụng nó để xử lý các tác vụ bất đồng bộ trong JavaScript.