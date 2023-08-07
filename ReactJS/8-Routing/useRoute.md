# useRoute

## 1. useRoute là gì?

> useRoutes là một hook được cung cấp bởi thư viện React Router. Nó được sử dụng để xác định và kết xuất các thành phần phù hợp với các đường dẫn (routes) được xác định trong ứng dụng React của bạn.

## 2. Cách sử dụng useRoute:

Khi sử dụng useRoutes, bạn có thể xác định một cấu trúc đường dẫn (route structure) cho ứng dụng của mình bằng cách cung cấp một mảng các đối tượng route. Mỗi đối tượng route đại diện cho một đường dẫn và nó sẽ chỉ định thành phần (component) nào được kết xuất khi đường dẫn tương ứng được khớp.

Ví dụ, sau đây là cách bạn có thể sử dụng useRoutes trong ứng dụng React:

```ts
import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const routing = useRoutes(routes);

  return <Router>{routing}</Router>;
}

export default App;
```

Trong ví dụ trên, chúng ta đã xác định ba route:

- Route đầu tiên (path: '/') sẽ hiển thị thành phần <Home /> khi đường dẫn trùng khớp với /.
- Route thứ hai (path: '/about') sẽ hiển thị thành phần <About /> khi đường dẫn trùng khớp với /about.
- Route cuối cùng (path: '\*') là route mặc định, sẽ hiển thị thành phần <NotFound /> khi không có đường dẫn nào khớp với các route trước đó.

Cuối cùng, chúng ta sử dụng hook useRoutes để xác định thành phần cần được kết xuất dựa trên đường dẫn hiện tại và gán kết quả trả về từ hook đó vào trong thẻ <Router>.
