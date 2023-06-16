### Định nghĩa:
> _Hoisting là hành động mặc định của Javascript, cơ chế của nó đó chính là tách phần khai báo và di chuyển các phần khai báo lên đầu trước khi được compiled và các khai báo biến của nó được thực thi đầu tiên(Nên chúng sẽ nằm ở bộ nhớ dành riêng). JavaScript chỉ lưu trữ các khai báo, không lưu trữ các khởi tạo._
 
Do đó, các biến có thể xuất hiện trong đoạn mã trước khi chúng được định nghĩa. Nhưng việc khởi tạo biến chỉ xảy ra cho đến khi dòng mã đó được thực thi.
\
Có một quan niệm sai lầm khác đó chỉnh là **hoist** chỉ tồn tại ở `var` và `let` hay `const` không hỗ trợ, but that's not true.
> _Tất cả các khai báo biến và hàm đều được lưu trữ. Tuy nhiên, let và const được kéo theo những cách khác nhau. Trong phạm vi khối, let và const được nâng lên, trong khi var được nâng trong phạm vi toàn cục._

Javascipt chỉ lưu trữ các khai báo chứ không phải khởi tạo. Nếu một biến được sử dụng nhưng nó chỉ được khai báo và khởi tạo sau đó, giá trị khi nó được sử dụng sẽ là giá trị mặc định khi khởi tạo. 

### Default Values: `undefined` và `ReferenceError`:
Đối với các biến khai báo bằng từ khóa `var`, giá trị mặc định là `undefined`.
```
console.log(hoistedVar); // Returns 'undefined' from hoisted var declaration 
var hoistedVar; // Declaration
hoistedVar = 78; // Initialization
```
Nếu mà khi phần khai báo bị xóa.
```
console.log(hoistedVar); // Throw ReferenceError Exception
hoistedVar = 78; // Initialization
```
### Variable hoisting:
Các biến chưa được khai báo không tồn tại cho đến khi việc gán mã được thực hiện. Việc gán biến cho một biến chưa được khai báo sẽ hoàn toàn tạo ra nó như một biến toàn cục khi việc gán được thực thi. Điều đó có nghĩa là bất kỳ biến nào chưa được khai báo (nhưng được gán) đều là một biến toàn cục.
```
function demo() {
   globalVar = 34;
   var functionScopedVar = 78;
}

demo();
console.log(globalVar); // Output: 34
console.log(functionScopedVar) // throws a ReferenceError
```
### Let hoisting: Temporal Dead Zone (TDZ):
Các biến `let` và `const` cũng được lưu vào. Tuy nhiên, khác với `var` khi giá trị mặc định khởi tạo là **undefined**. Cho đến khi chúng được khởi tạo hoặc được thực thi. Những đoạn code truy cập vào chúng sẽ *throw an exception*. Vì những biến đó đang nằm ở vùng "Temporal Dead Zone" từ khi bắt đầu cho tới khi quá trình khởi tạo hoàn tất. 
```
{ // TDZ starts at beginning of scope
  console.log(varVariable); // undefined
  console.log(letVariable); // ReferenceError
  var varVariable = 1;
  let letVariable = 2; // End of TDZ (for letVariable)
}
```

```
{
    // TDZ starts at beginning of scope
    const sampleFunc = () => console.log(letVariable); // OK

    // Within the TDZ letVariable access throws `ReferenceError`

    let letVariable = 97; // End of TDZ (for letVariable)
    sampleFunc(); // Called outside TDZ!
}
```

### Function Hoisting: 
Trong Javascript, có hai dạng hàm đó là Declarations function và Expressions function. Function declaration sẽ được đưa lên trên cùng, cho nên hàm có thể được gọi ngay cả khi nó được khai báo.
```
amIHoisted(); // Output: "Yes I am."
function amIHoisted() {
   console.log("Yes I am.")
}
```
Còn Function expressions sẽ không được **hoisted**, đoạn code dưới đây sẽ trả về **TypeError** bởi vì `amIHoisted` được coi là một biên, not function.
```
amIHoisted(); //Output: "TypeError: expression is not a function
var amIHoisted = function() {
   console.log("No I am not.");
}
```

### Precedence:
- Phép gán biến sẽ được ưu tiên hơn hàm.
```
var amIABoolean = true;
function amIABoolean() {
  console.log("No.")
}
console.log(typeof amIABoolean); // Output: boolean
```
- Function declarations sẽ được ưu tiên hơn khai báo biến.
```
var amIAFunction;
function amIAFunction() {
  console.log("Yes.")
}
console.log(typeof amIAFunction); // Output: function
```
#### _💦Uống nước nhớ source tại: [JavaScript Hoisting](https://dev.to/pat_the99/javascript-hoisting-450l#javascript-hoisting)_

