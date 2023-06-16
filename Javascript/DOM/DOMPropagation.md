# Even Propagation

## 1. Định nghĩa:
> Event propagation là quá trình mà sự kiện (event) được truyền từ phần tử được kích hoạt đến các phần tử cha của nó trong cây DOM (Document Object Model) của trang web.

Trong JavaScript, có hai loại event propagation:
- **Bubbling**: `Sự kiện bắt đầu từ phần tử con và di chuyển lên trên cây DOM tới phần tử cha`. Điều này có nghĩa là nếu bạn đặt một sự kiện vào một phần tử con, sự kiện đó cũng sẽ được gọi cho tất cả các phần tử cha của nó trong cây DOM.
- **Capturing**: `Sự kiện bắt đầu từ phần tử cha và di chuyển xuống cây DOM tới phần tử con`. Điều này có nghĩa là nếu bạn đặt một sự kiện vào một phần tử cha, sự kiện đó cũng sẽ được gọi cho tất cả các phần tử con của nó trong cây DOM.
- 
![image](https://user-images.githubusercontent.com/75243419/211042840-35e19603-79d0-4b4d-bddd-cc19cad60e4b.png)

Mặc định, event propagation sử dụng phương pháp bubbling. Tuy nhiên, bạn có thể sử dụng thuộc tính "useCapture" của hàm addEventListener để chỉ định rằng bạn muốn sử dụng phương pháp capturing thay vì bubbling.

## 2. So sánh event flow và event propagation:
Event flow là từ viết tắt của "event propagation", nên hai từ này đều ý nghĩa là quá trình truyền sự kiện trong cây DOM của trang web. Nó không phải là một khái niệm khác biệt so với event propagation.

Một số người có thể sử dụng cả hai từ để chỉ cùng một ý nghĩa, nhưng có một số người cũng có thể sử dụng "event flow" để chỉ cách mà sự kiện được truyền trong cây DOM, trong khi "event propagation" được sử dụng để chỉ quá trình truyền sự kiện. Tuy nhiên, cách sử dụng của hai từ này không được chỉ định rõ trong tiêu chuẩn và có thể khác nhau tùy thuộc vào ngôn ngữ và ngữ cảnh cụ thể.

img

## 3. Event Bubbling:
Event bubbling là một phương pháp truyền sự kiện trong cây DOM của trang web, trong đó sự kiện bắt đầu từ phần tử con và di chuyển lên trên cây DOM tới phần tử cha. Điều này có nghĩa là nếu bạn đặt một sự kiện vào một phần tử con, sự kiện đó cũng sẽ được gọi cho tất cả các phần tử cha của nó trong cây DOM.

Ví dụ, nếu có một sự kiện click được đặt trên một nút con bên trong một div cha, sự kiện click sẽ được gọi cho cả nút và div. Nếu bạn muốn ngăn sự kiện này được truyền tới các phần tử cha, bạn có thể sử dụng phương pháp event capturing thay vì bubbling.

Để sử dụng event bubbling, bạn có thể sử dụng hàm addEventListener và đặt tham số "useCapture" là false (đây là giá trị mặc định). Ví dụ:
```
document.querySelector('#button').addEventListener('click', function(event) {
  // code to handle the event
}, false);
```
Trong ví dụ trên, sự kiện click sẽ được gọi cho phần tử có id là "button" và tất cả các phần tử cha của nó trong cây DOM.
## 4. Event Caputring:
Event capturing là một phương pháp truyền sự kiện trong cây DOM của trang web, trong đó sự kiện bắt đầu từ phần tử cha và di chuyển xuống cây DOM tới phần tử con. Điều này có nghĩa là nếu bạn đặt một sự kiện vào một phần tử cha, sự kiện đó cũng sẽ được gọi cho tất cả các phần tử con của nó trong cây DOM.

Ví dụ, nếu có một sự kiện click được đặt trên một div cha chứa một nút con, sự kiện click sẽ được gọi cho div trước và sau đó cho nút. Nếu bạn muốn ngăn sự kiện này được truyền tới các phần tử con, bạn có thể sử dụng phương pháp event bubbling thay vì capturing.

Để sử dụng event capturing, bạn có thể sử dụng hàm addEventListener và đặt tham số "useCapture" là true. Ví dụ:
```
document.querySelector('#parent').addEventListener('click', function(event) {
  // code to handle the event
}, true);
```
Trong ví dụ trên, sự kiện click sẽ được gọi cho phần tử có id là "parent" trước và sau đó cho tất cả các phần tử con của nó trong cây DOM.
## 5. Stop propagation:
Stop propagation là một phương pháp để ngăn sự kiện được truyền tiếp tới các phần tử cha hoặc con trong cây DOM của trang web.

Để dừng sự truyền tiếp của một sự kiện, bạn có thể sử dụng phương thức "stopPropagation" của đối tượng sự kiện. Ví dụ:
```
document.querySelector('#button').addEventListener('click', function(event) {
  // code to handle the event
  event.stopPropagation();
});
```
Trong ví dụ trên, khi người dùng click vào nút có id là "button", sự kiện click sẽ không được truyền tới các phần tử cha của nó trong cây DOM.

Lưu ý: Phương thức "stopPropagation" chỉ ngăn sự truyền tiếp của sự kiện trong phương pháp event propagation mà nó được gọi. Nếu bạn muốn ngăn sự truyền tiếp của sự kiện trong cả hai phương pháp, bạn cần gọi "stopPropagation" trong cả hai hàm addEventListener với "useCapture" là true và false.






