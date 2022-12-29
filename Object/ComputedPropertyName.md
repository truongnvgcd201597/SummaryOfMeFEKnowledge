# Computed Property Name là gì?
> Computed Property Name là một tính năng trong JavaScript cho phép bạn xác định tên của một thuộc tính trong một đối tượng bằng cách sử dụng biểu thức. Điều này có nghĩa là bạn có thể tính toán giá trị của tên thuộc tính bằng cách sử dụng biểu thức, và sử dụng giá trị đó như tên thuộc tính.

Ví dụ, bạn có thể sử dụng Computed Property Name để tạo ra một đối tượng với các thuộc tính có tên là các ký tự từ a đến z:

```
const obj = {
  [`a`]: 1,
  [`b`]: 2,
  [`c`]: 3,
  // ...
  [`z`]: 26
};
```

Hoặc bạn có thể sử dụng biểu thức để tính toán tên thuộc tính:
```
const variable = 'name';
const obj = {
  [variable]: 'John Doe'
};
```
Trong ví dụ trên, thuộc tính name của đối tượng obj sẽ có giá trị là 'John Doe'.

Computed Property Name là một tính năng rất hữu ích khi bạn cần tạo ra các đối tượng với các thuộc tính có tên được tính toán theo cách nào đó. Nếu bạn có thêm câu hỏi về Computed Property Name, hãy đặt câu hỏi cho tôi để tôi có thể giúp bạn hiểu hơn.
