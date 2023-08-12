# Axios

## 1. Axios là gì?

> Axios là một thư viện HTTP client được sử dụng để gửi các request HTTP từ một ứng dụng JavaScript hoặc Node.js. Nó cung cấp một giao diện dễ sử dụng cho việc tương tác với các API mạng và làm việc với dữ liệu từ máy chủ.

Với Axios, bạn có thể gửi các yêu cầu HTTP như GET, POST, PUT, DELETE và các phương thức khác đến các địa chỉ URL cụ thể. Nó hỗ trợ các tính năng như xử lý promise, gửi các yêu cầu AJAX, xác thực và cấu hình tùy chỉnh.

## 2. Axios header:

Trong Axios, bạn có thể sử dụng các kiểu header thông thường như `Content-Type`, `Authorization`, `Accept`, v.v. để tùy chỉnh các yêu cầu HTTP. Dưới đây là một số kiểu header phổ biến:

```
axios({
  method: 'post',
  url: '/user/12345',
  contentType: 'application/json',
  data: {
    lastName: 'Lý'
    firstName: 'Thường Kiệt',
  }
});
```

### 2.1. Content-Type:

Xác định kiểu nội dung của dữ liệu gửi đi. Ví dụ:

```
axios.post('https://api.example.com/data', data, {
  headers: {
    'Content-Type': 'application/json'
  }
});
```

### 2.2. Authorization:

Xác định thông tin xác thực của yêu cầu. Ví dụ:

```
axios.get('https://api.example.com/protected', {
  headers: {
    'Authorization': 'Bearer TOKEN'
  }
});
```

### 2.3. Accept:

Xác định các kiểu nội dung mà máy chủ có thể chấp nhận.

```
axios.get('https://api.example.com/data', {
  headers: {
    'Accept': 'application/json'
  }
});
```

### 2.4. User-Agent:

Xác định thông tin về trình duyệt hoặc ứng dụng gửi yêu cầu.

```
axios.get('https://api.example.com/data', {
  headers: {
    'User-Agent': 'MyApp/1.0'
  }
});
```

### 2.5. Cache-Control:

Xác định các hướng dẫn cho việc lưu trữ và sử dụng bộ nhớ cache của yêu cầu.

```
axios.get('https://api.example.com/data', {
  headers: {
    'Cache-Control': 'no-cache'
  }
});
```

## 3. Axios properties:

### 3.1. axios.baseURL:

Địa chỉ URL cơ sở cho tất cả các yêu cầu. Ta có thể chỉ định URL và cung cấp phần đường dẫn tương đối cho mỗi yêu cầu.

```
axios.get('/user', {
  baseURL: 'https://api.example.com'
})
```

### 3.2. axios.timeout:

Thời gian tối đa để chờ phản hồi từ máy chủ trước khi yêu cầu bị hủy bỏ (theo đơn vị milliseconds).

```
axios.get('/user', {
  timeout: 1000
})
```

### 3.3. axios.headers:

Các header HTTP được gửi cùng với mỗi request. Bạn có thể chỉ định các header tùy chỉnh ở đây, như 'Content-Type', 'Authorization', v.v.

```
axios.get('/user', {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})
```

### 3.4. axios.params:

Các tham số truy vấn được gửi đi cùng với yêu cầu. Bạn có thể chỉ định các tham số truy vấn dưới dạng một đối tượng.

```
axios.get('/user', {
  params: {
    _limit: 10
  }
})
```

### 3.5. axios.responseType:

Kiểu dữ liệu mong đợi từ phản hồi. Ví dụ: 'json', 'text', 'blob', v.v.

```
axios.get('/user', {
  responseType: 'json'
})
```

### 3.6. axios.withCredentials:

Xác định liệu có gửi cookie và thông tin xác thực của người dùng trong yêu cầu hay không.

### 3.7. axios.validateStatus:

Một hàm kiểm tra tùy chọn để xác định xem một mã trạng thái HTTP cụ thể có được coi là hợp lệ hay không.

## 4. Axios methods:

### 4.1. Axios.get():

```js
axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
  params: {
    _limit: 5,
  },
})
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

Or

```
axios("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((res) => showOutput(res))
  .catch((err) => console.log(err));
```

### 4.2. Axios.post():

```js
axios({
  method: "POST",
  url: "https://jsonplaceholder.typicode.com/todos",
  data: {
    title: "fack",
    completed: true,
  },
})
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

Or

```javascript
axios
  .post("https://jsonplaceholder.typicode.com/todos", {
    title: "holo",
    completed: false,
  })
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### 4.3. Axios.put():

```js
axios
  .put("https://jsonplaceholder.typicode.com/todos/1", {
    title: "Updated Todo",
    completed: true,
  })
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### 4.4. Axios.delete():

```js
axios
  .delete("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    showOutput(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## 5. Simultaneous data:

```js
axios
  .all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    axios.get("https://jsonplaceholder.typicode.com/posts"),
  ])
  .then(axios.spread((todos, post) => showOutput(todos)))
  .catch((err) => {
    console.log(err);
  });

// or
axios
  .all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    axios.get("https://jsonplaceholder.typicode.com/posts"),
  ])
  .then((res) => {
    showOutput(res[0]);
    showOutput(res[1]);
  })
  .catch((err) => {
    console.log(err);
  });
```

## 6. Interceptors:

> axios.interceptors trong Axios được sử dụng để đăng ký và quản lý các interceptors cho yêu cầu và phản hồi. Interceptors cho phép can thiệp vào quá trình gửi yêu cầu hoặc xử lý phản hồi trước khi chúng được gửi đến máy chủ hoặc trả về cho ứng dụng của bạn.

```js
// Đăng ký interceptor cho yêu cầu
axios.interceptors.request.use(
  (config) => {
    // Thực hiện các thay đổi hoặc xử lý trước khi gửi yêu cầu
    // Ví dụ: thêm header 'Authorization'
    config.headers["Authorization"] = "Bearer TOKEN";
    console.log(
      `Sending request to ${config.url}... at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    // Xử lý lỗi nếu có
    return Promise.reject(error);
  }
);

// Đăng ký interceptor cho phản hồi
axios.interceptors.response.use(
  (response) => {
    // Thực hiện các thay đổi hoặc xử lý trước khi trả về cho ứng dụng
    // Ví dụ: lấy gif từ phản hồi và sử dụng nó
    const gifUrl = response.data.gifUrl;
    // Tiếp tục xử lý phản hồi
    return response;
  },
  (error) => {
    // Xử lý lỗi nếu có
    return Promise.reject(error);
  }
);
```

## 7. Custom headers:

```js
import axios from "axios";

const config = {
  headers: {
    "Custom-Header": "Custom Value",
    "Another-Header": "Another Value",
  },
};

axios
  .get("https://api.example.com/data", config)
  .then((response) => {
    // Xử lý phản hồi
  })
  .catch((error) => {
    // Xử lý lỗi
  });
```

## 8. Global axios:

Axios global là một instance Axios được tạo ra với các giá trị mặc định được thiết lập và áp dụng cho tất cả các yêu cầu Axios trong toàn bộ ứng dụng.

Khi bạn tạo Axios global, bạn có thể thiết lập các cấu hình mặc định như `baseURL`, `timeout`, `headers`, v.v. cho instance đó. Các giá trị mặc định này sẽ được áp dụng tự động cho tất cả các yêu cầu Axios mà bạn thực hiện trong ứng dụng của mình, trừ khi bạn ghi đè chúng trong từng yêu cầu cụ thể.

```js
import axios from "axios";

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["Authorization"] = "Bearer TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
```

## 9. Error handling:

```js
function ErrorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss")
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}
```

## 10. cancelToken:

`cancel tokens` là một cơ chế cho phép bạn hủy bỏ một yêu cầu (request) đang chờ xử lý hoặc đang được gửi đi. Khi bạn gửi một yêu cầu bằng `Axios`, bạn có thể tạo ra một `cancel token` tương ứng và sử dụng nó để hủy bỏ yêu cầu đó nếu cần thiết.

### 10.1. cancel token:

Bạn có thể sử dụng constructor `CancelToken` từ axios để tạo ra một cancel token.

```js
const { CancelToken } = axios;
const source = CancelToken.source();
```

## 10.2. Truyền cancel token vào yêu cầu:

Khi gửi yêu cầu, bạn có thể truyền cancel token vào cấu hình yêu cầu thông qua thuộc tính cancelToken.

```js
axios
  .get("/api/data", {
    cancelToken: source.token,
  })
  .then(function (response) {
    // Xử lý phản hồi thành công
    console.log(response.data);
  })
  .catch(function (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      // Xử lý lỗi
    }
  });

if (true) {
  source.cancel("Request canceled");
}
```

## 10.3. Hủy bỏ yêu cầu:

Để hủy bỏ yêu cầu, bạn có thể gọi phương thức cancel trên đối tượng cancel token.

```js
source.cancel("Request canceled");
```

Khi yêu cầu bị hủy bỏ, promise trả về từ `Axios` sẽ bị từ chối (rejected) với một lỗi có thuộc tính message là `Request canceled` hoặc giá trị bạn đã truyền vào phương thức cancel.

`Cancel tokens` trong Axios rất hữu ích khi bạn muốn hủy bỏ các yêu cầu không cần thiết hoặc khi người dùng thực hiện hành động để hủy bỏ yêu cầu đang chờ xử lý.
