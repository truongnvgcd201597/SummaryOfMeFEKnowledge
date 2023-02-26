# Yarn

## 1. Yarn là gì?
> Yarn là một trình quản lý gói mã nguồn mở được phát triển bởi Facebook và Google. Nó được viết bằng ngôn ngữ JavaScript và được phát triển dựa trên npm. Yarn có thể được sử dụng để quản lý các gói mã nguồn cho các dự án được viết bằng JavaScript, Node.js, React, Angular, Vue.js, Ember.js, Meteor, ASP.NET Core, PHP, Python,... 

## 2. Cài đặt Yarn:
Để cài đặt Yarn, bạn có thể thực hiện theo các bước sau:
- Bước 1: Cài đặt Node.js: Yarn là một package manager được xây dựng trên Node.js, do đó trước khi cài đặt Yarn, bạn cần phải cài đặt Node.js trước.

- Bước 2: Cài đặt Yarn: Sau khi cài đặt Node.js, bạn có thể tiến hành cài đặt Yarn bằng một trong các cách sau:

Cài đặt Yarn bằng npm:
Bạn có thể sử dụng npm để cài đặt Yarn bằng cách chạy lệnh sau trong Terminal hoặc Command Prompt:
```
- npm install -g yarn
```
Cài đặt Yarn bằng Homebrew:
Nếu bạn đang sử dụng macOS và đã cài đặt Homebrew, bạn có thể cài đặt Yarn bằng lệnh sau trong Terminal:
```
brew install yarn
```
Cài đặt Yarn bằng tệp cài đặt:
Bạn có thể tải tệp cài đặt phù hợp với hệ điều hành của mình tại trang chủ Yarn và thực hiện cài đặt theo hướng dẫn trên trang đó.
Sau khi hoàn thành các bước trên, bạn có thể kiểm tra phiên bản Yarn đã cài đặt bằng lệnh sau:
```
yarn --version
```
Lưu ý: Phiên bản Yarn có thể khác nhau tùy thuộc vào thời điểm bạn cài đặt.

## 3. Các lệnh cơ bản của Yarn:
| Lệnh | Mô tả |
| --- | --- |
| yarn init | Tạo file package.json |
| yarn add <package> | Cài đặt một gói mới |
| yarn add <package> --dev | Cài đặt một gói mới vào phần devDependencies |
| yarn upgrade <package> | Cập nhật các package đã được cài đặt trong project lên phiên bản mới nhất. |
| yarn remove <package> | Xóa một gói đã được cài đặt |
| yarn install | Cài đặt các gói đã được liệt kê trong file package.json |
| yarn install --force | Cài đặt lại các gói đã được liệt kê trong file package.json |
| yarn cache clean | Xóa cache |
| yarn list | Liệt kê các gói đã được cài đặt |
| yarn global add <package> | Cài đặt một gói mới toàn cục |
| yarn global remove <package> | Xóa một gói đã được cài đặt toàn cục |
| yarn global upgrade | Cập nhật các gói đã được cài đặt toàn cục lên phiên bản mới nhất |
| yarn global list | Liệt kê các gói đã được cài đặt toàn cục |
| yarn run `<script`>  | Chạy một script được định nghĩa trong file package.json |
| yarn run `<script`> -- `<args`> | Chạy một script được định nghĩa trong file package.json với các tham số |
| yarn run `<script`> -- --help | Hiển thị trợ giúp cho một script được định nghĩa trong file package.json |
| yarn run `<script`> -- --silent | Chạy một script được định nghĩa trong file package.json với chế độ ẩn thông báo |
| yarn run `<script`> -- --verbose | Chạy một script được định nghĩa trong file package.json với chế độ hiển thị thông báo chi tiết |
| yarn run `<script`> -- --json | Chạy một script được định nghĩa trong file package.json với chế độ hiển thị thông báo dưới dạng JSON |
| yarn run `<script`> -- --ignore-scripts | Chạy một script được định nghĩa trong file package.json với chế độ bỏ qua các script được định nghĩa trong file package.json |
| yarn run `<script`> -- --no-progress | Chạy một script được định nghĩa trong file package.json với chế độ ẩn thông báo tiến trình |
| yarn run `<script`> -- --non-interactive | Chạy một script được định nghĩa trong file package.json với chế độ không sử dụng chế độ tương tác |
| yarn run `<script`> -- --scripts-prepend-node-path | Chạy một script được định nghĩa trong file package.json với chế độ thêm đường dẫn của Node.js vào biến môi trường PATH |
| yarn run `<script`> -- --cwd | Chạy một script được định nghĩa trong file package.json với chế độ thay đổi thư mục làm việc |
| yarn run `<script`> -- --frozen-lockfile | Chạy một script được định nghĩa trong file package.json với chế độ bảo vệ file yarn.lock |
| yarn run `<script`> -- --ignore-engines | Chạy một script được định nghĩa trong file package.json với chế độ bỏ qua kiểm tra phiên bản Node.js |

