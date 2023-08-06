# withRouter

## 1. withRouter HOC trong React Router:

> **withRouter** là một higher-order component (HOC) được cung cấp bởi thư viện `react-router-dom`. Nó cho phép truy cập các đối tượng liên quan đến định tuyến trong React Router như **history**, **location** và **match** mà không cần phải truyền các props cho các thành phần con.

Bạn có thể áp dụng `withRouter` cho một thành phần bằng cách đặt nó như một decorator (hoặc sử dụng cú pháp HOC thông thường):

```ts
class MyComponent extends React.Component {
  // ...
}

export default withRouter(MyComponent);
```

Sau khi áp dụng withRouter, thành phần `MyComponent` sẽ có truy cập vào các props liên quan đến định tuyến như **history**, **location** và **match**. Các props này sẽ tự động được cung cấp cho thành phần và được cập nhật khi có sự thay đổi trong địa chỉ URL.

Ví dụ, bạn có thể sử dụng history để thực hiện chuyển hướng đến một địa chỉ URL khác:

```ts
class MyComponent extends React.Component {
  handleClick = () => {
    this.props.history.push("/new-route");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Go to New Route</button>
      </div>
    );
  }
}

export default withRouter(MyComponent);
```

Khi người dùng nhấp vào, `handleClick` được gọi và sử dụng `this.props.history.push` để chuyển hướng đến đường dẫn `'/new-route`'.

`withRouter` cũng hữu ích khi bạn cần truy cập thông tin về địa chỉ URL hiện tại trong các thành phần không phải là Route:

```ts
class MyComponent extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    console.log("Current Path:", location.pathname);
  }

  render() {
    return <div>{/* ... */}</div>;
  }
}

export default withRouter(MyComponent);
```
