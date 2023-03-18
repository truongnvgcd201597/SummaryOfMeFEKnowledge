# AddEventListener:

## 1. Định nghĩa:
> addEventListener là một phương thức trong JavaScript được sử dụng để thêm một hàm xử lý sự kiện vào một phần tử trên trang web. Phương thức này cho phép bạn xác định loại sự kiện (ví dụ: click, hover, keydown,…) và hàm xử lý sự kiện được gọi khi sự kiện đó xảy ra trên phần tử đó.

## 2. Cú pháp:
```
element.addEventListener(event, function, useCapture);
```

Trong đó:
- element: là phần tử trên trang web mà bạn muốn thêm sự kiện vào.
- event: là tên của sự kiện (ví dụ: click, hover, keydown,…) mà bạn muốn bắt.
- function: là hàm xử lý sự kiện được gọi khi sự kiện đó xảy ra.
- useCapture: là một giá trị boolean (true hoặc false) xác định liệu sự kiện có sử dụng chế độ bắt lồng nhau hay không (nếu true, sự kiện được bắt ở chế độ bắt lồng nhau, nếu false thì ngược lại).

## 3. Ví dụ:
```
const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', function() {
  console.log('Button clicked');
});
```
Trong ví dụ này, khi người dùng click vào button có id là myButton, hàm xử lý được định nghĩa bên trong addEventListener sẽ được gọi và hiển thị thông báo "Button clicked" trên console.

## 4. Các sự kiện thường gặp:
- click: sự kiện được gọi khi người dùng click vào phần tử.
- mouseover: sự kiện được gọi khi con trỏ chuột di chuyển qua phần tử.
- mouseout: sự kiện được gọi khi con trỏ chuột di chuyển ra khỏi phần tử.
- keydown: sự kiện được gọi khi người dùng nhấn một phím bất kỳ trên bàn phím.
- keyup: sự kiện được gọi khi người dùng nhả phím bất kỳ trên bàn phím.
- keypress: sự kiện được gọi khi người dùng nhấn và nhả một phím bất kỳ trên bàn phím.
- focus: sự kiện được gọi khi phần tử được focus vào.
- blur: sự kiện được gọi khi phần tử bị mất focus.
- change: sự kiện được gọi khi giá trị của phần tử thay đổi.
- submit: sự kiện được gọi khi người dùng submit form.
- load: sự kiện được gọi khi trang web được tải xong.
- resize: sự kiện được gọi khi kích thước của trình duyệt thay đổi.
- scroll: sự kiện được gọi khi người dùng cuộn trang web.
- contextmenu: sự kiện được gọi khi người dùng click chuột phải vào phần tử.
- copy: sự kiện được gọi khi người dùng copy nội dung của phần tử.
- cut: sự kiện được gọi khi người dùng cắt nội dung của phần tử.
- paste: sự kiện được gọi khi người dùng dán nội dung vào phần tử.
- drag: sự kiện được gọi khi người dùng kéo phần tử.
- dragend: sự kiện được gọi khi người dùng kết thúc việc kéo phần tử.
- dragenter: sự kiện được gọi khi con trỏ chuột di chuyển vào phần tử được kéo.
- dragleave: sự kiện được gọi khi con trỏ chuột di chuyển ra khỏi phần tử được kéo.
- dragover: sự kiện được gọi khi con trỏ chuột di chuyển qua phần tử được kéo.
- dragstart: sự kiện được gọi khi người dùng bắt đầu kéo phần tử.
- drop: sự kiện được gọi khi người dùng thả phần tử được kéo vào phần tử khác.
- touchstart: sự kiện được gọi khi người dùng bắt đầu chạm vào màn hình.
- touchmove: sự kiện được gọi khi người dùng di chuyển ngón tay trên màn hình.
- touchend: sự kiện được gọi khi người dùng kết thúc việc chạm vào màn hình.
- touchcancel: sự kiện được gọi khi người dùng hủy việc chạm vào màn hình.
- transitionend: sự kiện được gọi khi một hiệu ứng chuyển động kết thúc.


