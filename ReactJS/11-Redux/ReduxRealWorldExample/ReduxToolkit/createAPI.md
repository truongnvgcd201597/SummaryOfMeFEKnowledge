# createAPI

## 1. createAPI là gì?

> createApi là một hàm trong Redux Toolkit Query (RTK Query) được sử dụng để tạo ra một API client để quản lý các endpoint và tương tác với dịch vụ web hoặc API.

RTK Query là một thư viện mạnh mẽ cho việc quản lý trạng thái và tương tác với API trong ứng dụng Redux. Nó cung cấp một cách dễ dàng để định nghĩa và sử dụng các endpoint cho việc truy xuất dữ liệu từ API. createApi là một trong những hàm quan trọng trong RTK Query để tạo ra một instance của API client.

## 2. Cú pháp:

- **reducerPath**: là tên của reducer được tạo ra bởi API client trong Redux store. Nó sẽ được sử dụng để quản lý trạng thái và các action liên quan đến API.
- **baseQuery**: là một hàm query handler được cung cấp bởi RTK Query để thực hiện các request tới dịch vụ web hoặc API. Trong ví dụ trên, chúng ta sử dụng fetchBaseQuery để tạo một query handler sử dụng fetch API trong JavaScript và cung cấp baseUrl của API.
- **endpoints**: là một hàm callback nhận vào tham số build, cho phép bạn định nghĩa các endpoint trong API client. Bạn có thể sử dụng build.query để định nghĩa endpoint cho các request GET, build.mutation cho các request POST, PUT, DELETE, và build.query-raw cho các request tùy chỉnh.

```ts
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    // Định nghĩa các endpoint ở đây
  }),
});
```

- Mutation endpoints được sử dụng cho các yêu cầu thay đổi dữ liệu như tạo, cập nhật, hoặc xóa dữ liệu trên máy chủ.
- Query endpoints được sử dụng cho các yêu cầu lấy dữ liệu từ máy chủ.
  Ví dụ, để tạo một mutation endpoint để tạo bài viết mới, bạn có thể làm như sau:

```ts
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    createPost: build.mutation<Post, Partial<PostParams>>({
      query: (params) => ({
        url: "/posts",
        method: "POST",
        body: params,
      }),
    }),
  }),
});
```

```ts
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});
```

## 3. Automated refetching:

Trong Redux Toolkit Query, createApi hỗ trợ tính năng **automated refetching** tự động, cho phép tự động làm mới dữ liệu từ API sau khi mutation hoặc theo một lịch trình cụ thể.

### 3.1. tagTypes:

Trong Redux Toolkit Query, các tag được sử dụng để quản lý bộ nhớ cache và invalidation (hủy bỏ) cache. Các tag được sử dụng để định danh cho dữ liệu trong cache. Khi có sự thay đổi trong dữ liệu, ta có thể sử dụng tag để hủy bỏ cache liên quan và đảm bảo rằng dữ liệu mới nhất sẽ được lấy từ máy chủ.

```ts
const api = createApi({
  // Các cấu hình khác...
  tagTypes: ['TagType1', 'TagType2', ...],
  endpoints: (build) => ({
    // Định nghĩa các endpoint ở đây...
  }),
});
```

### provideTags:

providesTags là một thuộc tính được sử dụng trong định nghĩa của mutation hoặc query endpoint để xác định các thẻ (tags) mà endpoint đó cung cấp. Các thẻ này được sử dụng để xác định dữ liệu mà endpoint có thể ảnh hưởng đến.

```ts
const api = createApi({
  // Các cấu hình khác...
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
      providesTags: ['Tag1', 'Tag2', ...],
    }),
    // ...
  }),
})
```

Trong ví dụ trên, endpoint getPosts được định nghĩa là một query endpoint bằng cách sử dụng build.query. Thuộc tính providesTags được sử dụng để xác định các thẻ mà endpoint này cung cấp, được đưa ra dưới dạng một mảng các chuỗi ['Tag1', 'Tag2', ...].

## 4. skip token:

skip là một thuộc tính được sử dụng trong định nghĩa của mutation hoặc query endpoint để xác định xem endpoint đó có nên bị bỏ qua (skip) hay không khi nó được gọi.
Cú pháp sử dụng skip như sau:

```ts
const api = createApi({
  // Các cấu hình khác...
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
      skip: () => shouldSkipGetPosts(),
    }),
    // ...
  }),
});
```

Trong ví dụ trên, endpoint getPosts được định nghĩa là một query endpoint bằng cách sử dụng build.query. Thuộc tính skip được sử dụng để chỉ định một hàm callback shouldSkipGetPosts để xác định xem endpoint này có nên bị bỏ qua (skip) hay không khi nó được gọi.

Trong hàm callback shouldSkipGetPosts(), bạn có thể thực hiện các kiểm tra hoặc logic phù hợp để quyết định xem endpoint có nên bị bỏ qua hay không. Nếu hàm callback trả về true, endpoint sẽ bị bỏ qua và không được gọi. Ngược lại, nếu hàm callback trả về false hoặc không trả về gì, endpoint sẽ tiếp tục được gọi.

Việc sử dụng skip cho phép bạn điều khiển xem endpoint có nên được gọi hay không dựa trên các điều kiện hoặc logic trong ứng dụng của bạn.
