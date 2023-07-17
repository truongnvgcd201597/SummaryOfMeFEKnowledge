# Higher Order Component

## 1. Higher Order Function là gì?

Higher Order Function (HOF) là một khái niệm trong lập trình hàm, trong đó một hàm được xem như một giá trị và có thể nhận một hàm khác làm đối số hoặc trả về một hàm khác.

Một HOF có thể thực hiện các hành động như:

- Nhận một hàm làm đối số: Một HOF có thể nhận một hàm khác làm đối số và sử dụng nó trong phạm vi của nó. `.map()`, `.filter()` và `.reduce()` là các ví dụ về HOF trong JavaScript.
- Trả về một hàm: Một HOF có thể trả về một hàm khác, thường là dựa trên các đối số hoặc logic được cung cấp cho nó.

Ví dụ về một HOF đơn giản là map trong JavaScript. Phương thức map của một mảng nhận một hàm làm đối số và trả về một mảng mới với các phần tử đã được biến đổi bằng cách áp dụng hàm đó lên từng phần tử.

```js
// HOF nhận một hàm khác làm đối số và thực thi nó
function higherOrderFunction(callback) {
  // Thực thi hàm callback và truyền đối số cho nó
  callback("Hello, world!");
}

// Hàm callback được truyền vào là một tham số của HOF
function callbackFunction(message) {
  console.log(message);
}

// Gọi HOF và truyền hàm callback là callbackFunction
higherOrderFunction(callbackFunction);
```

## 2. Higher Order Component là gì?

> Higher Order Component (HOC) là một mẫu thiết kế React để tái sử dụng logic và chức năng trong các thành phần của ứng dụng. HOC là một hàm nhận đầu vào một component và trả về một component mới.
> ![](https://www.developerway.com/assets/higher-order-components/example.png)

HOC cho phép áp dụng logic chung cho nhiều thành phần khác nhau mà không cần sao chép mã hoặc viết lại cùng một logic nhiều lần. Thay vào đó, ta có thể đóng gói logic vào một HOC và sử dụng nó để bao bọc các thành phần khác.

Khi áp dụng một HOC cho một thành phần, nó tạo ra một thành phần mới với các thuộc tính và phương thức bổ sung. HOC có thể thay đổi cách mà thành phần hoạt động, bổ sung props, xử lý sự kiện, hoặc thậm chí thay đổi trạng thái của thành phần.

## 2. Sử dụng HOC:

Để sử dụng Higher Order Component (HOC) trong React, bạn cần làm những bước sau:

### 1. Tạo một HOC:

Đầu tiên, bạn cần tạo một HOC bằng cách viết một hàm. Hàm này sẽ nhận một component làm đầu vào và trả về một component mới.

```js
function withHOC(WrappedComponent) {
  // Xử lý logic và chức năng ở đây
  // Có thể bổ sung props, xử lý sự kiện, thay đổi trạng thái, v.v.

  // Trả về thành phần mới bao bọc (wrapped) WrappedComponent
  return function HOCComponent(props) {
    // Xử lý logic và chức năng ở đây nếu cần thiết

    // Trả về WrappedComponent với các props bổ sung
    return <WrappedComponent {...props} />;
  };
}
```

### 2. Áp dụng HOC cho một thành phần:

Sau khi tạo HOC, bạn có thể áp dụng nó cho một thành phần bất kỳ bằng cách gọi hàm HOC và truyền thành phần đó làm đối số.

```js
const EnhancedComponent = withHOC(OriginalComponent);
```

Ở đây, OriginalComponent là thành phần ban đầu và EnhancedComponent là thành phần mới được tạo ra bởi HOC. EnhancedComponent sẽ có các logic và chức năng được xử lý bởi HOC.

### 3. Sử dụng component mới:

Bây giờ, bạn có thể sử dụng EnhancedComponent trong ứng dụng của bạn như một thành phần React bình thường.

```js
function App() {
  return (
    <div>
      <EnhancedComponent />
    </div>
  );
}
```

Thành phần EnhancedComponent sẽ có các tính năng và logic mà bạn đã xử lý trong HOC.

Lưu ý rằng bạn có thể áp dụng nhiều HOC cho cùng một thành phần. Khi đó, thành phần sẽ được bọc bởi các HOC theo thứ tự từ trong ra ngoài.

```js
const EnhancedComponent = withHOC1(withHOC2(OriginalComponent));
```

Việc sử dụng HOC giúp tách biệt logic và chức năng, tăng tính tái sử dụng và giúp mã của bạn dễ đọc và quản lý hơn trong React.

### 4. Omit trong TypeScript:

**Omit<T, K>** là một loại tiện ích kiểu dữ liệu được cung cấp sẵn để tạo ra một phiên bản mới của kiểu T, loại bỏ các thuộc tính được chỉ định bởi tập hợp K.

Ví dụ, giả sử bạn có một kiểu dữ liệu như sau:

```js
interface Person {
  name: string;
  age: number;
  address: string;
}
```

Nếu bạn muốn tạo một phiên bản mới của Person mà không có thuộc tính address, bạn có thể sử dụng Omit như sau:

```js
type NewPerson = Omit<Person, "address">;
```

Kết quả là NewPerson sẽ có cùng cấu trúc như Person, nhưng không có thuộc tính address.

```js
{
  name: string;
  age: number;
}
```

**keyof** được sử dụng để lấy tập hợp các khóa (keys) của kiểu T, sau đó tập hợp này được so sánh với tập hợp K. Các khóa trong K sẽ bị loại bỏ khỏi kiểu T.
Nếu bạn muốn tạo một phiên bản mới của Person mà loại bỏ thuộc tính address, bạn có thể sử dụng Omit và keyof như sau:
