## 1. Pop():
Phương thức pop() dùng để xóa phần tử cuối cùng khỏi một mảng và trả về giá trị của mục đã loại bỏ.\
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];
 lang.pop(); 
 
 Output
 // New array:  PHP, Python, Java
```

## 2. Push():
Phương thức push() được sử dụng để thêm một phần tử mới vào cuối một mảng.
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];
 lang.push("JavaScript");
```

## 3. toString():
phương thức toString() được sử dụng để chuyển đổi mảng thành chuỗi.
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];
 lang.push("JavaScript");
 
 // Output
PHP, Python, Java, C
```

## 4. Join():
Phương thức join() được sử dụng để nối các phần tử của một mảng thành một chuỗi. Phương thức `join()` đặt tất cả các phần tử của mảng vào một danh sách chuỗi. Phương thức này khác với phương thức `toString()`. \
**Ví dụ:**
```
var lang = ["PHP", "Python", "Java", "C"];
 lang.join(" - ");
 
// Output
PHP - Python - Java - C
```

## 5. Splice():
Phương thức splice() được sử dụng để thêm và xóa các mục khỏi một mảng.
**Syntax:**
```
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];
 lang.splice(2, 0, "Javascript", "Rust"); 
 
 // Output
new array: PHP, Python, Javascript, Rust, Java, C
```
## 6. Sort():
Trong Javascript có hỗ trợ hàm Array.sort(compareFn) để sắp xếp mảng theo điều kiện mong muốn.

#### Cú pháp:
```
arr.sort()
arr.sort(compareFunction)
```
Nếu trong hàm không có chứa `compareFn` thì chúng sẽ tự động sắp xếp theo thứ tự trong bảng mã Unicode.\
Bên trong Sort sẽ xác định thứ tự sắp xếp như sau: 
 - compareFunction(a, b) trả về < 0 thì a sẽ đứng trước b.
 - compareFunction(a, b) trả về > 0 thì a sẽ đứng sau b.
 - compareFunction(a, b) trả về = 0 thì giữ nguyên thứ tự.\
Nếu trong hàm có giá trị `Null/undefined` thì sẽ sắp xếp chúng đứng ở cuối mảng với thứ tự lần lượt là null và undefined. 
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];
 lang.sort();
 
 // Outuput
array: C, Java, PHP, Python
 ```
 
 ## 6. Shift():
 Phương thức shift() được sử dụng để xóa phần tử đầu tiên khỏi một mảng.
 ```
 var lang = ["PHP", "Python", "Java", "C"]; 
 lang.shift(); 
 
 // Output
new array: Python, Java, C
 ```
 
 ## 7. Unshift():
 Phương thức unshift() được sử dụng để thêm một phần tử mới vào đầu mảng.
 ```
 var lang = ["PHP", "Python", "Java", "C"]; 
 cars.unshift("JavaScript");     
 
 //Output 
New array: JavaScript, PHP, Python, Java, C
 ```

## 8. Reverse():
Phương thức này được sử dụng để đảo ngược thứ tự của các phần tử trong một mảng.
**Ví dụ:**
```
 var lang = ["PHP", "Python", "Java", "C"];             
 lang.reverse();   
 
 // Outuput
array: C, Java, PHP, Python
 ```

## 9. Concat():
Phương thức concat() nối hai hoặc nhiều mảng và tạo một mảng mới.\
**Ví dụ:**
```
var lang = ["PHP", "Python", "Java", "C"];  
 var newlang = ["JavaScript", "Rust"];  
 var join = lang.concat(newlang);  
 
 // Output
New array: PHP, Python, Java, C, JavaScript, Rust
 ```
 
## 10. Slice():
 Phương thức slice() được sử dụng cho các phần tử đã chọn trong một mảng và tạo một mảng mới. Nó có thể mất một hoặc hai đối số. \
 **Ví dụ:**
 ```
  var lang = ["PHP", "Python", "Java", "C", "JavaScript"];
 var lang = cars.slice(1, 4);  
 
 //Output 
New Array : Python, JavaScript
```

## 11. Filter():
Phương thức filter() được sử dụng để lọc mảng, theo các điều kiện. \
**Ví dụ:**
```
function isCheck(value) {
  return value < 10;
}

var filter = [10, 5, 16, 4, 7, 12].filter(isCheck);

Output
 //new array: 5,4,7
```
## 12. Find():
Phương thức find() được sử dụng để tìm phần tử đầu tiên của một mảng. \
**Ví dụ:**
```
function isCheck(value) {
  return value >= 10;
}
var find= [10, 5, 16, 4, 7, 12].find(isCheck);

Output
// 12
```

## 13. forEach():
Phương thức forEach() giúp lặp qua các phần tử của mảng.\
**Ví dụ:**
```
 var num = [18, 12, 10, 15];
 num.forEach(function(item) {
    document.writeln(item);
 });
 
 Output
 // return 

18 12 10 15
```

## 14. map():
Phương thức map(), tạo một mảng bằng cách gọi một hàm cụ thể trên mỗi phần tử trong mảng ban đầu.
```
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
document.write(x);

 Output
 // return   
 2,3,4,5 
```

## 15. Reduce():
Phương thức Reduce() sử dụng bộ tích lũy để chạy một hàm trên các mục của mảng (từ trái sang phải) để nhận một giá trị duy nhất. \
**Ví dụ:**
```
var numArr = [
        {  name: 'a', num: 50},
        {  name: 'b', num: 50},
        {  name: 'c', num: 75},
        {  name: 'd', num: 35},
        {  name: 'e', num: 25 },
        {  name: 'f', num: 40 },
    ];

    var sum = numArr.reduce(function (total, currentValue) {
        return total + currentValue.num;
    }, 0);

    document.write( "javascript- Sum of the array value is :- " + sum );
    
Output
 // return   
 275
```

## 16. Some():
Phương thức some() kiểm tra phần tử có thỏa mãn ít nhất một điều kiện hay không. \
**Ví dụ:**
```
var nums = [3, 18, 19, 20, 25];

function checkNumber(num) {
  return num >= 25;
}

document.write(nums.some(checkNumber));

Output
 // return   
 True
```

## 17. Every():
Phương thức every() kiểm tra xem tất cả các phần tử của mảng có thỏa mãn hết tất cả các điều kiện hay không:
```
ar nums = [3, 18, 19, 20, 25];

function checkNumber(num) {
  return num >= 3;
}
document.write(nums.every(checkNumber));

// return   
 true
```

## 18. findIndex():
Phương thức findIndex() được sử dụng để tìm vị trí xuất hiện đầu tiên từ một mảng.
```
let numbers = [1, 2, 3, 4, 5];
let res = numbers.findIndex(e => e % 2 == 1);
document.write(res); 

 // return   
 0
```

## 18. Include():
Phương thức include() trả về true nếu mảng trong javascript chứa một phần tử đã cho thỏa mãn điều kieneh, Nếu không, nó trả về false.
```
[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false

 // return   
 true
 false
 false
```

## 19. indexOf():
Phương thức indexOf() sử dụng để tìm vị trí xuất hiện đầu tiên của một mảng và trả về index của chúng. Nếu phần tử không được tìm thấy, sẽ trả về -1.
```
var arr = [10, 20, 30, 40, 50, 70, 10, 50];
document.write(arr.indexOf(10)); // 0
document.write(arr.indexOf(10)); // 4
document.write(arr.indexOf(10)); // 5

// return   
0
4
5
```
## 20. lastIndexOf():
Phương thức lastIndexOf() tương tự với phương thức indexOf(), nhưng có một điểm khác biệt ở chúng đó là lastIndexOf() được sử dụng để tìm vị trí xuất hiện cuối cùng của một mảng. Nó trả về -1 nếu nó không thể tìm thấy phần tử.
```
var arr = [10, 20, 30, 40, 50, 70, 10, 40];
document.write(arr.lastIndexOf(10)); // 6
document.write(arr.lastIndexOf(40)); // 7

// return   
6
7
```

## 20. isArray():
Phương thức isArray() được sử dụng để kiểm tra xem một đối tượng có phải là một mảng hay không. Hàm này trả về true nếu đối tượng là một mảng, nếu không thì trả về false.
```
var arr = [5, 3, 10, 1, 6, 12]
document.write("Retrun value = " + Array.isArray(arr)); 

Return value = true  
```

s