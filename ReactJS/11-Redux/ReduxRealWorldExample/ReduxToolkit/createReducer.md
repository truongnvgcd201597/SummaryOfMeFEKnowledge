# createReducer

## 1. createReducer là gì?

> **createReducer** là một hàm dùng để tạo reducer một cách dễ dàng và hiệu quả. createReducer hỗ trợ việc viết mã reducer trong cú pháp rút gọn, loại bỏ đi cú pháp truyền thống của Redux và giúp giảm bớt boilerplate code.

Dưới đây là cú pháp sử dụng createReducer:

```ts
import { createReducer } from '@reduxjs/toolkit';

const initialState = /* initial state của slice */;

const myReducer = createReducer(initialState, {
  // Các action và hành động tương ứng của chúng
  'ACTION_TYPE_1': (state, action) => {
    // Thực hiện hành động khi nhận được action 'ACTION_TYPE_1'
    // Trả về một đối tượng mới để cập nhật state
  },
  'ACTION_TYPE_2': (state, action) => {
    // Thực hiện hành động khi nhận được action 'ACTION_TYPE_2'
    // Trả về một đối tượng mới để cập nhật state
  },
  // Các action khác nếu có
});
```

- **initialState**: là trạng thái ban đầu của slice được quản lý bởi reducer.
- **Đối số thứ hai của createReducer**: là một đối tượng chứa các cặp key-value, trong đó key là tên action type, và value là hàm xử lý (handler) tương ứng cho action đó.

Khi một action được dispatch, createReducer sẽ tự động xác định action type và gọi hàm xử lý tương ứng để thay đổi state. Hãy lưu ý rằng createReducer không thay đổi trạng thái ban đầu, mà nó trả về một đối tượng state mới.

Ví dụ, giả sử chúng ta có một slice quản lý danh sách công việc (todos), và có hai action type là "addTodo" và "toggleTodo" để thêm một công việc mới và đánh dấu công việc là đã hoàn thành, chúng ta có thể sử dụng createReducer như sau:

```ts
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoReducer = createReducer(initialState, {
  addTodo: (state, action) => {
    // Thêm công việc mới vào danh sách todos
    state.todos.push(action.payload);
  },
  toggleTodo: (state, action) => {
    // Đánh dấu công việc đã hoàn thành (toggle) dựa vào action payload (id của công việc)
    const todo = state.todos.find((todo) => todo.id === action.payload);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
});
```

Sau đó, chúng ta có thể sử dụng reducer todoReducer này khi khai báo một slice trong Redux store.

Lưu ý rằng Redux Toolkit cũng cung cấp hàm createSlice để tạo slice (bao gồm cả reducer và các action creators) một cách tự động và tiện lợi hơn. createSlice kết hợp cả createReducer và createAction để tạo một slice hoàn chỉnh chỉ trong một bước duy nhất.
