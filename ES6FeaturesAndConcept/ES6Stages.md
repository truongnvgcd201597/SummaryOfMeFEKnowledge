# ECMAScript Stage:
## ECMAScript là gì?
Theo `Wikipedia`, ECMAScript (hay ES)[1] là một thương hiệu[2] đặc tả ngôn ngữ kịch bản được tiêu chuẩn hóa bởi Ecma International thông qua ECMA-262 và ISO/IEC 16262. Nó được tạo ra để tiêu chuẩn hóa JavaScript, để thúc đẩy nhiều hiện thực độc lập. JavaScript vẫn là hiện thực nổi tiếng nhất của ECMAScript kể từ khi tiêu chuẩn này được xuất bản, với các hiện thực nổi tiếng khác gồm JScript và ActionScript.[3] ECMAScript thường được sử dụng cho kịch bản phía máy khách (client-side scripting) trên World Wide Web, và nó ngày càng được sử dụng nhiều để viết ứng dụng máy chủ và dịch vụ bằng Node.js.

## ECMAScript 2016:
### Include():
Phương thức include() xác định xem một mảng có bao gồm một giá trị nhất định trong số các mục nhập của nó hay không, trả về true hoặc false nếu thích hợp.
```
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true
```

### Exponentiation Operator:
Toán tử lũy thừa (**) trả về kết quả của việc nâng toán hạng đầu tiên lên lũy thừa của toán hạng thứ hai. Nó tương đương với Math.pow, ngoại trừ nó cũng chấp nhận BigInts là toán hạng.
```
console.log(3 ** 4);
// expected output: 81
```
## ECMAScript 2017:
### padStart && padEnd:
Phương thức padStart() đệm chuỗi hiện tại bằng một chuỗi khác (nhiều lần, nếu cần) cho đến khi chuỗi kết quả đạt đến độ dài đã cho. Phần đệm được áp dụng từ đầu chuỗi hiện tại.
```
const str1 = '5';
console.log(str1.padStart(2, '0'));
// expected output: "05"
```
Phương thức padEnd() đệm chuỗi hiện tại bằng một chuỗi đã cho (được lặp lại, nếu cần) để chuỗi kết quả đạt được độ dài nhất định. Phần đệm được áp dụng từ cuối chuỗi hiện tại.
```
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
```
## Object.values():
Phương thức Object.values() trả về một mảng các giá trị thuộc tính có thể liệt kê của một đối tượng nhất định, theo thứ tự như được cung cấp bởi vòng lặp for ... in. 
```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```
## Trailing commas:
Trailing commas hữu ích khi thêm các phần tử, tham số hoặc thuộc tính mới vào mã JavaScript. Nếu bạn muốn thêm một thuộc tính mới, bạn có thể thêm một dòng mới mà không cần sửa đổi dòng cuối cùng trước đó nếu dòng đó đã sử dụng dấu phẩy ở cuối. Điều này giúp kiểm soát phiên bản khác biệt rõ ràng hơn và việc chỉnh sửa mã có thể ít rắc rối hơn.\
Syntax:
```
,
```
Example:
```
var arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```
## ECMAScript 2018:
### Rest parameter
Rest parameter cho phép một hàm chấp nhận một số lượng vô hạn đối số dưới dạng một mảng, cung cấp một cách để biểu diễn các hàm khác nhau trong JavaScript.
```
const [first, second, ...rest] = [1, 2, 3, 4]
// first = 1
// second = 2
```
### Spread operator:
Spread operator cho phép một có thể lặp lại, chẳng hạn như biểu thức mảng hoặc chuỗi được mở rộng ở những nơi mà không hoặc nhiều đối số (đối với lệnh gọi hàm) hoặc các phần tử (đối với ký tự mảng) hoặc một biểu thức đối tượng được mở rộng trong những nơi mà không hoặc nhiều cặp khóa-giá trị (đối với các ký tự đối tượng) được mong đợi.
```
const numberList1 = [1, 2, 3];
const numberList2 = [4, 5, 6]; 
const mergedList = [...numberList1, ...numberList2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
## ECMAScript 2019:
### Array.prototype.flat():
Phương thức flat() tạo một mảng mới với tất cả các phần tử của mảng con được ghép vào nó một cách đệ quy lên đến độ sâu đã chỉ định.
```
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
```
### Array.prototype.flatMap():
```
flatMap((currentValue) => { /* ... */ } )
flatMap((currentValue, index) => { /* ... */ } )
flatMap((currentValue, index, array) => { /* ... */ } )
```
Example:
```
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]
```
### Object.entries():
Phương thức Object.fromEntries() biến đổi danh sách các cặp key-value thành một đối tượng.
```
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```
### Trim start && Trim end:
Phương thức trimStart() loại bỏ khoảng trắng từ đầu chuỗi. trimLeft () là một bí danh của phương thức này.
```
const greeting = '   Hello world!   ';
console.log(greeting.trimStart());
// expected output: "Hello world!   ";
```
Phương thức trimEnd() loại bỏ khoảng trắng khỏi phần cuối của một chuỗi. trimRight () là một bí danh của phương thức này.
```
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd());
// expected output: "   Hello world!";
```
### Object.prototype.toString():
Phương thức toString() trả về một chuỗi đại diện cho đối tượng. Trước đây khi sử dụng toString(), nó sẽ không xóa bỏ các khoảng trắng dư thừa khi chuyển về chuỗi. Và trong cập nhật 2019, nó sẽ giữ nguyên khi chuyển sang chuỗi.

## ECMAScript 2019:
### Nullish coalescing operator (??):
Toán tử kết hợp nullish (??) là một toán tử logic trả về toán hạng bên phải của nó khi toán hạng bên trái của nó là null hoặc undefined, và nếu không trả về toán hạng bên trái của nó.
```
const foo = null ?? 'default string';
console.log(foo);
// output: "default string"
```
Đây có thể được coi là một trường hợp đặc biệt của toán tử logic OR (||), trả về toán hạng bên phải nếu toán hạng bên trái là bất kỳ giá trị sai nào, không chỉ null hoặc không xác định.

### BigInt:
BigInt là một đối tượng bao bọc nguyên thủy được sử dụng để biểu diễn và thao tác các giá trị bigint nguyên thủy - các giá trị này quá lớn để được biểu diễn bằng số nguyên thủy.

### Optional chaining (?.)
Optional chaining hay Safe navigation là một operator thường access một object và trả về các giá trị pointer được nested hoặc undefined/null nếu không tồn tại.
```obj?.prop // optional static property access
obj?.[expr] // optional dynamic property access
arr?.[index] // optional array item access
func?.(args) // optional function or method call
```

```
const student = {
 id: 1,
 address: {
 city: 'HCMC',
 },
 hobbies: ['music'],
 sayHello() {
 console.log('Hello');
 },
}
student.address.city; // 'HCMC'
student.hobbies[0]; // 'music'
student.sayHello(); // 'Hello'
// but what if you're trying to access non-existing props in the chain
student.profile.name;
// TypeError: Cannot read property 'name' of undefined
student.colors[0];
// TypeError: Cannot read property '0' of undefined
student.learnJavascript();
// TypeError: student.learnJavascript is not a function
if (student.profile) {
 console.log(student.profile.name);
}
// Optional chaining
student.profile?.name; // undefined
student.colors?.[0]; // undefined
student.learnJavascript?.(); // undefined
```
## ECMAScript 2021:
### Logical assignment operator:
### Numeric Separators:
Numeric Separators cung cấp cho chúng ta khả năng phân tách hàng nghìn bằng dấu gạch dưới (_) trong các ký tự số.
```
let series = 1_00_00;
```

### String.prototype.replaceAll():
Phương thức ReplaceAll () trả về một chuỗi mới với tất cả các kết quả phù hợp của một mẫu được thay thế bằng một chuỗi thay thế.
```
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
```



