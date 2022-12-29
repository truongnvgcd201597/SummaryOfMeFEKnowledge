# Rest Parameter là gì?

> Rest parameter là một tính năng trong JavaScript cho phép bạn truyền vào một số lượng không xác định các tham số cho một hàm. Nó được định nghĩa bằng dấu "..." trước tên của tham số.

Ví dụ, nếu bạn muốn viết một hàm nhận bất kỳ số lượng tham số nào và tính tổng của chúng, bạn có thể sử dụng rest parameter như sau:

```
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(10, 20, 30));  // 60
```
Để sử dụng rest parameter trong một object destructuring, bạn cần sử dụng cú pháp như sau:
```
const object = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = object;

console.log(a);  // 1
console.log(b);  // 2
console.log(rest);  // { c: 3, d: 4 }
```
Trong ví dụ trên, đối tượng object có các thuộc tính a, b, c, và d. Trong khai báo object destructuring, rest parameter được sử dụng để lấy tất cả các thuộc tính còn lại của đối tượng. Kết quả cuối cùng là hai biến a và b được khởi tạo với giá trị tương ứng là 1 và 2, và một đối tượng rest có các thuộc tính c và d với giá trị lần lượt là 3 và 4.

Bạn cũng có thể sử dụng rest parameter khi khai báo các thuộc tính có tên khác với tên biến trong object destructuring. Để làm điều này, bạn cần sử dụng dấu hai chấm (:) và tên biến sau đó. Ví dụ:
```
const object = { first: 1, second: 2, third: 3, fourth: 4 };

const { first: a, second: b, ...rest: c } = object;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // { third: 3, fourth: 4 }
```
Để sử dụng rest parameter trong một spread operator, bạn cần sử dụng cú pháp như sau:


```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const array = [...array1, ...array2, ...array3];

console.log(array);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Có một số lưu ý khi sử dụng rest parameter:
- Rest parameter chỉ có thể được sử dụng trong hàm hoặc trong object destructuring. Nó không thể được sử dụng trong các khai báo biến khác.
- Rest parameter phải được đặt cuối cùng trong danh sách các tham số của một hàm hoặc trong danh sách các thuộc tính trong object destructuring. - Nếu nó không được đặt cuối cùng, nó sẽ gây ra một lỗi syntax.
- Rest parameter chỉ có thể có một tham số duy nhất. Nếu có nhiều hơn một tham số, nó sẽ gây ra một lỗi syntax.
- Rest parameter không thể được sử dụng trong spread operator khi khai báo một đối tượng. Nếu bạn muốn sử dụng rest parameter để lấy tất cả các thuộc tính còn lại của một đối tượng, bạn cần sử dụng object rest destructuring thay vì spread operator.
Một số ví dụ về cách sử dụng rest parameter không hợp lệ:
```
// Không thể sử dụng rest parameter trong khai báo biến
let x, y, ...z;  // SyntaxError: Rest parameter must be last formal parameter

function sum(x, y, ...z, w) {  // SyntaxError: Rest parameter must be last formal parameter
  // function body
}

const object = { a: 1, b: 2, ...c, d: 3 };  // SyntaxError: Unexpected token ","
```








s