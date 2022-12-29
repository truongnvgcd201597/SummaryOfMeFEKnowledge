## 1. Object là gì?
>Object là một khái niệm trừu tượng được sử dụng để biểu thị một đối tượng (cụ thể). Trong đó, các thuộc tính dùng để mô tả các đặc điểm, tính chất của đối tượng.

Mọi thứ trong JS ngoài trừ `number`, `string`, `booleans` hay `undefined` đều là Object. Array, function, object chính là object.

Còn nói về mặt thuật ngữ, Object là tập hợp các khóa có thể thay đổi được. Và thuật ngữ **thay đổi** có thể thực hiện bằng cách "**adding**' và '**removing**'.

Object chứa tập hợp các cặp **key** - **value**. Trong đó các **key** có thể là chuỗi (chứa các **empty string**). **Value** có thể chứa bất cứ thứ gì ngoại trừ giá trị **undefined**. 

Object rất hữu dụng trong việc thu thập và sắp xếp dữ liệu, chúng có thể chứa cả một object khác.

Trong JS Object chúng ta có thể khai báo theo 2 kiểu khác nhau đó là:
 * Declarative.
 * Constructed. 
 
**Literal Syntax** được định nghĩa là:
```
var bioData = {
  key: value,
  // other properties and values
}
```

**Constructed Syntax** được định nghĩa rằng:
```
// create the object using the constructed
// syntax 
var bioData = new Object();

// add a property name and value
bioData.key = value;
```
**Recommend:** Chúng ta nên dùng literals syntax bởi vì độ phổ biến và dễ sử dụng. Còn cú pháp **Constructed** có một số điểm yếu nhất định như chúng ta chỉ được thêm key value one by one.

**Lưu ý:** Nếu tên `key` chứa dấu gạch ngang - hay `spaces`, thì sẽ bọc lại bằng dấu quotes (" ").

Object có thể chứa một Object khác, như:
```
var bioData = {
  first_name: "Habdul",
  last_name: "Hazeez",
  field: "Computer Science"
  skills: {
     programming_languages: "JavaScript, C, C++",
     other_fields: "Computer Security, Artificial Intelligence"
  }
};
```
## 2. Truy xuất dữ liệu:
`value` có thể được truy xuất bởi dấu [ ] hoặc dấu . dot. Nhưng nếu `key` là một **Reserved Keyword.** thì tốt nhất chúng ta sử dụng dấu . giúp nó dễ đọc hơn.
```
bioData['first_name'];
//Result: "Habdul"
```
![breakets notation](https://res.cloudinary.com/practicaldev/image/fetch/s--uh3b4yN6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/kgmpgevo9m2jz4zqlig8.PNG)

```
bioData.first_name;
//Result: "Habdul"
```
![Bracket notation](https://res.cloudinary.com/practicaldev/image/fetch/s--yzqN4Hnl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/39ao2i2ibcnomviyguxt.PNG)
Chúng ta cũng có thể truy vấn lồng trong Object như:
![Subqueries](https://res.cloudinary.com/practicaldev/image/fetch/s--3-jXG0wJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/gobvhzidj7vq1jwqtbgd.PNG)

Nhưng nếu chúng ta truy vấn nhưng giá trị không tồn tại thì nó sẽ trả về **undefined**.

## 2. Data Update:
Một giá trị có thể update bằng cách gán, nếu `key` đã tồn tại giá trị, thì `value` sẽ được thay thế:
```
bioData['first_name'] = "Ben";
```
![Update](https://res.cloudinary.com/practicaldev/image/fetch/s--xoVII9KA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/xkq9tvxvp84kc3f7z9bw.PNG)

Chúng ta cũng có thể check bằng cách:
```
// check the object
bioData;
```
![](https://res.cloudinary.com/practicaldev/image/fetch/s--iZWODvmX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/71ye9to1df2j3ww6vjpw.PNG)

Sử dụng `delete`, nó sẽ xóa đi một phần tử muốn xóa:
```
// This will delete the first_name property

delete bioData.first_name;
```
![](https://res.cloudinary.com/practicaldev/image/fetch/s--CCgb0UKu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/i6kw3rifupk9y7n1l1d0.PNG)