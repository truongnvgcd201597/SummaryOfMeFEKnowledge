# Debounce

## 1. Định nghĩa:
> "Debouncing" là một kỹ thuật trong lập trình để giới hạn số lần một hàm được gọi trong một khoảng thời gian nhất định. 

Điều này có thể hữu ích khi bạn muốn tránh việc hàm được gọi quá nhiều lần trong một khoảng thời gian ngắn, ví dụ khi bạn muốn tránh việc hàm được gọi quá nhiều lần khi người dùng nhập vào một ô nhập liệu.

## 2. Cách sử dụng:
Để sử dụng kỹ thuật debouncing, bạn có thể sử dụng hàm setTimeout để chỉ định một hàm được gọi sau một khoảng thời gian nhất định sau mỗi lần hàm được gọi. Ví dụ, để debounce một hàm myFunction bạn có thể sử dụng cú pháp sau:
```
let timer;

function debounce(fn, delay) {
  clearTimeout(timer);
  timer = setTimeout(fn, delay);
}

debounce(myFunction, 1000);
```
Trong ví dụ trên, hàm myFunction chỉ được gọi sau mỗi 1 giây (1000 miliseconds). Nếu hàm được gọi lại trong vòng 1 giây, thì hàm clearTimeout sẽ xóa bỏ timer cũ và thiết lập timer mới, đảm bảo rằng hàm myFunction chỉ được gọi một lần sau 1 giây

Ngoài ra, bạn cũng có thể tự viết một hàm debounce bằng cách sử dụng biểu thức arrow function và hàm Promise. Ví dụ như sau:
```
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const debouncedFunction = debounce(myFunction, 1000);
```
Trong ví dụ trên, hàm debouncedFunction cũng sẽ chỉ được gọi sau mỗi 1 giây (1000 miliseconds).

## 3. Why:
Có nhiều lý do bạn có thể muốn sử dụng timer và debouncing trong JavaScript. Một trong số đó là để xử lý các sự kiện trên trang web hoặc để cập nhật dữ liệu sau một khoảng thời gian nhất định. Khi bạn debounce một hàm, bạn giới hạn số lần hàm được gọi trong một khoảng thời gian nhất định, giúp tránh việc tải quá nhiều dữ liệu hoặc yêu cầu quá nhiều từ máy chủ hoặc trình duyệt.

# Throttle
## 1. Định nghĩa:
> Throttling là kỹ thuật điều chỉnh tốc độ hoặc lưu lượng dữ liệu để giới hạn số lượng yêu cầu hoặc truy cập đến một hệ thống hoặc dịch vụ nào đó trong một khoảng thời gian nhất định. Điều này có thể được thực hiện để bảo vệ hệ thống khỏi quá tải hoặc làm cho nó hoạt động được tốt hơn bằng cách cân bằng tải trên hệ thống. Các kỹ thuật throttling thông dụng bao gồm việc hạn chế số lượng yêu cầu trong một khoảng thời gian nhất định hoặc việc hạn chế tốc độ truyền tải dữ liệu.

## 2. When:
Throttling có thể được sử dụng trong nhiều trường hợp khác nhau để bảo vệ hệ thống hoặc cung cấp dịch vụ tốt hơn cho người dùng. Một số trường hợp thông dụng mà throttling có thể được sử dụng bao gồm:
- Để bảo vệ hệ thống khỏi quá tải: Nếu một hệ thống đang chịu tải quá lớn, nó có thể dẫn đến việc hoạt động không ổn định hoặc gián đoạn. Sử dụng throttling có thể giúp hạn chế số lượng yêu cầu đến hệ thống để giảm tải và bảo vệ nó khỏi quá tải.
- Để cung cấp dịch vụ tốt hơn cho người dùng: Throttling có thể được sử dụng để điều chỉnh tốc độ truyền tải dữ liệu để cung cấp trải nghiệm tốt hơn cho người dùng. Ví dụ, nếu bạn đang cung cấp dịch vụ truyền tải video, bạn có thể sử dụng throttling để điều chỉnh tốc độ truyền tải video để người dùng có thể xem nó mượt mà hơn.
- Để hạn số lượng yêu cầu từ một người dùng hoặc một IP: Throttling cũng có thể được sử dụng để giới hạn số lượng yêu cầu từ một người dùng cụ thể hoặc từ một địa chỉ IP cụ thể trong một khoảng thời gian nhất định. Điều này có thể được sử dụng để ngăn chặn các hoạt động gián đoạn hoặc vi phạm các quy định của hệ thống.
- Để đảm bảo cân bằng tải trên hệ thống: Trong trường hợp mà một hệ thống có nhiều người dùng cùng lúc, sử dụng throttling có thể giúp đảm bảo rằng tải trên hệ thống được cân bằng và không có một người dùng nào được ưu tiên hơn người dùng khác.
- Để hạn chế sử dụng tài nguyên: Throttling cũng có thể được sử dụng để hạn chế sử dụng tài nguyên của hệ thống bởi các người dùng hoặc dịch vụ khác. Ví dụ, nếu bạn cung cấp dịch vụ truy vấn cơ sở dữ liệu, bạn có thể sử dụng throttling để hạn chế số lượng truy vấn mà một người dùng hoặc dịch vụ có thể gửi đến cơ sở dữ liệu trong một khoảng thời gian nhất định để tránh làm quá tải cơ sở dữ liệu.

### 3. Cách sử dụng:









