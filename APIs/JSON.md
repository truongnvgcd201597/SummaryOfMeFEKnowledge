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

```
const student = { id: 1, name: 'NVT', age: undefined }
JSON.stringify(student);
// '{"id": 1, "name": "NVT" }'
```

```
const list = [null, undefined, NaN];
JSON.stringify(list);
// [null, null, null]
```
### 2. JSON.parse():
JSON.parse(): Chuyển đổi chuỗi JSON thành đối tượng JavaScript. Phương thức này chấp nhận chuỗi JSON và trả về một đối tượng JavaScript tương ứng.
```
const myJSON = '{"name":"John","age":30,"city":"New York"}';
const myObj = JSON.parse(myJSON);
console.log(myObj.name);
```

```
JSON.parse('123'); // 123
JSON.parse('true'); // true
JSON.parse('null'); // null
JSON.parse('{}'); // {}
JSON.parse('[]'); // []
```

```
JSON.parse('0123'); // Syntax Error
JSON.parse('NaN'); // Syntax Error
JSON.parse('Infinity'); // Syntax Error
```

```
// property name must use double quotes
JSON.parse("{ 'id': 123 }"); // Syntax Error
JSON.parse('{ "id": 123 }'); // { id: 123 } it works
```

```
// Not allow trailing commas
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
```

## 5. Những điểm cần lưu ý:
- Định dạng của JSON phải đúng để có thể đọc được dữ liệu. Các lỗi cú pháp sẽ khiến cho JSON không thể đọc được.
- JSON chỉ hỗ trợ một số kiểu dữ liệu cơ bản như object, array, number, string, boolean và null.
- JSON không hỗ trợ các hàm hay đối tượng đặc biệt của JavaScript như Date, Regex, Error...
- Dữ liệu JSON được gửi và nhận bằng cách sử dụng các phương thức như JSON.parse() và JSON.stringify().
- Khi sử dụng JSON.stringify() để chuyển đổi dữ liệu sang chuỗi JSON, ta có thể cấu hình các tùy chọn như sử dụng khoảng trắng, độ sâu tối đa, v.v.
- Nếu ta muốn bảo mật dữ liệu JSON, ta có thể sử dụng kỹ thuật mã hóa dữ liệu trước khi gửi đi và giải mã dữ liệu khi nhận được.
- Khi xử lý JSON trên một trang web, ta nên kiểm tra dữ liệu đầu vào trước khi sử dụng. Nếu dữ liệu không hợp lệ, nó có thể gây ra các lỗ hổng bảo mật như tấn công XSS hoặc tấn công CSRF.

## 6. 