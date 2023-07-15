# useContext

## 1. useContext là gì?

> **useContext** là một hook được cung cấp bởi thư viện React để truy cập vào giá trị của một Context. Context trong React là một cách để chia sẻ dữ liệu giữa các thành phần con mà không cần truyền qua các thành phần cha trung gian.

## 2. Cách sử dụng:

Để sử dụng useContext, bạn cần thực hiện các bước sau:

- Bước 1: Định nghĩa một Context: Sử dụng React.createContext() để tạo một Context mới. Ví dụ:

```
const MyContext = React.createContext();
```

- Bước 2: Quyết định xem Context vừa được tạo sẽ được sử dụng ở đâu, bằng cách bọc các thành phần con bên trong Context.Provider bên ngoài component đó thì các thành phần con đó sẽ có thể truy cập vào Context đó. Ví dụ:

- Bước 3: Sử dụng useContext để truy cập vào giá trị của Context, hay còn gọi là Consumer. Có 2 cách để lấy giá trị của Context:

  - useContext(MyContext): Truyền vào một Context, trả về giá trị của Context đó.
  - Sử dụng <[Tên context].Consumer>(Ví dụ AppContext.Consumer) để lấy giá trị của Context. (Áp dụng đối với Class Component)

## 3. Ví dụ:

```js
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
```

Trong ví dụ này, chúng tôi tạo một **UserContext** bằng cách sử dụng **createContext**, sau đó sử dụng Nhà cung cấp để bao bọc cây các thành phần cần bối cảnh trạng thái. Trong Component5, chúng tôi sử dụng useContext Hook để truy cập ngữ cảnh người dùng
