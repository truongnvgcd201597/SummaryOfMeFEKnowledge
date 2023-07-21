# Render Props

## 1. Render Props là gì:

> Kỹ thuật "render props" (render-props pattern) là một mẫu thiết kế trong ReactJS cho phép bạn truyền một hàm vào một component thông qua prop, và component này sẽ gọi hàm đó và trả về kết quả như là một phần tử JSX. Hàm được truyền vào thông qua prop được gọi là "render prop."

Render props pattern cho phép tái sử dụng logic và chia sẻ dữ liệu giữa các component một cách linh hoạt và mạnh mẽ. Nó giúp tách biệt logic xử lý dữ liệu và hiển thị phần giao diện, giúp code trở nên dễ đọc và dễ bảo trì.

## 2. Ví dụ:

```js
import React from "react";

// Component có render prop
const RenderPropsComponent = ({ render }) => {
  const data = "Dữ liệu từ RenderPropsComponent";
  return <div>{render(data)}</div>;
};

const App = () => {
  // RenderPropsComponent được sử dụng với render prop
  return (
    <div>
      <RenderPropsComponent render={(data) => <p>{data}</p>} />
    </div>
  );
};

export default App;
```

- **RenderPropsComponent** là một component nhận một prop là render. Nó sẽ gọi hàm render và trả về kết quả của hàm đó như là một phần tử JSX. Hàm render nhận một tham số data và trả về một phần tử JSX với dữ liệu đó.
- Trong App component, chúng ta sử dụng RenderPropsComponent và truyền một hàm vào props render. Hàm này nhận dữ liệu từ RenderPropsComponent và trả về một phần tử <p> hiển thị dữ liệu đó.
