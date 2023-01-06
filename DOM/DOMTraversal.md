# DOM Traversal
## 1. DOM Traversal là gì:
> DOM traversal là quá trình truy cập và duyệt qua các phần tử trong cây DOM (Document Object Model) của trang web. Mục đích của DOM traversal là lấy ra các phần tử cần thiết hoặc thực hiện các thao tác trên chúng, như thay đổi nội dung hay giao diện của chúng.

Trong JavaScript, bạn có thể sử dụng các hàm như querySelector và querySelectorAll để lấy ra các phần tử theo một selector CSS, hoặc sử dụng các hàm như getElementById, getElementsByTagName, và getElementsByClassName để lấy ra các phần tử theo id, tên thẻ, hoặc tên lớp tương ứng.

Bạn cũng có thể sử dụng các thuộc tính như parentNode, nextSibling, và previousSibling để lấy ra phần tử cha, phần tử anh em tiếp theo hoặc trước đó của một phần tử đã chọn.

Ví dụ, để lấy ra phần tử cha của một phần tử đã chọn và thay đổi nội dung của nó, bạn có thể sử dụng mã như sau:

```
const selectedElement = document.querySelector('#selected');
const parentElement = selectedElement.parentNode;
parentElement.textContent = 'New content';
```

Trong ví dụ trên, phần tử có id là "selected" được lấy ra bằng cách sử dụng querySelector, sau đó phần tử cha của nó được lấy ra bằng cách sử dụng thuộc tính parentNode và nội dung của nó được thay đổi bằng cách sử dụng thuộc tính textContent.

## 2. Tại sao cần chúng?
Có nhiều lý do tại sao chúng ta cần sử dụng DOM traversal trong JavaScript. Một trong những lý do chính là để lấy ra các phần tử cần thiết trong trang web và thực hiện các thao tác trên chúng.

Giả sử bạn muốn sang nhà hàng xóm. Cách nhanh nhất và hiệu quả nhất để đến đó là gì?

* Di chuyển từ nhà bạn sang nhà họ (vì bạn đã biết địa chỉ của họ)
* Search map sau đó đi theo chỉ dẫn.

Nếu bạn chọn cách thứ nhất, thì bạn đang thực hiện tương đương với việc traversing DOM—selecting một phần tử từ phần tử lân cận.

Nếu bạn chọn cách thứ hai thì bạn đang thực hiện tương đương với `document.querySelector` để tìm các phần tử.

=> Việc di chuyển từ phần tử này sang phần tử khác luôn dễ dàng hơn (so với việc thực hiện tìm kiếm đầy đủ). Đó là lý do tại sao chúng ta sử dụng DOM traverse.

Bạn có thể đi qua ba hướng:
* Downwards.
* Sideways.
* Upwards.

## 3. Downwards:
> Traversing downwards là quá trình duyệt qua các phần tử con của một phần tử cha đã chọn.

Trong JavaScript, bạn có thể sử dụng các thuộc tính như `children`, `querySelector`, và `querySelectorAll` để lấy ra các phần tử con của một phần tử cha. Ví dụ:

### 3.1. querySelector và querySelectorAll
Nếu chúng ta đặt element.querySelector vào phép loại suy bên trong ngôi nhà, Cách nhanh nhất đó là chúng ta sẽ tìm kiếm một căn phòng cụ thể trong ngôi nhà. Nhanh hơn việc tìm kiếm cùng một phòng từ ngoài.

```
<div class="component">
  <h2 class="component__title">Component title</h2>
</div>
```

```
const component = document.querySelector('.component')
const title = component.querySelector('.component__title')

console.log(title) // <h2 class="component__title"> ... </h2>
```

### 3.2. Children:
> Trong JavaScript, thuộc tính "children" trên một phần tử là một HTMLCollection các phần tử con trực tiếp của phần tử đó. Nó không bao gồm các phần tử con trong các phần tử con của nó.

```
<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```

```
const list = document.querySelector('.list')
const listItems = list.children

console.log(listItems)
```

HTML Collection tương tự như NodeList (nó trả về querySelectorAll) 

Điều quan trọng là `HTML Collection` là một array-like object. Nếu bạn muốn lặp lại nó với `Array.prototype.forEach`, trước tiên bạn cần chuyển đổi nó thành một mảng với Array.from.
```
const array = Array.from(HTMLCollection)
array.forEach(el => { /* do whatever you want */})
```
### 3.3. Selecting a specific child:
Bạn có thể chọn mục nth-item trong danh sách từ cả NodeLists (kết quả từ querySelectorAll) và HTML Collection (kết quả từ `children`). Để làm được, ta cần sử dụng chỉ mục của phần tử, giống như cách bạn chọn một mục cụ thể từ `Array`.

```
<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```

```
const listItems = document.querySelectorAll('li')

const firstItem = listItems[0]
const secondItem = listItems[1]
const thirdItem = listItems[2]
const fourthItem = listItems[3]
const fifthItem = listItems[4]

console.log(firstItem)
console.log(secondItem)
console.log(thirdItem)
console.log(fourthItem)
console.log(fifthItem)
```
## 4. Traversing upwards:
> Traversing upwards trong DOM traversal là quá trình duyệt qua các phần tử cha của một phần tử con đã chọn.

Trong JavaScript, bạn có thể sử dụng thuộc tính `parentElement` và `closest` để lấy ra phần tử cha của một phần tử con đã chọn.

### 4.1. parentElement:
> Thuộc tính "parentElement" trên một phần tử là phần tử cha có thẻ HTML của phần tử đó. Nó không bao gồm các phần tử cha không có thẻ HTML như Document, DocumentFragment, và DocumentType.

```
<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```
`.list` là parent element của tất cả các thẻ `li`. Mỗi `<li>` là phần tử cha của <a> tương ứng của chúng.
 
```
const firstListItem = document.querySelector('li')
const list = firstListItem.parentElement

console.log(list)
// <ul class="list">...</ul>
```

### 4.2. Closest:
> Thuộc tính "closest" trên một phần tử là phần tử gần nhất khớp với một selector CSS cho trước. Nó bắt đầu từ phần tử hiện tại và tiếp tục lên trên các phần tử cha cho đến khi tìm thấy phần tử khớp hoặc không còn phần tử cha nào. Nếu không tìm thấy phần tử khớp, nó sẽ trả về null.

Thuộc tính `closest` cho phép bạn chọn phần tử tổ tiên gần nhất khớp với bộ chọn. Đây là cú pháp:
```
const closestAncestor = Element.closest(selector)
```

Trong HTML sau, bạn có thể dễ dàng chọn .list từ <a> với Element.closest:
```
<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```
```const firstLink = document.querySelector('a')
const list = firstLink.closest('.list')

console.log(list)
// <ul class="list"> ... </ul>
```
**Lưu ý:** `closest` bắt đầu tìm kiếm từ phần tử hiện tại, sau đó tiếp tục đi lên cho đến khi đến tài liệu. Nó dừng trả về phần tử đầu tiên mà nó tìm thấy.
```
const firstLink = document.querySelector('a')
const firstLinkThroughClosest = firstLink.closest('a')

console.log(firstLinkThroughClosest)
```













