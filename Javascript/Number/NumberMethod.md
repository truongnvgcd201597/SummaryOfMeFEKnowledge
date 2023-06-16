## 1. Number():
Phương thức `Number()` chuyển đổi một chuỗi thành một số.
```
// Example 1
// Example 1
let x = '10'
let num = Number(x)
console.log(num)                 // Output: 10
console.log(num * 9)             // Output: 90
// Example 2
let x = true
let num = Number(x)
console.log(num)                 // Output: 1
console.log(num + 9)             // Output: 10
//Example 3
let x = false
let num = Number(x)
console.log(num)                 // Output: 0
console.log(num + 9)             // Output: 9
```
Trong ví dụ trên, phương thức Number(value) được sử dụng để chuyển đổi chuỗi x thành một số nguyên và thực hiện các phép toán trên giá trị số. Đặt x là `true` và trả về 1, false trả về 0.

## 2. parseInt():
Phương thức `parseInt()` rất giống phương thức number()sẽ định dạng một chuỗi và trả về một số nguyên.
```
// Example 1
let x = '10.99'
let num = parseInt(x)
console.log(num)                 // Output: 10
// Example 2
let x = '7 days'
let num = parseInt(x)
console.log(num)                 // Output: 7
// Example 3
let x = 'day 7'
let num = parseInt(x)
console.log(num)                 // Output: NaN
```

## 3. parseFloat():
Phương thức `parseFloat()` phân tích cú pháp của một giá trị chuỗi và trả về số với giá trị thập phân của nó.
```
// Example 1
let x = '10.99'
let num = parseFloat(x)
console.log(num)                 // Output: 10.99
// Example 2
let x = '2.49 3.99'
let num = parseFloat(x)
console.log(num)                 // Output: 2
// Example 3
let x = 'day 7'
let num = parseFloat(x)
console.log(num)                // Output: NaN
```

## 4. toString():
Phương thức toString() chuyển đổi một giá trị số thành một chuỗi.
```
// Example 1
let x = 10
let num = x.toString()
console.log(num)                // Output: '10'
// Example 2
let x = 10
let num = x.toString(2)
console.log(num)                // Output: 1010   
```

## 5. toExponential():
Phương thức `toExponential()` chuyển đổi một số thành một chuỗi và trả về nó ở định dạng hàm mũ.
```
// Example 1
let x = 456.789
let num = x.toExponential()
console.log(num)                 // Output: 4.56789e+2
// Example 2
let x = 456.789
let num = x.toExponential(2)
console.log(num)                 // Output: 4.57e+2
```
## 6. toFixed():
Phương thức `toFixed()` làm tròn một số đến điểm cao nhất hoặc thấp nhất do người dùng xác định.
```
// Example 1
var num = 4.56789;
console.log(num.toFixed())             // Output : 5
// Example 2
var num = 4.56789;
     
console.log(num.toFixed(2))            // Output : 4.57
```
## 7. toPrecision():
phương thức `toPrecision()` trả về giá trị số với độ dài cụ thể. Nó có một đối số biểu thị độ dài. Nếu được cung cấp mà không có độ dài cụ thể, phương thức này sẽ trả về số như nó vốn có.
```
// Example 1
var num = 456.789;
     
console.log(num.toPrecision())      // Output : 456.789
// Example 2
var num = 456.789;
       
console.log(num.toPrecision(2))     // Output : 4.6
```

## 8. valueOf():
Phương thức `valueOf()` được sử dụng để trả về giá trị ban đầu của đối tượng Number (Trả về các kiểu nguyên thủy trong JavaScript là số, chuỗi, bigint, ký hiệu, không xác định, null và boolean).
```
let x = 45
let num = x.valueOf()
console.log(num)                 // Output: 45
console.log(typeof num);         // Output: Number
```

## 9. isInteger():
Phương thức `isInterger` kiểm tra xem giá trị đã cho có phải là số nguyên hay không và trả về giá trị boolean.
```
//Example 1
let x = 10
let num = Number.isInteger(x)
console.log(num)                     // Output: true
//Example 2
let x = 10.99
let num = Number.isInteger(x)
console.log(num)                     // Output: false
//Example 3
let x = "10"
let num = Number.isInteger(x)
console.log(num)                     // Output: false
```

## 10. isFinite():
Phương thức `isFinite()` kiểm tra xem giá trị đã cho có hữu hạn hay không và trả về giá trị boolean.
```
//Example 1
let x = 10
let num = Number.isFinite(x)
console.log(num)                     // Output: true
//Example 2
let x = -10.99
let num = Number.isFinite(x)
console.log(num)                     // Output: true
//Example 3
let x = "10"
let num = Number.isFinite(x)
console.log(num)                     // Output: false
```

#### _💦Uống nước nhớ source tại: [12 Most Common JavaScript Number Methods](https://medium.com/swlh/12-most-common-javascript-number-methods-4dfeedb7f2af)_


