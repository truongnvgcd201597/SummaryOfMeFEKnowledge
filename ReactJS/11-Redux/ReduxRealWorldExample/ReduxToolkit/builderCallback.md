# Builder Callback

> hàm **createReducer** được sử dụng để xây dựng reducers dễ dàng và hiệu quả hơn. Nó sử dụng builder pattern (mẫu xây dựng) để xây dựng các case xử lý action và giúp bạn quản lý code một cách dễ đọc và dễ bảo trì hơn.

Cú pháp sử dụng createReducer:

```js
import { createReducer } from '@reduxjs/toolkit';

const initialState = /* initial state của reducer */;

const reducer = createReducer(initialState, {
  /* Các case và hành động (action) sẽ được định nghĩa ở đây */
});
```

Bây giờ, chúng ta sẽ tìm hiểu về các option trong createReducer:

## 1. Case reducers:

```ts
addCase(actionCreator, reducerCallback);
```

Đây là phương thức dùng để thêm một trường hợp xử lý (case) cho reducer. Khi một **action** được **dispatch**, reducerCallback sẽ được gọi nếu action type trùng khớp với action được tạo bởi actionCreator. Reducer sẽ trả về giá trị mới dựa trên logic xử lý trong reducerCallback.

```ts
import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

const initialState = 0;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => state + action.payload)
    .addCase(decrement, (state, action) => state - action.payload);
});
```

## 2. addMatcher:

```ts
addMatcher(matcherCallback, reducerCallback);
```

Phương thức này cho phép bạn thêm một matcher để xác định xem liệu reducerCallback có được gọi hay không. MatcherCallback nhận vào action và trả về true nếu action phù hợp với điều kiện. Nếu matcherCallback trả về true, reducerCallback sẽ được gọi.

```ts
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isFetching: false,
};

const incrementAsync = createAction("INCREMENT_ASYNC");

const asyncCounterReducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      (action) => action.type.endsWith("_PENDING"),
      (state) => {
        state.isFetching = true;
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("_FULFILLED"),
      (state) => {
        state.isFetching = false;
      }
    )
    .addCase(incrementAsync, (state) => {
      state.count += 1;
    });
});
```

## 3. addDefaultCase:

```ts
addDefaultCase(reducerCallback);
```

addDefaultCase cho phép bạn thêm một reducerCallback sẽ được gọi khi không có trường hợp nào khớp với action type được dispatch. Điều này giúp bạn xác định hành động mặc định khi không có trường hợp khớp được thực hiện.

```ts
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const unknownAction = createAction("UNKNOWN");

const defaultCounterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addDefaultCase((state, action) => {
      console.log("Unknown action:", action.type);
    });
});
```

---

# Map Object

> **Map Object** là một utility hỗ trợ giúp bạn xử lý dễ dàng các trạng thái có cấu trúc phức tạp hơn so với các trạng thái đơn giản là các biến nguyên thủy (primitive). Nó là một phần của thư viện "@reduxjs/toolkit" và hỗ trợ việc quản lý các trạng thái lưu trữ theo cấu trúc bản đồ (map) với các khóa (keys) và giá trị (values) tương ứng.

Map Object trong Redux Toolkit giúp bạn:

- **Lưu trữ dữ liệu có cấu trúc phức tạp**: Bạn có thể lưu trữ các đối tượng, mảng và các dạng dữ liệu khác theo cấu trúc bản đồ thay vì lưu trữ tất cả trong một biến duy nhất.
- **Sử dụng Immutability (tính không thay đổi)**: Map Object hỗ trợ tính không thay đổi (immutability), giúp đảm bảo các reducers hoạt động đúng cách và hạn chế sự thay đổi trực tiếp vào trạng thái (state).
- **Đơn giản hóa việc tạo reducer**: Khi bạn có một Map Object, bạn có thể sử dụng createSlice của Redux Toolkit để tạo reducer một cách dễ dàng, giảm bớt công việc lặp lại.

Ví dụ về sử dụng Map Object trong Redux Toolkit:

```ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: new Map(),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, name } = action.payload;
      state.users.set(id, { id, name });
    },
    removeUser: (state, action) => {
      const { id } = action.payload;
      state.users.delete(id);
    },
    updateUser: (state, action) => {
      const { id, name } = action.payload;
      if (state.users.has(id)) {
        state.users.set(id, { id, name });
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
```

Trong ví dụ trên, chúng ta định nghĩa một slice của Redux với tên 'users' và trạng thái ban đầu initialState chứa một Map Object có tên là "users". Các reducers trong slice được sử dụng để thêm, xóa và cập nhật người dùng trong Map Object của state. Nhờ vào tính không thay đổi của Map Object, Redux Toolkit sẽ tự động quản lý việc tạo phiên bản mới của state sau mỗi thay đổi, giúp hạn chế các lỗi trạng thái thay đổi trực tiếp (mutation) và làm cho mã của bạn dễ bảo trì hơn.

## Tại sao không nên sử dụng Map Object với TypeScript:

- **Type Inference**: TypeScript có thể gặp khó khăn trong việc suy luận kiểu cho các phần tử trong Map Object. Điều này có thể gây ra các lỗi không mong muốn hoặc khó kiểm soát, đặc biệt khi bạn muốn xử lý các loại dữ liệu phức tạp.
- **Key Types**: Kiểu của key (khóa) trong Map Object không thể được chính xác định, vì vậy TypeScript có thể không cung cấp kiểm tra kiểu tốt nhất khi bạn sử dụng Map Object. Một số phương pháp như get, set, has, delete có thể không đảm bảo kiểu đúng của key.
- **Serializability**: Map Object không dễ dàng được serialize thành JSON. Khi lưu trữ trạng thái của ứng dụng vào localStorage hoặc gửi qua mạng, việc serialize và deserialize Map Object có thể gây khó khăn.
- **Performance**: Trong môi trường TypeScript, Map Object có thể chậm hơn khi thao tác với các kiểu dữ liệu nguyên thuỷ (primitive types) vì cần phải thực hiện việc suy luận kiểu.
- **Size Overhead**: Map Object tiêu tốn nhiều bộ nhớ hơn so với đối tượng bình thường. Vì vậy, nếu bạn có nhiều phần tử nhỏ và cần tối ưu về bộ nhớ, Map Object có thể không phải là lựa chọn tốt.
