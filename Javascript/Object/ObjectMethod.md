## 1. Object.create():

Object.create() là một phương thức tạo ra một Object mới và có thể dùng nó để mở rộng object đã tồn tại.

### Syntax

```
Object.create(prototypeObject, propertiesObject)
```

- prototypeObject: Object prototype mới được tạo. Nó có thể là object hoặc null.
- propertiesObject: Các thuộc tính của object mới (tùy chọn).

### Ví dụ:

```
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

Output
The barista position is hourly and is accepting applications.
```

### Không có Prototype:

```
var person = Object.create(null);

typeof(person) // Object
console.log(person) // {}

// Set property to person object
person.name = 'Bui Hieu';

console.log(person) // { name: 'Bui Hieu' }

```

### Có Prototype:

```
prototypeObject = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName
	}
};
var person = Object.create(prototypeObject);

console.log(person); // {}

// Adding properties to the person object
person.firstName = 'Hieu';
person.lastName = 'Bui';

person.fullName();

console.log(person.fullName()); // Hieu Bui
```

## 2. Object.keys():

Object.keys() tạo một mảng có chứa tất cả các key của một Object rồi trả về chúng, tương tự như vòng lặp for...i.

```
// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

Output
["boss", "secretary", "sales", "accountant"]
```

Object.keys chuyển đổi các khóa của đối tượng thành một mảng keys, bằng cách sử dụng vòng lặp `forEach`.

```
// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});

Output
boss: Michael
secretary: Pam
sales: Jim
accountant: Oscar
```

Chúng ta có thể kiểm tra độ dài của một `object` bằng cách sử dụng thuộc tính `length`.

```
/ Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);
Output
4
```

## 3. Object.values():

Object.keys() tạo một mảng có chứa tất cả các value của một Object.

```
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);
Output
[1, "26-July-2018", "mobile", "Chrome"]
```

## 4. Object.entries():

Object.entries tạo ra một mảng lồng bao gồm các cặp key value của object

```
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
Output
[
    ["name", "Ubuntu"]
    ["version", 18.04]
    ["license", "Open Source"]
]
```

Chúng ta cũng có thể dùng `forEach` để lặp và trả về key value.

```
// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});
Output
name: Ubuntu
version: 18.04
license: Open Source
```

Nó chỉ trả về thuộc tính chính nó chứ không trả về thuộc tính kế thừa thông qua nguyên mẫu nó.

## 4. Object.assign():

Phương thức Object.assign() dùng để sao chép các giá trị của object này và gán tất cả các giá trị bên trong vào object được chỉ định.\
Chúng ta có thể tạo hai đối tượng và hợp nhất chúng với Object.assign().

```
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);
Output
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
```

Chúng ta cũng có thể sử dụng `Spread Operator` để đạt được tương tự.

```
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the object with the spread operator
const character = {...name, ...details}

console.log(character);
Output
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}
```

## 5.Object.freeze():

Object.freeze() dùng để đóng băng và ngăn chặn việc sửa đổi như: Creating và Modifying object đó.

```
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
Output
{username: "AzureDiamond", password: "hunter2"}
```

## 6. Object.seal():

Object.seal() được sử dụng để tránh không cho thuộc tính mới được thêm vào đối tượng, nhưng cho phép sửa đổi các thuộc tính hiện có.

```
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
Output
{username: "AzureDiamond", password: "*******"}
```

## 7. Object.getPrototypeOf():

Object.getPrototypeOf() được sử dụng để lấy [[prototype]] ẩn bên trong một đối tượng, cũng có thể truy cập thông qua thuộc tính **proto**.

```js
const employees = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);
Output
[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]
```

## 8. Object.is():

phương thức Object.is() được sử dụng để so sánh hai giá trị xem chúng có bằng nhau hay không. Phương thức này trả về true nếu hai giá trị được so sánh là bằng nhau và false nếu chúng không bằng nhau.

```js
Object.is(value1, value2);
```
