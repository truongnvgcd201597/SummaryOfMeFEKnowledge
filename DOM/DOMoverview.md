# DOM overview
## DOM là gì:
> DOM (Document Object Model) là một công nghệ cho phép bạn truy cập và sửa đổi nội dung của một trang web dưới dạng một cây đối tượng. Nó cung cấp một cấu trúc cho trang web và cho phép bạn truy cập và thay đổi các thành phần của trang như các đoạn văn bản, hình ảnh, v.v.

![image](https://user-images.githubusercontent.com/75243419/209968147-c72743bf-e975-4555-b17c-c7a23f266610.png)

 Src: https://javascript.info/browser-environment
 
Ví dụ, bạn có thể sử dụng DOM để thay đổi nội dung của một đoạn văn bản trong một trang web hoặc thêm một hình ảnh mới. DOM cũng cho phép bạn gắn sự kiện vào các phần tử trên trang web, ví dụ như khi người dùng nhấp vào một nút, bạn có thể sử dụng DOM để xử lý sự kiện đó.

DOM là một phần không thể thiếu của các ngôn ngữ lập trình web như JavaScript và cung cấp một cách tiện lợi để truy cập và thay đổi nội dung của trang web.

## Rendering Process:
### Định nghĩa: 
![image](https://user-images.githubusercontent.com/75243419/209968258-3af4259c-12bb-423f-becf-f7331a8311c7.png)

Rendering process là quá trình hiển thị nội dung trang web trên trình duyệt. Khi bạn truy cập một trang web, trình duyệt sẽ tải toàn bộ nội dung trang web và sau đó hiển thị nó cho bạn. Quá trình này gồm các bước sau:

- Tải HTML: Trình duyệt tải toàn bộ tệp HTML từ máy chủ web và hiển thị nó trên màn hình.
- Tạo cây DOM: Trình duyệt sẽ tạo ra một cây DOM từ tệp HTML. Cây DOM là một bản sao của cấu trúc HTML của trang web và cho phép bạn truy cập và sửa đổi nội dung của trang web dưới dạng một cây đối tượng.
- Tải tài nguyên khác: Trong khi tạo cây DOM, trình duyệt cũng sẽ tải các tài nguyên khác như hình ảnh, tệp CSS, v.v.
- Tính toán và vẽ trang web: Sau khi tải xong tất cả các tài nguyên, trình duyệt sẽ tính toán vị trí và kích thước của từng phần tử trên trang web dựa trên tệp CSS và sau đó vẽ trang web lên màn hình.

Quá trình rendering có thể mất một thời gian nhất định để hoàn thành, tùy thuộc vào số lượng tài nguyên cần tải, kích thước các tài nguyên, v.v. Trình duyệt sẽ hiển thị trang web cho người dùng khi quá trình rendering hoàn tất.

Trình duyệt cũng có thể sử dụng một kỹ thuật gọi là "lazy loading" để tiết kiệm thời gian rendering. Trong kỹ thuật này, trình duyệt chỉ tải và hiển thị những phần của trang web mà người dùng đang xem. Các phần khác sẽ được tải và hiển thị sau khi người dùng cuộn trang xuống. Kỹ thuật này có thể giúp trang web tải nhanh hơn và tiết kiệm băng thông hơn.

Tổng quan, quá trình rendering là quan trọng đối với việc hiển thị nội dung trang web cho người dùng và có thể ảnh hưởng đến tốc độ tải trang của trang web.

### Tổng quan Render tree:
> Render tree là một cây đối tượng mà trình duyệt tạo ra để hiển thị trang web trên màn hình. Nó được tạo ra từ cây DOM và bao gồm các thành phần của trang web có thể hiển thị trên màn hình, như đoạn văn bản, hình ảnh, v.v. Trình duyệt sẽ tính toán vị trí và kích thước của từng thành phần trong render tree dựa trên tệp CSS và sau đó vẽ các thành phần đó lên màn hình.



Render tree là quan trọng vì nó cho phép trình duyệt biết cách vẽ trang web trên màn hình và giúp trình duyệt tính toán hiệu suất và tốc độ tải trang. Nó cũng giúp trình duyệt xử lý sự kiện và thay đổi trang web theo yêu cầu người dùng.

Đầu tiên, trình duyệt kết hợp DOM và CSSOM thành một `Render tree`, ghi lại tất cả nội dung DOM hiển thị trên trang và tất cả thông tin kiểu CSSOM cho mỗi nút.

Để xây dựng Render tree, sẽ có các bước như sau:
- Step 1: **Bắt đầu từ gốc của cây DOM, duyệt qua từng nút hiển thị** - 
Một số nút không hiển thị (ví dụ: thẻ tập lệnh, thẻ meta, v.v.) và bị bỏ qua vì chúng không được phản ánh trong đầu ra được hiển thị. Một số nút được ẩn thông qua CSS và cũng bị bỏ qua khỏi render tree.
- Step 2: Đối với mỗi Node hiển thị, chúng tìm các quy tắc CSSOM phù hợp phù hợp và áp dụng chúng.
- Step 3: Hiển thị các node có thể nhìn thấy với nội dung và kiểu được tính toán của chúng.

Src: https://web.dev/critical-rendering-path-render-tree-construction/

### DOM construction:
> DOM construction là quá trình tạo ra cây DOM từ tệp HTML của trang web. Cây DOM là một bản sao của cấu trúc HTML của trang web và cho phép bạn truy cập và sửa đổi nội dung của trang web dưới dạng một cây đối tượng.

<img width="559" alt="image" src="https://user-images.githubusercontent.com/75243419/209968544-61ac7274-020a-4c51-b476-7e29455655b1.png">
<img width="553" alt="image" src="https://user-images.githubusercontent.com/75243419/209968563-a87b62e2-06c8-4123-a857-d7a3a9322fd2.png">

Quá trình DOM construction bắt đầu khi trình duyệt nhận được tệp HTML từ máy chủ web và tiếp tục cho đến khi tất cả các phần tử HTML đã được tạo ra trong cây DOM. Trình duyệt sẽ tạo ra một node cho mỗi thành phần HTML và liên kết các node với nhau theo cấu trúc của tệp HTML.

Quá trình DOM construction là quan trọng vì nó cho phép bạn truy cập và sửa đổi nội dung trang web bằng cách sử dụng ngôn ngữ lập trình web như JavaScript. Nó cũng giúp trình duyệt tính toán hiệu suất và tốc độ tải trang của trang web.
