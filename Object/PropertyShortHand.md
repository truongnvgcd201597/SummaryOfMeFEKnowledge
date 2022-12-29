# Property Shorthand là gì?

>Property shorthand là một cách ngắn gọn để khai báo các thuộc tính trong một đối tượng JavaScript. Để sử dụng property shorthand, bạn cần khai báo một biến có tên giống với tên thuộc tính mà bạn muốn tạo trong đối tượng. Sau đó, bạn có thể sử dụng tên biến đó như là một property trong khai báo của đối tượng, không cần phải sử dụng cặp dấu hai chấm (:) để gán giá trị cho thuộc tính đó.

Ví dụ, thay vì phải viết như sau:
```
const object = {
  a: 1,
  b: 2,
  c: 3
};
```

Bạn có thể sử dụng property shorthand để viết ngắn hơn như sau:
```
const a = 1;
const b = 2;
const c = 3;

const object = { a, b, c };
```

Trong ví dụ trên, property shorthand được sử dụng để tạo ra các thuộc tính a, b, và c trong đối tượng object, và gán giá trị cho chúng từ các biến cùng tên. Điều này giúp viết mã ngắn gọn hơn và dễ đọc hơn.

Bạn cũng có thể sử dụng property shorthand khi khai báo các thuộc tính có giá trị là hàm:
```
const sayHello = () => {
  console.log('Hello');
};

const object = { sayHello };
```
Trong ví dụ trên, hàm sayHello được khai báo trước, và sau đó được sử dụng như là một thuộc tính trong khai báo đối tượng object. Kết quả cuối cùng sẽ là một đối tượng có một thuộc tính sayHello.

Property shorthand cũng có thể được sử dụng khi khai báo các thuộc tính trong một spread operator. Ví dụ:
```
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

const object = { ...object1, ...object2 };

console.log(object);  // { a: 1, b: 2, c: 3, d: 4 }

```
Tong ví dụ trên, hai đối tượng object1 và object2 được khai báo trước. Sau đó, chúng được sử dụng như là spread operator trong khai báo đối tượng object. Kết quả cuối cùng là một đối tượng có các thuộc tính a, b, c, và d, với giá trị lần lượt là 1, 2, 3, và 4.









