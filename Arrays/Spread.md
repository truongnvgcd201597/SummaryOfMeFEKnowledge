![](https://braziltalkdotorg1.files.wordpress.com/2017/09/https9jb2rlbxl1as5jb20vd3aty29udgvudc91cgxvywrzlziwmtuvmdyvau1lc3nhz2utvhlwaw5nluluzgljyxrvci1pbi1du1muz2lm.gif)
## Spread Operator:
`Spread Operator` có cú pháp đó là `...` được sử dụng để tách các array element hoặc thuộc tính đối tượng của nó. Nó thực hiện việc cloning mà không làm ảnh hưởng tới giá trị gốc. Nó có thể hợp nhất **Object** hay **Array**.

Các kiểu của `Rest Operator`:
### Copying an array:
```
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr1); // [1, 2, 3]
console.log(arr2);  // [1, 2, 3, 4, 5]
arr1.push(6, 7);
console.log(arr1);  // [1, 2, 3, 6, 7]
console.log(arr2);  // [1, 2, 3, 4, 5]
```
Có thể thấy `arr2` không thay đổi khi `arr1` được thêm giá trị mới.
 Nhưng mà khi không sử dụng `...` ở `arr2` thì: 
```
const arr1 = [1, 2, 3]
const arr2 = [arr1, 4, 5]
console.log(arr1); //[1, 2, 3]
console.log(arr2); //[[1, 2, 3], 4, 5]
```

### Copying an object:
```
const obj1 = {
  name: "Prince",
  Sex: "Male"
}
console.log(obj1); //{name: "Prince", sex: "male"}

const obj2 = {
  ...obj1,
age: 25 //{age: 25, name: "Prince", sex: "male}
}
console.log(obj2);

obj1["height"] = "5'8 ft";
console.log(obj1);//{height: "5'8 ft",name: "Prince", sex: "male"}
console.log(obj2);   //{age: 25, name: "Prince", sex: "male}
```
Và nếu thiếu `...` thì sẽ như sau:
```
let obj = {a: 1, b: 2, c: 3}
let copy = {obj}
// copy is { {a: 1, b: 2, c: 3} }
```

### Concatinate array:
```
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let concat = [...arr1, ...arr2]
// concat is [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```
### Merge object:
Giờ đây, chúng ta không cần phải sử dụng cách cữ khác đó chính là `concat()`.
```
let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {d: 4, e: 5, f: 6}

let merge = {...obj1, ...obj2}
// merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```
### Using Spread Operator in logging
Chúng ta có thể dùng `spread operator` để logging.
```
let fruits = ['🍈', '🍉', '🍋', '🍌'];
console.log(...fruits); //🍈 🍉 🍋 🍌
```

## Rest Parameter:
`Rest Operator` có cú pháp tương tự như `Spread Operator`, được hiểu theo cách khác đó chính là hiện thân của các tham số còn lại, nó cho phép một hàm chấp nhận số lượng arguments không xác định dưới dạng một mảng.
```
const filter = (...args) => {
  return args.filter(val => val%5===0)
}

console.log(filter(5, 10, 2, 4, 20));    // [5, 10, 20]
```

