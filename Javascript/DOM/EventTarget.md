# EventTarget

> EventTarget là một interface trong JavaScript, nó định nghĩa một đối tượng có thể nhận các sự kiện và xử lý chúng. Nó có một số phương thức để thêm và xóa các sự kiện và các hàm xử lý sự kiện, ví dụ như addEventListener và removeEventListener.

Các đối tượng trong JavaScript có thể kế thừa từ `EventTarget`, ví dụ như `Element`, `Document`, và `Window`. Điều này cho phép các đối tượng đó nhận và xử lý các sự kiện.

## 1. addEventListener:
> addEventListener là một phương thức của đối tượng EventTarget trong JavaScript, nó cho phép bạn thêm một hàm xử lý sự kiện cho một sự kiện cụ thể. Khi sự kiện đó xảy ra, hàm xử lý sự kiện sẽ được gọi.

Cú pháp của addEventListener là:
```
target.addEventListener(type, listener[, options]);
```

Trong đó:
- **target** là đối tượng EventTarget mà bạn muốn thêm sự kiện cho nó.
- **type** là chuỗi biểu thị tên của sự kiện, ví dụ như "click", "submit", "focus", etc.
- **listener** là hàm xử lý sự kiện, nó sẽ được gọi khi sự kiện đó xảy ra.
- **options** là một đối tượng chứa các tùy chọn cho sự kiện, ví dụ như capture, once, và passive.

Ví dụ:
```
const button = document.querySelector('button');

button.addEventListener('click', event => {
  console.log('Button was clicked');
});
```

Bạn có thể thêm nhiều hàm xử lý sự kiện cho cùng một sự kiện bằng cách gọi addEventListener nhiều lần. Mỗi lần gọi sẽ thêm một hàm xử lý sự kiện khác:
```
button.addEventListener('click', event => {
  console.log('Button was clicked (handler 1)');
});

button.addEventListener('click', event => {
  console.log('Button was clicked (handler 2)');
});
```
Khi người dùng click vào button, cả hai hàm xử lý sự kiện sẽ được gọi và log ra màn hình "Button was clicked (handler 1)" và "Button was clicked (handler 2)".

## 2. removeEventListener:
> removeEventListener là một phương thức của đối tượng `EventTarget` trong JavaScript, nó cho phép bạn xóa một hàm xử lý sự kiện đã được thêm vào trước đó.
```
target.removeEventListener(type, listener[, options]);
```

Trong đó:
- **target** là đối tượng EventTarget mà bạn muốn xóa sự kiện từ nó.
- **type** là chuỗi biểu thị tên của sự kiện, ví dụ như "click", "submit", "focus", etc.
- **listener** là hàm xử lý sự kiện cần xóa.
- **options** là một đối tượng chứa các tùy chọn cho sự kiện, ví dụ như `capture`, `once`, và `passive`. Nó phải khớp với các tùy chọn đã được sử dụng khi thêm sự kiện bằng addEventListener.

Ví dụ:


## 3. dispatchEvent:
> dispatchEvent() là một hàm của đối tượng EventTarget trong JavaScript. Nó cho phép bạn tạo một sự kiện và gửi nó cho một đối tượng cụ thể. Điều này có thể giúp bạn tạo ra các sự kiện tùy chỉnh hoặc gửi sự kiện đến các đối tượng khác trong trang web của bạn.

```
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button clicked');
});

// Tạo sự kiện tùy chỉnh và gửi nó đến button
const customEvent = new Event('custom');
button.dispatchEvent(customEvent);
```
Trong ví dụ trên, chúng ta đã thêm một sự kiện click cho nút và sau đó tạo một sự kiện tùy chỉnh và gửi nó đến nút bằng cách sử dụng dispatchEvent(). Khi sự kiện được gửi, nó sẽ được xử lý bởi hàm xử lý sự kiện đã được thêm cho sự kiện click.





