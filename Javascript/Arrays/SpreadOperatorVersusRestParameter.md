# Spread Operator và Rest Parameter
> Spread và Rest là hai tính năng của JavaScript mà bạn có thể sử dụng trong các hàm và các biểu thức có chứa các mảng hoặc các đối tượng.

Spread parameter được sử dụng để "trải" các phần tử của một mảng hoặc các thuộc tính của một đối tượng ra thành các tham số riêng biệt trong một hàm hoặc một biểu thức khác. Ví dụ:
```
function myFunction(x, y, z) {
  console.log(x, y, z);
}

const arr = [1, 2, 3];

myFunction(...arr); // Output: 1 2 3
```

Rest parameter, trong khi đó, được sử dụng để nhận tất cả các tham số còn lại của một hàm dưới dạng một mảng. Ví dụ:

```
function myFunction(x, y, ...rest) {
  console.log(x, y, rest);
}

myFunction(1, 2, 3, 4, 5); // Output: 1 2 [3, 4, 5]
```


|               | Rest parameter | Spread operator |
| ------------- |:-------------:| -----------------|
| Cách sử dụng	|    ...rest	 |   ...spread     |
|Chỉ có thể sử dụng trong hàm |	Có |	Không |
|Chỉ có thể có một trong hàm |	Có |	Không |
|Đặt cuối cùng trong danh sách tham số |	Có |	Có |
|Được sử dụng để nhận tham số |	Có |	Không |
|Được sử dụng để trải các phần tử của một mảng hoặc các thuộc tính của một đối tượng |	Không |	Có |
