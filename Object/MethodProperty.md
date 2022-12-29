# Method Property là gì?
> Method property là một tính năng trong JavaScript cho phép bạn định nghĩa các hàm trong một đối tượng. Method property là một cách tiếp cận khác để định nghĩa các hàm trong một đối tượng so với việc sử dụng cú pháp khác nhau, như sử dụng cặp dấu ngoặc nhọn và khai báo function.

Ví dụ, bạn có thể định nghĩa một hàm trong một đối tượng bằng cách sử dụng Method property như sau:
```
const obj = {
  myMode: function(){
  // function body
  },
  method() {
    // function body
  }
};
```
Trong ví dụ trên, method là một Method property của đối tượng obj. Bạn có thể gọi hàm này bằng cách sử dụng cú pháp obj.method().

Method property cũng có thể có các tham số và trả về một giá trị:
```
const obj = {
  add(x, y) {
    return x + y;
  }
};

console.log(obj.add(1, 2)); // Output: 3
```
Method property là một tính năng rất hữu ích khi bạn muốn định nghĩa các hàm trong một đối tượng và sử dụng chúng trong các khối lệnh khác. Nếu bạn có thêm câu hỏi về Method property, hãy đặt câu hỏi cho tôi để tôi có thể giúp bạn hiểu hơn.



