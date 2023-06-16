# insertAdjecent (DOM)

Phương thức insertAdjacentHTML() và insertAdjacentElement() được sử dụng để chèn nội dung hoặc phần tử vào vị trí xung quanh một phần tử DOM.

## 1. insertAdjacentElement:
Phương thức này cho phép bạn chèn chuỗi HTML vào vị trí xung quanh phần tử DOM. Cú pháp của insertAdjacentHTML() như sau:
```
element.insertAdjacentHTML(position, html);
```
Trong đó:
- element là phần tử DOM mà bạn muốn chèn nội dung HTML vào.
- position là một chuỗi định nghĩa vị trí chèn nội dung, có thể là một trong các giá trị sau:
  - 'beforebegin': Chèn nội dung trước phần tử (nằm ngay trước phần tử mục tiêu).
  - 'afterbegin': Chèn nội dung vào bên trong phần tử, ngay sau phần tử con đầu tiên.
  - 'beforeend': Chèn nội dung vào bên trong phần tử, ngay trước phần tử con cuối cùng.
  - 'afterend': Chèn nội dung ngay sau phần tử (nằm ngay sau phần tử mục tiêu).
- html là chuỗi HTML mà bạn muốn chèn.

Ví dụ:
```
const targetElement = document.getElementById('myElement');
const htmlContent = '<span>Chèn nội dung HTML</span>';

targetElement.insertAdjacentHTML('beforeend', htmlContent);
```

## 2. insertAdjacentElement(): 
> Phương thức này cho phép bạn chèn một phần tử DOM vào vị trí xung quanh phần tử DOM. 

Cú pháp của insertAdjacentElement() như sau:
```
element.insertAdjacentElement(position, elementToInsert);
```

Trong đó:
- `element` là phần tử DOM mà bạn muốn chèn phần tử con vào.
- `position` là một chuỗi định nghĩa vị trí chèn phần tử con, giống như trong insertAdjacentHTML().
- `elementToInsert` là phần tử DOM bạn muốn chèn.

Ví dụ:
```
const targetElement = document.getElementById('myElement');
const elementToInsert = document.createElement('div');
elementToInsert.textContent = 'Chèn phần tử con';

targetElement.insertAdjacentElement('beforeend', elementToInsert);
```

Sử dụng insertAdjacentHTML() và insertAdjacentElement(), bạn có thể linh hoạt chèn nội dung HTML hoặc các phần tử DOM vào vị trí mong muốn trong cấu trúc DOM hiện có. Điều này cho phép bạn thực hiện các thay đổi động trên trang web của mình một cách dễ dàng.




