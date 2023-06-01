# useState là gì?

## 1.Định nghĩa:
Trong ReactJS, useState là một hook được sử dụng để giữ và quản lý trạng thái (state) trong functional components.

Cú pháp sử dụng useState như sau:
```
const [state, setState] = useState(initialState);
```

- state là biến lưu trữ trạng thái.
- setState là hàm được sử dụng để cập nhật giá trị của state.
- initialState là giá trị khởi tạo ban đầu cho state.

Khi useState được gọi, nó trả về một mảng gồm hai phần tử: giá trị hiện tại của state và hàm setState để cập nhật state. Ban đầu, state sẽ có giá trị là initialState.

Ví dụ:
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
Trong ví dụ trên, chúng ta sử dụng useState để khởi tạo count với giá trị ban đầu là 0. Khi người dùng nhấn vào nút "Increment", hàm increment được gọi và setCount được sử dụng để cập nhật giá trị của count. Sau đó, giao diện người dùng sẽ được cập nhật để hiển thị giá trị mới của count.

```
function useState(initialValue) {
    let _val = initialValue
    function state() {
        return _val
    }
    function setState(newVal) {
        _val = newVal
    }
    return [state, setState]
}

const [count, setCount] = useState(1)
console.log(count()) // 1
setCount(5)
console.log(count()) // 2
```

### Functional Component:
```
function ColorBox() {
    const [share, setShape] = useState('square');
    const [color, setColor] = useState('deeppink');
    function handleBoxClick() {
        setColor('green');
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        ></div>
    );
}
```
### Class Component:
```
class ColorBox extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shape: 'square',
            color: 'deeppink',
        };
    }
    handleBoxClick() {
        this.setState({ color: 'green' });
    };
    render() {
        const { color } = this.state;
        return (
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={this.handleBoxClick}
            ></div>
        )
    }
}
```

## 7. Lưu ý khi sử dụng useState Hook:
