# Custom Hook:

## 1. Custom Hook là gì?
> Custom Hook là một hàm JavaScript bình thường, nhưng nó sử dụng các hàm Hook khác bên trong nó. Custom Hook giúp tái sử dụng logic giữa các component khác nhau một cách dễ dàng. Nó cho phép bạn viết logic riêng của mình và tái sử dụng nó trong nhiều component khác nhau.

Custom Hook là một function bắt đầu bằng từ `"use"` và có thể sử dụng các React Hooks khác hoặc custom Hooks khác như useState, ... Bằng cách tách riêng logic thành các custom Hook, bạn có thể tăng tính tổ chức, đơn giản hóa component chính và tăng khả năng tái sử dụng của code. Custom Hook không thể được sử dụng trong các class component, nhưng bạn có thể sử dụng nó trong các functional component. 

Ví dụ, sau đây là một custom Hook đơn giản để đếm số lần một button được nhấp:
```
import { useState } from 'react';

const useClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return [count, handleClick];
};

export default useClickCounter;
```
Sau khi bạn đã tạo custom Hook này, bạn có thể sử dụng nó trong các component khác nhau như sau:
```
import React from 'react';
import useClickCounter from './useClickCounter';

const ButtonComponent = () => {
  const [count, handleClick] = useClickCounter();

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  );
};

export default ButtonComponent;
```
Custom Hook giúp bạn tránh việc lặp lại code và quản lý logic state và side effect một cách hiệu quả trong các component của bạn.

## 2. Khi nào nên sử dụng Custom Hook?
Custom Hooks trong React được sử dụng khi bạn muốn tái sử dụng logic state và side effect trong các functional component khác nhau. Dưới đây là một số trường hợp khi nên sử dụng Custom Hooks:
- Logic phức tạp và tái sử dụng: Khi bạn có một đoạn mã logic phức tạp và muốn tái sử dụng nó trong nhiều component khác nhau, bạn có thể tạo một Custom Hook để đóng gói logic đó và sử dụng lại trong các component cần thiết.
- Quản lý state và side effect: Custom Hook cho phép bạn quản lý state và side effect trong functional component mà không cần phải sử dụng class component. Bạn có thể tạo Custom Hook để xử lý logic như gọi API, đăng ký và hủy đăng ký các sự kiện, hoặc theo dõi thay đổi của một giá trị.
- Tách riêng logic: Khi component của bạn trở nên quá lớn và phức tạp, bạn có thể sử dụng Custom Hook để tách riêng phần logic ra và giữ cho component gọn gàng và dễ đọc.
- Chia sẻ logic giữa các component: Nếu bạn có nhiều component có cùng một logic hoặc cùng chia sẻ một phần của state và side effect, bạn có thể tạo một Custom Hook để chia sẻ logic đó giữa các component đó.
- Tuy nhiên, hãy lưu ý rằng Custom Hooks không phải lúc nào cũng phù hợp. Khi logic của bạn chỉ đơn giản và không cần sự tái sử dụng, bạn có thể sử dụng các React Hooks có sẵn như useState, useEffect, useContext, ... mà không cần tạo Custom Hook riêng.




