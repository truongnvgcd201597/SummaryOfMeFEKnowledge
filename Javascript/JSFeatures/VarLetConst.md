# Biến trong Javascript:
### Table of Content:
 [I. Var](#var)
 
 [II. Let](#let)
 
 [III. Const](#const)
 
 [IV. Summarizing the difference](#sum)
![](https://i.redd.it/fryh34q1kmt31.jpg)
Trong Javascript, người dùng có thể khai báo biến bằng cách sử dụng tới ba từ khóa, đó là: `var`, `let` và `const`. Nhìn thì có vẻ chúng rất giống nhau và có mục đích đó là khai báo biến. Nhưng thực ra nó cũng phức tạp và khó hiểu như nỗi lòng của người con gái khi yêu vậy. Trong bài viết này, tôi sẽ giúp bạn có thể biết được sự khác biệt giữa các từ khóa này nhé!
<a name="var"></a>
## I. Var:
Var chính là biến có thể khai báo đa dạng các kiểu dữ liệu như: number, string, boolean, ... 
### 1. Var có thể cập nhật và khai báo lại:
Chúng có thể khai báo lại và cập nhật trong phạm vi của chúng. 
```
var a = 'bon appetit';
var a = 'delicious';
```
### 2. Phạm vi:
Tất cả các biến khai báo với var ở phạm vi bên trong hay ngoài hàm (**globally / locally scope**) thì biến có phạm vi hàm số (**function scope**) chứa phần khai báo biến hoặc phạm vi toàn cục (**global scope**).
Example:
```
 var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
```
Biến `greeter` là một biến có phạm vi toàn cầu và tồn tại bên ngoài function trong khi biến `hello` lại là một function scoped. Vậy nên chúng ta không thể truy cập biến `hello` bên ngoài một hàm. Và nếu như ta làm theo cách này:
```
  var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); 
```
Chúng ta sẽ nhận về error khi biến `hello` không có sẵn bên ngoài một function.
### 3. Hoisting
Ngoài ra, biến var còn có tính chất **Hoisting**.
``` console.log(name);
    var name = "Le Tang";
```
Biên dịch:
```
var name;
  console.log(name);
  name = "Le Tang";
```
### 4. Vấn đề khác:
**var** có một số điểm yếu chết người như sau:
```
 var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }

    console.log(greeter) //"say Hello instead"
```
Khi var thỏa mãn điều kiện `times > 3`, greeter sẽ được redefined và có giá trị mới là "say Hello instead". Nhìn vào thì có vẻ đó không phải là một vấn đề lớn khi **greeter** được redefined. Mà chúng ta sẽ gặp rắc rồi nếu chúng ta sở hữu hàng nghìn dòng code. Chúng ta sẽ không biết chính xác biển nào đã được redefined, dẫn tới việc debug cực kì khó khăn.
<a name="let"></a>
## II. Let:
### 1. Block scoped
Tất cả các biến được khai báo với **let** đều ở phạm vi **block scoped**. Các biến chỉ được truy cập bên trong và nếu ra khỏi scope thì sẽ không thể sử dụng được nữa.
```
let greeting = "say Hi";
 if(greeting === 'say Hi') {
 let meeting = 'Truong';
 }
 console.log(meeting);
```
Có thể thấy rằng khi biến **hello** được gọi bên ngoài block thì nó sẽ trả về lỗi.
### 2. Let có thể updated nhưng không thể re-declared:
Ngoài ra, let cho phép chúng ta cập nhưng nhưng không thể khai báo lại trong phạm vi của chúng.
```
 let greeting = "say Hi";
 greeting = "say Hello instead";
```
Nhưng đối với bên ngoài phạm vi scope  thì chúng ta có thể redefined mà không phát sinh lỗi vì nó được xem như là khai báo một biến mỡi.
```
 let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);//"say Hello instead"
    }
    console.log(greeting);//"say Hi"
```
### 3. Hoisting:
Same **var**, nhưng **let** khác nhau ở chỗ, var khởi tạo với giá trị **undefiend** thì let sẽ không có bất kỳ một giá trị khới tạo nào. Vì vậy, nếu chúng ta sử dụng biến let trước khi khai báo thì sẽ gặp lỗi **Reference Error**.
<a name="const"></a>
## III. Const:
Biến **const** chính là một hằng số không thể cập nhật hay khai báo lại trong những trường hợp sử dụng **Primitive type**. Nhưng chúng lại có một số đặc điểm ở biến const có tương đồng với biến **let**.

### 1. Const là một block scope:
Same **let**, **const** chỉ được truy cập bên trong khối mà đã được khai báo.
```    
const greeting = "say Hi";
greeting = "say Hello instead";
//error : Assignment to constant variable. 
```
Mọi khai báo ở **const**, phải được khởi tạo tại thời điểm khai báo. Còn đối với các kiểu biến **Reference Type** thì chúng ta có thể cập nhật giá trị cho biến đó.
```
 const greeting = {
        message : "say Hi",
        times : 4
    }
```
Không nên:
```
 const greeting = {
        words : "Hello",
        number : "five"
    }//error :  Assignment to constant variable.
```
Mà:
```
    greeting.message = "say Hello instead";
```

### 2. Hoisting:
Cũng same same `var` hay `let`
<a name="sum"></a>
## IV. Summarizing the difference:
![vlc img](https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg "https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg")

- `var` và `let` có thể khai báo mà không được khởi tạo, còn `const` phải được khởi tạo trong quá trình khai báo.
- `var` khai báo ở phạm vi chức năng (**function scoped**) hoặc phạm vi toàn cục (**globally scoped**), trong khi `let` và `const` ở phạm vi khối (**block scoped**).
- Biến `var` có thể cập nhật và khai báo lại trong phạm vi của nó. Với `let`, các biến có thể được cập nhật nhưng không được khai báo lại. Biến `const` thì không thể cập nhật hay khai báo lại.

![image](https://user-images.githubusercontent.com/75243419/159230049-e0abed48-8fee-435d-ba8e-6ec6e3842b37.png "https://miro.medium.com/max/1400/1*v9KskAGzICYXxRjlvRbmvw.jpeg")

#### _💦Uống nước nhớ source tại: [Var, let and const- what's the difference?](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e)_
