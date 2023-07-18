# useRef

## 1. useRef là gì?

> **useRef** là một hook được tạo ra một tham chiếu (ref). Tham chiếu này có thể được sử dụng để `lưu trữ` và `truy cập` vào các giá trị hoặc tham chiếu tới phần tử DOM hoặc các instance của component.

![](https://lh5.googleusercontent.com/8HDHXNu36iOcTygBWFh391Ic-hRHZYyBfN9tR3JiJpwgn-5YqJeb90ZA4RZ2AiYIC0iDC4mLvHDk6P6Kay_IJJkcaA3SGpX2PJG9YNuV9vJ8Qlthy1FamIViwSLtafDWwV20IOGy8GHMg15tHbl6J32z5qQvnpJD8YSQfMcS1mgRz4K69_7pRVCqpQ)

## 2. useRef có tác dụng gì?

### 2.1. **useRef** có tác dụng giống như **useState** nhưng **không gây ra re-render** khi thay đổi giá trị của nó.

#### 2.2.1. mutable là gì?

> **mutable** là một object có thể thay đổi giá trị của nó sau khi được khởi tạo mà không làm thay đổi địa chỉ tham chiếu của nó.

```js
const obj = { name: "Nguyen Van A" };
obj.name = "Nguyen Van B";
console.log(obj); // { name: 'Nguyen Van B' }
```

### 2.2 `state` hay `props` thì không được mutable:

Chúng ta sử dụng `state` để lưu trữ giá trị thay đổi theo thời gian và chúng ta không mutate state, chúng ta thay thế state bằng một giá trị mới với tham chiếu mới kết hợp dùng set state để nói cho React biết

```js
import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
```

update lại state sẽ làm cho component re-render lại

Và chúng ta vẫn có thể mutate state trong trường hợp mà không muốn re-render lại component, nhưng không nên làm vậy, vì chúng ta sẽ không kiểm soát được state, rất dễ sinh bug. Và useState của react không sinh ra để chúng ta làm vậy.

- Tham chiếu ref sẽ không làm thay đổi mỗi khi re-render (không như biến thông thường, bị reset mỗi khi re-render)
- Thay đổi nó sẽ không gây ra re-render (không như state, props)
- Thông tin được bao gói bên trong component (không như biến thông thường, có thể truy cập từ bên ngoài component)
- functional component không thể sử dụng useRef, thay vào đó chúng ta sử dụng **useImperativeHandle** để tạo ra một tham chiếu tới component.

## 3. Những trường hợp cần lưu ý khi sử dụng useRef:

### 3.1 Không nên ghi hay đọc `useRef.current` trong quá trình render:

```js
function MyComponent() {
  const myRef = useRef(100);

  // 🚩 Không ghi ref suốt quá trình render
  myRef.current = 123;
  // ...
  // 🚩 Không đọc ref suốt quá trình render
  return <h1>{myOtherRef.current}</h1>;
}
```

Chúng ta có thể đọc ghi trong event handler, useEffect, callback của useState, nhưng không được đọc ghi trong quá trình render.

```js
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```
