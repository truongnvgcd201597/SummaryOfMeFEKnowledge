# Redux Toolkit - RTK Query

## 1. Giới thiệu:

> Redux Toolkit Query (RTK-Query) là một thư viện mở của Redux Toolkit giúp quản lý việc gọi API và caching dễ dàng. RTK-Query được tạo ra để đơn giản hóa việc sử dụng Redux Toolkit cùng với các thư viện gọi API như Axios hoặc Fetch để thực hiện các yêu cầu mạng.

Với RTK-Query, bạn có thể xác định các endpoint API, gọi các yêu cầu mạng và lưu trữ dữ liệu trả về trong Redux store một cách tự động. Nó giúp bạn giảm bớt số lượng boilerplate code cần phải viết khi làm việc với API và quản lý trạng thái dữ liệu một cách dễ dàng hơn.

RTK-Query có một số tính năng chính bao gồm:

- Theo dõi `loading state` để hiển thị `loading skeleton` trên giao diện người dùng.
- Tránh các `duplicate request` cho cùng một dữ liệu.
- Optimistic updates để làm cho UI trở nên nhanh hơn.
- Quản lý thời gian lưu trữ cache khi người dùng tương tác với UI.

---

# APIs:

RTK Query được bao gồm trong quá trình cài đặt Redux Toolkit. Nó cung cấp một số API để tạo ra các endpoint API và gọi các yêu cầu mạng.

```ts
import { createApi } from "@reduxjs/toolkit/query";

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from "@reduxjs/toolkit/query/react";
```

- `createApi`: Tạo ra một API object chứa các endpoint API. Trong hầu hết các trường hợp,ta nên sử dụng tính năng này một lần cho mỗi ứng dụng, với quy tắc chung là **"one API slice per base URL"**.
- `fetchBaseQuery()`: Nó là một function nhỏ được xây dựng dựa trên fetch API. Wrapper bọc xung quanh `fetch` mục đích đó là đơn giản hoá request. **baseQuery** là một hàm nhận vào một object chứa các tham số và trả về một promise chứa kết quả trả về từ API. -` <ApiProvider/>`: Có thể được sử dụng như một Provider, nếu chúng ta không có `Redux store`. Có 2 kiểu endpoint API:
  - `Query endpoints`: Dùng với GET.
  - `Mutation endpoints`: Dùng với POST, PUT, DELETE.
- `setupListeners()`: Là một utility sử dụng để kích hoạt `refetchOnMount` và `refetchOnReconnect` cho tất cả các endpoint API. Nó sẽ tự động được gọi khi `ApiProvider` được sử dụng.

## 3. createAPI:

`createAPI` giúp chúng ta xác định tập hợp các `endpoint` mô tả cách truy xuất dữ liệu từ các APIs và các nguồn bất đồng bộ khác. Thông thường, chúng ta nên chỉ có một `API slice` duy nhất cho mỗi base URL mà ứng dụng cần giao tiếp. Ví dụ, nếu trang web của bạn lấy dữ liệu từ cả `/api/posts` và `/api/users`, bạn sẽ có một API slice duy nhất với `/api/` làm base URL, và các định nghĩa **endpoint** riêng biệt cho **posts** và **users**. Điều này cho phép bạn tận dụng hiệu quả việc lấy dữ liệu lại tự động bằng cách xác định các quan hệ tag giữa các endpoint.
Vì mục đích bảo trì, chúng ta có thể muốn phân chia các định nghĩa endpoint thành nhiều tệp khác nhau, nhưng vẫn duy trì một **API slice** duy nhất bao gồm tất cả các endpoint này.

### 3.1 Params:

#### 3.1 **reducerPath**:

Là một unique key sẽ được gắn vào trong store. Nếu bạn gọi `createApi` nhiều lần trong ứng dụng của mình, bạn sẽ cần cung cấp một giá trị duy nhất mỗi lần. Mặc định là 'api'.

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const apiOne = createApi({
  reducerPath: "apiOne", // unique key
  baseQuery:
  // ....
});

const apiTwo = createApi({
  reducerPath: "apiTwo", // unique key
  baseQuery:
  // ....
});
```

#### 3.1.2. **baseQuery**:

Được sử dụng bởi mỗi endpoint nếu không có tùy chọn `queryFn` được chỉ định. RTK Query xuất ra một tiện ích gọi là fetchBaseQuery, nó sẽ bao bọc xung quanh fetch cho các trường hợp sử dụng phổ biến. baseQuery function arguments:

- args: Giá trị trả về của hàm query cho endpoint cụ thể.
- api: Đối tượng BaseQueryApi chứa các thuộc tính và phương thức sau:
  - signal: Đối tượng **AbortSignal** có thể được sử dụng để hủy các yêu cầu DOM và/hoặc kiểm tra xem yêu cầu đã bị hủy.
  - abort: Phương thức` abort()` của AbortController đính kèm với signal.
  - dispatch: Phương thức store.dispatch dùng để gửi các action đến Redux store tương ứng.
  - getState: Một hàm có thể được gọi để truy cập trạng thái hiện tại của Redux store.
  - extra: Được cung cấp như thunk.extraArgument cho tùy chọn getDefaultMiddleware của configureStore.
  - endpoint: Tên của endpoint.
  - type: Loại yêu cầu (query hay mutation).
  - forced: Chỉ ra liệu một query đã bị bắt buộc (forced) hay không.
  - extraOptions: Giá trị của thuộc tính extraOptions tùy chọn được cung cấp cho endpoint cụ thể.

```ts
// Hàm query cho một endpoint
const myEndpointQuery = async (args, api) => {
  // args: Giá trị truyền vào hàm query
  // api: Đối tượng BaseQueryApi chứa các thông tin và phương thức liên quan

  const {
    signal,
    abort,
    dispatch,
    getState,
    extra,
    endpoint,
    type,
    forced,
    extraOptions,
  } = api;

  // Gọi các action Redux thông qua dispatch
  dispatch({ type: "QUERY_START", payload: { endpoint } });

  try {
    // Thực hiện yêu cầu mạng (có thể sử dụng fetchBaseQuery hoặc phương thức khác)
    const response = await fetchBaseQuery(args, api);

    // Xử lý dữ liệu trả về và cập nhật store
    dispatch({ type: "QUERY_SUCCESS", payload: { endpoint, response } });

    // Trả về dữ liệu từ query
    return response;
  } catch (error) {
    // Xử lý lỗi và cập nhật store
    dispatch({ type: "QUERY_ERROR", payload: { endpoint, error } });

    // Nếu cần, quăng lỗi để các components hoặc hàm gọi query có thể xử lý tiếp
    throw error;
  }
};

// Sử dụng endpoint query
const fetchData = createApi({
  baseQuery: myEndpointQuery,
  endpoints: (builder) => ({
    getData: builder.query({
      query: (id) => ({ url: `/data/${id}` }),
    }),
    postData: builder.mutation({
      query: (data) => ({ url: "/data", method: "POST", body: data }),
    }),
  }),
});

// Gọi query trong components hoặc các hàm khác
const getDataHandler = async () => {
  try {
    const data = await fetchData.endpoints.getData(1);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

#### 3.1.3. enpoints:

Endpoint là một tập hợp các hoạt động mà bạn muốn thực hiện đối với máy chủ. Ta định nghĩa chúng dưới dạng một đối tượng sử dụng cú pháp builder. Có hai loại điểm cuối cơ bản: **query (truy vấn)** và **mutation (điều biến)**.

- **Query**: Được sử dụng để lấy dữ liệu từ máy chủ. Truy vấn là các hoạt động chỉ đọc, không làm thay đổi dữ liệu trên máy chủ.
- **Mutation**: Được sử dụng để thay đổi hoặc cập nhật dữ liệu trên máy chủ. Điều biến là các hoạt động chỉ ghi, thay đổi dữ liệu và không trả về dữ liệu trực tiếp (hoặc trả về dữ liệu không phải là dữ liệu đang tồn tại trên máy chủ).
