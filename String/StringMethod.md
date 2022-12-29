## 1. Length():
Thuộc tính length trả về số độ dài của chuỗi, được tính bằng đơn vị mã UTF-16. 
**Syntax:**
```
string.length
```
Ví dụ:
```
let str = 'Hello World, this is a string';
console.log(str.length);
// expected output: "Hello World, this is a string. Answer: 29"
```
## 2. Lower Case:

Phương thức toLowerCase() trả về giá trị chuỗi đang gọi được chuyển đổi thành chữ thường.

**Syntax:**:
```
String.prototype.toUpperCase()
```
**Ví dụ:**
```
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
```
## 3. Upper Case:
Phương thức toUpperCase () trả về giá trị chuỗi đang gọi được chuyển đổi thành chữ hoa (giá trị sẽ được chuyển đổi thành chuỗi nếu nó không phải là một chuỗi).
**Syntax:**:
```
String.prototype.toUpperCase()
```
**Ví dụ:**
```
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```
## 4. indexOf:
Phương thức indexOf () trả về chỉ mục đầu tiên mà tại đó một phần tử nhất định có thể được tìm thấy trong mảng và trả về giá trị **-1** nếu nó không tồn tại.\
**Syntax:**:
```
String.prototype.indexOf()
```
**Ví dụ:**
```
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```
## 5. Search():
Phương thức search() cũng na ná indexOf(), chúng thực hiện tìm kiếm một chuỗi con trong một chuỗi cha thỏa mãn điều kiện, và trả về vị trí của nó trong chuỗi cha.  
**Syntax**:
```
String.prototype.search()
```
Ví dụ:
```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."
```
## 6. Slice():
Phương thức slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới, mà không sửa đổi chuỗi ban đầu.
**Syntax:**
```
String.prototype.slice()
```
**Ví dụ:**
```
let love = 'Hello ban tre, ban co khoe khong';
console.log(love.slice(0, 5));
```
## 7. Substring():
Phương thức string.substring() sẽ trích xuất nội dung của chuỗi và trả về một chuỗi mới mà không thay đổi giá trị ban đầu của chùng và được xác định bằng 2 tham số đó là `start` và `end`.\
**Syntax:**
```
String.prototype.substring()
```
**Ví dụ:**
```
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```
## 8. Replace():
Phương thức string.replace() sẽ thực hiện tìm kiếm một chuỗi con và sau đó được thay thế bằng giá trị được cung cấp bởi người dùng.
**Syntax:**
```
replace(substr, newSubstr)
```
**Ví dụ:**
```
let str = 'Hello World, this is a string';

console.log(str.replace('World', 'Universe'));

// expected output: "Hello Universe, this is a string"
```

## 9. Includes():
Phương thức string.includes() sẽ thực hiện tìm kiếm chuỗi được truyền vào có tồn tại trong chuỗi đó hay không, chúng sẽ trả về `true` hoặc `false` nếu thích hợp (có phân biệt hoa thường).
**Syntax:**
```
includes(searchString, position)
```
**Ví dụ:**
```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
```

## 10. Concat():
Phương thức concat() nối các đối số của chuỗi với chuỗi được gọi và trả về một chuỗi mới.
```
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
```
**Ví dụ:**
```
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
```

## 11. CharAt():
Phương thức charAt() có chức năng tìm kiếm và trả về vị trí tìm kiếm trong chuỗi(bao gồm đơn vị mã UTF-16)\
**Syntax:**
```
charAt(index)
```
**Ví dụ:**
```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"
```
## 12. lastIndexOf():
phương thức lastIndexOf() sẽ kiểm tra và trả về vị trí cuối cùng của chuỗi cần tìm được cung cấp. Nếu không thấy, phương thức sẽ trả về -1.\
**Syntax:**
```
lastIndexOf(searchString, position)

```
**Ví dụ:**
```
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"
```
Output:
```
> 'The index of the first "dog" from the end is 52'
```

## 13: Trim():
Phương trim()thức loại bỏ khoảng trắng từ cả hai đầu của một chuỗi và trả về một chuỗi mới, mà không sửa đổi chuỗi ban đầu.\
**Syntax:**
```
trim()

```
**Ví dụ:**
```
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```

## 14. Match():
Phương thức string.match() sẽ thực hiện tìm kiếm các biểu thức chính quy và trả về các chuối dưới dạng một mảng.\
**Syntax:**
```
match(regexp)
```
**Ví dụ:**
```
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);

// expected output: Array ["T", "I"]
```

## 15. Split():
Phương thức string.split phân tách một chuỗi thành một mảng dữ liệu dựa vào các ký tự phân tách trong chuỗi và trả vê một mảng mới.\
**Syntax:**
```
split()
split(separator)
split(separator, limit)
```
**Ví dụ:**
```
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

## 16. valueOf():
The valueOf() method returns the primitive value of a String object.\
**Syntax:**
```
valueOf()
```
**Ví dụ:**
```
const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
```