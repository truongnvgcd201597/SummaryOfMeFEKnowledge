# Dynamic Route

## 1. Định nghĩa:

> Dynamic Route trong React Router là khái niệm được sử dụng để tạo ra các đường dẫn động trong ứng dụng React sử dụng thư viện React Router. Điều này cho phép chúng ta xác định các route mà không cần chỉ định cụ thể từng đường dẫn.

Để tạo một Dynamic Route, chúng ta sử dụng `path` syntax với một dynamic params được xác định bằng dấu hai chấm. Ví dụ, nếu chúng ta muốn tạo một Dynamic Route để hiển thị thông tin chi tiết về một sản phẩm, chúng ta có thể sử dụng một đường dẫn như sau:

```ts
<Route path="/products/:id" element={ProductDetail} />
```

**:id** là tham số động, đại diện cho bất kỳ giá trị nào trong đường dẫn. Khi đường dẫn khớp với mẫu `/products/:id`, React Router sẽ trích xuất giá trị của tham số id và chuyển nó thành một prop được truyền vào cho component ProductDetail.

Ví dụ, nếu URL là `/products/123`, thì `123` sẽ được trích xuất và truyền vào cho component **ProductDetail** như một prop. Chúng ta có thể truy cập vào giá trị này bên trong component **ProductDetail** bằng cách sử dụng `props.match.params`.id.

```ts
import React from "react";

const ProductDetail = (props) => {
  const { id } = props.match.params;

  // Sử dụng giá trị id để hiển thị thông tin chi tiết về sản phẩm
  // ...

  return (
    <div>
      <h1>Product Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
```

## 2. useParams:

> useParams là một hook dùng để truy cập và trích xuất các tham số động từ đường dẫn trong ứng dụng React. Để sử dụng useParams, bạn cần import nó từ thư viện React Router. Sau đó,sử dụng **useParams** trong component như một hook để truy cập vào các tham số động. Ví dụ, nếu bạn đang sử dụng Dynamic Route như sau:

```ts
<Route path="/products/:id" component={ProductDetail} />
```

Trong component ProductDetail, bạn có thể sử dụng useParams để trích xuất giá trị của tham số id như sau:

```ts
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Sử dụng giá trị id để hiển thị thông tin chi tiết về sản phẩm
  // ...

  return (
    <div>
      <h1>Product Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ProductDetail;
```

Trong ví dụ trên, `useParams` trả về một object chứa các dynamic param được trích xuất từ đường dẫn. Trong trường hợp này, chúng ta chỉ có một tham số id, vì vậy chúng ta trích xuất giá trị của id bằng cách sử dụng cú pháp `{ id } = useParams()`. Sau đó, chúng ta có thể sử dụng giá trị id để hiển thị thông tin chi tiết về sản phẩm hoặc thực hiện bất kỳ hành động nào cần thiết dựa trên giá trị này.
