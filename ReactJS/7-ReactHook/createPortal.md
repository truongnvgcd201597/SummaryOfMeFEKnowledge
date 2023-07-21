# createPortal

## 1. createPortal

> createPortal là một phương thức trong module `react-dom` dùng để đưa một element vào một node trong cây DOM nằm ngoài thành phần gốc của ứng dụng React. Phương thức này cho phép bạn render một phần tử ở bất kỳ nơi nào trong cây DOM mà bạn muốn, không chỉ bên trong component gốc.

## 2. Cú pháp

```js
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // Phần tử modalRoot là một nút bên ngoài thành phần gốc của ứng dụng, chẳng hạn như một div
  const modalRoot = document.getElementById("modal-root");

  // Sử dụng createPortal để render phần tử vào nút modalRoot
  return createPortal(children, modalRoot);
};

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      {/* Các phần tử khác trong ứng dụng */}
      <Modal>{/* Nội dung modal */}</Modal>
    </div>
  );
};
```

- `createPortal` nhận vào 2 tham số:
  - `children`: là phần tử cần render.
  - `container`: là nút DOM mà phần tử sẽ được render vào.

Trong ví dụ trên, chúng ta tạo một thành phần Modal và sử dụng `createPortal` để đưa nội dung modal vào một phần tử có id="modal-root" nằm bên ngoài component gốc của ứng dụng. Việc này giúp modal được render vào vùng nằm bên ngoài các thành phần khác trong ứng dụng.
