# bindActionCreators

## 1. bindActionCreators là gì?

> `bindActionCreators` trong Redux được sử dụng để tự động **assign** các `action creators` của Redux vào `dispatch`, giúp việc gửi các action đến Redux store trở nên dễ dàng hơn. Nó giúp chúng ta không phải mỗi lần gọi dispatch bằng tay khi muốn gửi một action từ một action creator.

## 2. Cú pháp sử dụng

```js
import { bindActionCreators } from "redux";

// Redux action creators
const actionCreator1 = (param) => {
  return {
    type: "ACTION_TYPE_1",
    payload: param,
  };
};

const actionCreator2 = (param) => {
  return {
    type: "ACTION_TYPE_2",
    payload: param,
  };
};

// Kết nối action creators với dispatch và tạo ra các wrapped action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      action1: actionCreator1,
      action2: actionCreator2,
      // ... và các action creators khác nếu cần
    },
    dispatch
  );
};

// mapDispatchToProps sẽ trả về một object chứa các wrapped action creators
// Bạn có thể sử dụng chúng như sau trong React component
// Ví dụ:
import { connect } from "react-redux";

const YourComponent = ({ action1, action2 }) => {
  // Sử dụng wrapped action creators trong component
  return (
    <div>
      <button onClick={() => action1("Hello")}>Dispatch Action 1</button>
      <button onClick={() => action2("World")}>Dispatch Action 2</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(YourComponent);
```

Lưu ý rằng trong phiên bản Redux 4.0.0 trở đi, bạn có thể sử dụng viết tắt cho đoạn mã trên như sau:

```js
const mapDispatchToProps = {
  action1: actionCreator1,
  action2: actionCreator2,
  // ... và các action creators khác nếu cần
};
```

Hoặc viết gọn hơn:

```js
const mapDispatchToProps = {
  actionCreator1,
  actionCreator2 /* và các action creators khác nếu cần */,
};
```
