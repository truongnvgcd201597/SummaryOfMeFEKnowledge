# JSON:

## 1. Định nghĩa:
> JSON là viết tắt của "JavaScript Object Notation" (Định dạng đối tượng JavaScript), đây là một định dạng dữ liệu phổ biến được sử dụng để trao đổi dữ liệu giữa các ứng dụng web.

JSON được thiết kế để dễ đọc và viết cho con người, và dễ dàng phân tích và tạo ra cho máy tính. Nó là một định dạng văn bản đơn giản, gồm các cặp giá trị khóa và giá trị, trong đó khóa là một chuỗi và giá trị có thể là một chuỗi, số, đối tượng, mảng, boolean hoặc null.

## 2. Cú pháp:
Để tạo ra một đối tượng JSON, chúng ta bao quanh các cặp tên và giá trị bằng cặp dấu ngoặc nhọn {}. Ví dụ:
```
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
Trong đó, "name", "age", và "city" là các tên thuộc tính, và "John", 30, và "New York" là các giá trị tương ứng của chúng.

Ngoài ra, JSON cũng hỗ trợ cú pháp để định nghĩa các mảng, như sau:
```
{
  "fruits": [
    "Apple",
    "Banana",
    "Orange"
  ]
}
```
Ở đây, "fruits" là tên của mảng, và ["Apple", "Banana", "Orange"] là giá trị của mảng đó.

JSON cũng hỗ trợ các giá trị dữ liệu đơn giản như "string", 123, true, false, và null.

JSON được thiết kế để dễ đọc và dễ hiểu cho con người, và cũng dễ dàng phân tích và tạo ra cho máy tính. Nó là một phần của cú pháp của JavaScript, nhưng nó cũng có thể được sử dụng với nhiều ngôn ngữ lập trình khác.

## 3. Các phương thức:
Trong JavaScript, có hai phương thức JSON cơ bản để chuyển đổi giữa đối tượng JavaScript và định dạng JSON:
### 1. JSON.stringify(): 
Chuyển đổi đối tượng JavaScript thành định dạng JSON. Phương thức này chấp nhận đối tượng JavaScript và trả về một chuỗi JSON tương ứng.
```
const myObj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(myObj);
console.log(myJSON);
```

### 2. JSON.parse():
JSON.parse(): Chuyển đổi chuỗi JSON thành đối tượng JavaScript. Phương thức này chấp nhận chuỗi JSON và trả về một đối tượng JavaScript tương ứng.
```
const myJSON = '{"name":"John","age":30,"city":"New York"}';
const myObj = JSON.parse(myJSON);
console.log(myObj.name);
```