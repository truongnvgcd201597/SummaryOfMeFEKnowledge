# useCallBack:

## 1. useCallback là gì?

> Hook useCallback trong ReactJS được sử dụng để memoize (tối ưu) một hàm callback. Nó giúp tránh việc tạo lại hàm callback mới trong mỗi lần render của component, đặc biệt khi hàm callback được truyền vào các component con thông qua props.

Khi sử dụng useCallback, bạn cần truyền vào một hàm callback và một mảng dependencies. useCallback sẽ trả về một phiên bản memoized của hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useCallback sẽ trả về cùng một phiên bản hàm callback đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc render lại của các component con, đặc biệt khi component cha render lại mà không cần tạo lại hàm callback và truyền vào component con.

```js
import React, { useCallback } from "react";

function MyComponent() {
  const handleClick = useCallback(() => {
    // Xử lý logic khi click
    console.log("Button clicked");
  }, []); // Không có dependency, hàm callback được memoize một lần và không thay đổi

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

Khi sử dụng React.memo, bạn cũng có thể cung cấp một hàm so sánh dependencies tùy chỉnh để xác định liệu component có cần render lại hay không dựa trên các điều kiện đặc biệt. Dưới đây là một ví dụ:

```js
import React from "react";

const isEqual = (prevProps, nextProps) => {
  // Kiểm tra sự khác biệt giữa prevProps và nextProps
  // Trả về true nếu các props khác biệt, ngược lại trả về false
};

const MyComponent = React.memo(({ name, age }) => {
  console.log("Rendering MyComponent");
  return (
    <div>
      Hello, {name}! You are {age} years old.
    </div>
  );
}, isEqual);
```

Trong ví dụ trên, hàm handleClick được memoize bởi useCallback và không thay đổi giữa các lần render của MyComponent. Điều này giúp giảm số lượng render lại không cần thiết của các component con khi component cha render lại.

## 2. Deep dive:

### 1. Updating state from a memoized callback:

Đôi khi, chúng ta có thể cần cập nhật state dựa trên state trước đó từ một callback được memoize.

Hàm **handleAddTodo** sau đây xác định todos là một dependency vì nó tính toán todos tiếp theo từ nó:

```js
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback(
    (text) => {
      const newTodo = { id: nextId++, text };
      setTodos([...todos, newTodo]);
    },
    [todos]
  );
  // ...
}
```

Thường thì ta muốn các hàm được memoize có ít dependency nhất có thể. Khi ta chỉ đọc một state để tính toán state tiếp theo, chúng ta có thể loại bỏ dependency đó bằng cách truyền một hàm cập nhật state (updater function) thay vì giá trị state:

```js
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos((todos) => [...todos, newTodo]);
  }, []); // ✅ Không cần dependency todos
  // ...
}
```

### 2. Preventing an Effect from firing too often:

Đôi khi, chúng ta có thể muốn gọi một function từ bên trong một Effect.

```js
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    // ...
```

Đoạn code trên gặp một vấn đề. Mọi giá trị phải được khai báo là dependency của Effect. Tuy nhiên, nếu chúng ta khai báo `createOptions` là một dependency, nó sẽ khiến cho Effect của bạn liên tục kết nối lại với chat room.

```js
useEffect(() => {
  const options = createOptions();
  const connection = createConnection();
  connection.connect();
  return () => connection.disconnect();
}, [createOptions]); // 🔴 Vấn đề: Dependency này thay đổi trong mỗi lần render
// ...
```

Để giải quyết vấn đề này, ta có thể wrap hàm mà ta cần gọi từ một Effect trong `useCallback`.

```js
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Only changes when createOptions changes
  // ...
```

Điều này đảm bảo rằng hàm `createOptions` sẽ không thay đổi giữa các lần render nếu `roomId` không thay đổi. Tuy nhiên, tốt hơn cả là loại bỏ sự cần thiết của dependency cho hàm. Di chuyển hàm vào bên trong Effect:

```js
useEffect(() => {
  function createOptions() {
    // ✅ Không cần useCallback hay dependency cho hàm!
    return {
      serverUrl: "https://localhost:1234",
      roomId: roomId,
    };
  }

  const options = createOptions();
  const connection = createConnection();
  connection.connect();
  return () => connection.disconnect();
}, [roomId]); // ✅ Chỉ thay đổi khi roomId thay đổi
// ...
```

Bây giờ, mã của bạn đơn giản hơn và không cần `useCallback`. Tìm hiểu thêm về việc loại bỏ các dependency của Effect.

# 3. Troubleshooting:

### 1. Mỗi khi component render, `useCallback` trả về một function khác:

**Hãy chắc chắn rằng ta đã chỉ định mảng dependency là đối số thứ hai!**
Nếu chúng ta quên mảng dependency, useCallback sẽ trả về một hàm mới mỗi lần:

```js
function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }); // 🔴 Trả về một hàm mới mỗi lần: không có mảng dependency
  // ...
```

Chúng ta có thể sửa đúng bằng cách truyền mảng dependency làm đối số thứ hai:

```js
function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ✅ Không trả về một hàm mới một cách không cần thiết
  // ...
```

Nếu không được, thì vấn đề đó là ít nhất một trong số các dependency khác so với lần render trước đó. Chúng ta có thể gỡ lỗi bằng cách ghi log thủ công các dependency vào console:

```js
const handleSubmit = useCallback(
  (orderDetails) => {
    // ..
  },
  [productId, referrer]
);

console.log([productId, referrer]);
```

Sau đó, ta nhấp chuột phải vào các mảng từ các lần render khác nhau trong console và chọn `Store as a global variable` cho cả hai mảng. Giả sử mảng đầu tiên được lưu trữ dưới dạng temp1 và mảng thứ hai được lưu trữ dưới dạng temp2, bạn có thể sử dụng console của trình duyệt để kiểm tra xem mỗi dependency trong cả hai mảng có giống nhau không:

```js
Object.is(temp1[0], temp2[0]); // Dependency đầu tiên có giống nhau không?
Object.is(temp1[1], temp2[1]); // Dependency thứ hai có giống nhau không?
Object.is(temp1[2], temp2[2]); // ... và tiếp tục cho từng dependency ...
```

### 2. Gọi useCallback cho từng list item trong vòng lặp, nhưng điều đó không được phép:

Giả sử thành phần Chart được bao bọc bởi `memo`. Ta muốn bỏ qua việc render lại mỗi Chart trong danh sách khi thành phần ReportList render lại. Tuy nhiên, chúng ta không thể gọi useCallback trong một vòng lặp như sau:

```js
function ReportList({ items }) {
  return (
    <article>
      {items.map((item) => {
        // 🔴 Bạn không thể gọi useCallback trong một vòng lặp như thế này:
        const handleClick = useCallback(() => {
          sendReport(item);
        }, [item]);

        return (
          <figure key={item.id}>
            <Chart onClick={handleClick} />
          </figure>
        );
      })}
    </article>
  );
}
```

Thay vào đó, hãy tạo một component riêng cho mỗi mục và đặt `useCallback` ở đó:

```js
function ReportList({ items }) {
  return (
    <article>
      {items.map((item) => (
        <Report key={item.id} item={item} />
      ))}
    </article>
  );
}

function Report({ item }) {
  // ✅ Gọi useCallback ở cấp độ cao nhất:
  const handleClick = useCallback(() => {
    sendReport(item);
  }, [item]);

  return (
    <figure>
      <Chart onClick={handleClick} />
    </figure>
  );
}
```

Một cách khác, ta có thể loại bỏ **useCallback** trong đoạn mã cuối và thay vào đó wrap Report bằng memo. Nếu prop item không thay đổi, Report sẽ bỏ qua việc render lại, do đó Chart cũng sẽ bỏ qua việc render lại:

```js
function ReportList({ items }) {
  // ...
}

const Report = memo(function Report({ item }) {
  function handleClick() {
    sendReport(item);
  }

  return (
    <figure>
      <Chart onClick={handleClick} />
    </figure>
  );
});
```

# 2. memo:

> React.memo() là một Higher Order Component (HOC) trong React.js được sử dụng để tối ưu hóa việc render lại của component. Nó giúp tránh việc render lại không cần thiết khi các props của component không thay đổi.

Khi một component được bao bọc bởi React.memo(), nó sẽ kiểm tra các props được truyền vào và chỉ render lại component khi có sự thay đổi trong các props đó. Nếu không có sự thay đổi, React.memo() sẽ sử dụng kết quả render trước đó và tránh quá trình render lại không cần thiết, giúp cải thiện hiệu suất ứng dụng.

```js
import React from "react";

const MyComponent = React.memo(({ prop1, prop2 }) => {
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
});
```

Trong ví dụ trên, MyComponent được bao bọc bởi React.memo(). Khi các props prop1 và prop2 không thay đổi, component sẽ không được render lại. Chỉ khi có sự thay đổi trong các props này, component mới được render lại.

React.memo() sử dụng shallow comparison (so sánh nông) để kiểm tra sự thay đổi của props. Điều này có nghĩa là nó chỉ so sánh giá trị của các props nguyên thủy (primitive values) hoặc tham chiếu (references) và không kiểm tra sâu vào cấu trúc dữ liệu phức tạp hơn như đối tượng (objects) hay mảng (arrays). Nếu các props có cấu trúc phức tạp và bạn muốn kiểm tra sâu hơn, bạn có thể sử dụng useCallback() hoặc useMemo() để tối ưu hóa.

Lưu ý rằng React.memo() chỉ tối ưu hóa việc render lại của component và không ảnh hưởng đến việc xử lý logic bên trong component.

# 3. useMemo:

> useMemo trong ReactJS được sử dụng để memoize (tối ưu) giá trị của một biểu thức. Nó giúp tránh tính toán lại giá trị trong mỗi lần render của component, đặc biệt khi giá trị đó được sử dụng trong các phần tử JSX hoặc tính toán phức tạp.

Khi sử dụng useMemo, bạn cần truyền vào một hàm callback và một mảng dependencies. useMemo sẽ thực thi hàm callback và trả về giá trị được tính toán từ hàm callback đó. Nếu các dependencies không thay đổi giữa các lần render, useMemo sẽ trả về cùng một giá trị đã được memoize từ lần render trước đó.

Điều này giúp giảm hiệu năng và tối ưu việc tính toán của các giá trị trong component, đặc biệt khi component render lại mà không cần tính toán lại giá trị đó.

Ví dụ sử dụng useMemo:

```js
import React, { useMemo } from "react";

function MyComponent() {
  const expensiveValue = useMemo(() => {
    // Tính toán giá trị phức tạp
    console.log("Calculating expensive value");
    return someExpensiveCalculation();
  }, []); // Không có dependency, giá trị được memoize một lần và không thay đổi

  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
    </div>
  );
}
```

Trong ví dụ trên, giá trị expensiveValue được memoize bởi useMemo và không thay đổi giữa các lần render của MyComponent. Điều này giúp giảm số lượng tính toán không cần thiết khi component render lại và chỉ tính toán lại khi các dependencies thay đổi.

# So sánh useCallback và useMemo:

## 1. Giống nhau:

- Tối ưu hóa tính toán: Cả useCallback và useMemo đều giúp tránh tính toán lại giá trị trong mỗi lần render của component, đảm bảo rằng chỉ tính toán lại khi các dependencies thay đổi.
- Sử dụng dependencies: Cả useCallback và useMemo đều nhận một mảng dependencies làm đối số cuối cùng. Khi các dependencies không thay đổi, cả hai hook đều trả về giá trị đã được memoize từ lần render trước đó.
- Tăng hiệu suất: Cả useCallback và useMemo đều giúp giảm số lượng tính toán không cần thiết và tăng hiệu suất của các component.
- Sử dụng trong functional component: Cả useCallback và useMemo đều chỉ có thể được sử dụng trong functional component.

## 2. Khác nhau:

- Tối ưu hóa hàm callback và giá trị: useCallback được sử dụng để tối ưu hóa hàm callback, trong khi useMemo được sử dụng để tối ưu hóa giá trị.
- Giá trị trả về: useCallback trả về một hàm callback, trong khi useMemo trả về một giá trị.
- Sử dụng trong các trường hợp khác nhau: useCallback được sử dụng khi bạn muốn tối ưu hóa hàm callback, trong khi useMemo được sử dụng khi bạn muốn tối ưu hóa giá trị.
