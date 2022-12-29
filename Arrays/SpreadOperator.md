# Spread Operator là gì?
> Spread operator là một tính năng trong JavaScript cho phép bạn mở rộng một mảng hoặc đối tượng thành các phần tử hoặc thuộc tính riêng biệt. Nó được định nghĩa bằng dấu "..." trước tên của mảng hoặc đối tượng.

## Cách sử dụng trong mảng:
Spread operator có thể được sử dụng để mở rộng một mảng thành các phần tử riêng biệt. Ví dụ:
```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const array = [...array1, ...array2, ...array3];

console.log(array);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Trong ví dụ trên, ba mảng array1, array2, và array3 được khai báo trước. Sau đó, chúng được sử dụng như là spread operator trong khai báo mảng array. Kết quả cuối cùng là một mảng có các phần tử từ các mảng array1, array2, và array3.

Bạn cũng có thể sử dụng spread operator để mở rộng một mảng thành các phần tử có tên khác với tên biến trong spread operator. Để làm điều này, bạn cần sử dụng dấu hai chấm (:) và tên biến sau đó. Ví dụ:
```
const array1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const array2 = [{ d: 4 }, { e: 5 }, { f: 6 }];

const array = [...array1, ...array2];

console.log(array);  // [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }]
```
## Cách sử dụng trong Object
Spread operator cũng có thể được sử dụng để mở rộng một đối tượng thành các thuộc tính riêng biệt. Ví dụ:
```
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { d: 4, e: 5, f: 6 };

const object = { ...object1, ...object2 };

console.log(object);  // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
```
Trong ví dụ trên, hai đối tượng object1 và object2 được khai báo trước. Sau đó, chúng được sử dụng như là spread operator trong khai báo đối tượng object. Kết quả cuối cùng là một đối tượng có các thuộc tính a, b, c, d, e, và f, với giá trị lần lượt là 1, 2, 3, 4, 5, và 6.










