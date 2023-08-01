# createAction

## 1. createAction là gì?

> **createAction** là một hàm được cung cấp để tạo ra các action creators một cách dễ dàng và gọn gàng. Nó giúp giảm boilerplate code khi bạn cần tạo các action mà chỉ cần trả về payload của action.

Trong phiên bản Redux Toolkit 1.5.0 trở đi, createAction hỗ trợ thêm tham số là một callback prepare cho phép bạn thay đổi dữ liệu được truyền vào action. Tham số prepare có thể là một hàm đơn giản hoặc một thủ tục xử lý phức tạp, cho phép bạn chuẩn bị dữ liệu trước khi đưa vào action payload.

Cú pháp sử dụng:

```ts
import { createAction } from "@reduxjs/toolkit";

// Cú pháp sử dụng createAction với tham số prepare callback
const myAction = createAction("MY_ACTION_TYPE", prepareCallback);
```

- **myAction**: là action creator được tạo ra bởi createAction.
- **MY_ACTION_TYPE**: là type của action.
- **prepareCallback**: là một callback được gọi khi bạn gọi action creator. Nó nhận vào các tham số được truyền vào action creator và trả về một object chứa payload của action.

```ts
import { createAction } from "@reduxjs/toolkit";

const increment = createAction<number | undefined>("counter/increment");

let action = increment();
// { type: 'counter/increment' }

action = increment(3);
// returns { type: 'counter/increment', payload: 3 }

console.log(increment.toString());
// 'counter/increment'

console.log(`The action type is: ${increment}`);
// 'The action type is: counter/increment'
```

## 2. Ví dụ:

Ví dụ, giả sử bạn muốn tạo một action có tên "addTodo" để thêm một công việc mới vào danh sách công việc với các thông tin như tên công việc và mô tả công việc. Bạn có thể sử dụng createAction với prepare callback như sau:

```ts
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO", (name, description) => {
  // Chuẩn bị dữ liệu trước khi đưa vào payload
  return {
    payload: {
      id: Date.now(), // Giả sử id được tạo tự động dựa vào thời gian hiện tại
      name,
      description,
      completed: false,
    },
  };
});
```

Trong ví dụ trên, chúng ta sử dụng createAction để tạo một action creator có tên là "ADD_TODO". Khi gọi addTodo(), nó sẽ trả về action với type là "ADD_TODO" và payload là undefined.

Ngoài ra, bạn cũng có thể truyền thêm dữ liệu vào createAction thông qua tham số. Ví dụ:

```ts
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO", (text) => {
  return {
    payload: {
      id: new Date().toISOString(),
      text,
      completed: false,
    },
  };
});
```

Sau đó, bạn có thể sử dụng action creator addTodo để tạo action và dispatch tới Redux store:

```ts
// Sử dụng action creator addTodo để tạo action và dispatch
const newTodoAction = addTodo("Mua ví dụ mới", "Ví dụ mới rất cần thiết");
store.dispatch(newTodoAction);
```

Action được tạo ra sẽ có dạng:

```ts
{
  "type": "ADD_TODO",
  "payload": {
    "id": 1627724443335,
    "name": "Mua ví dụ mới",
    "description": "Ví dụ mới rất cần thiết",
    "completed": false
  }
}
```

Lưu ý rằng prepare callback chạy trước khi action được tạo, do đó, bạn có thể xử lý dữ liệu đầu vào và trả về một đối tượng chứa action payload dựa trên dữ liệu đó.
