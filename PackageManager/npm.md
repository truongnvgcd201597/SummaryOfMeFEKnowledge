# NPM

## 1. NPM là gì?
> NPM là viết tắt của "Node Package Manager" - một công cụ quản lý gói phần mềm cho Node.js. Nó được sử dụng để tải xuống và cài đặt các module (gói) JavaScript có sẵn từ các nguồn mở khác nhau, cũng như để quản lý các gói mà bạn đã cài đặt trong dự án của mình. Bằng cách sử dụng NPM, bạn có thể đơn giản hóa quá trình phát triển và quản lý các ứng dụng Node.js của mình.

NPM được cài đặt kèm theo Node.js, do đó chúng ta không cần phải cài đặt NPM riêng lẻ nếu chúng ta đã cài đặt Node.js. chúng ta có thể sử dụng lệnh npm trong terminal hoặc command prompt để sử dụng các tính năng của NPM. Ví dụ, chúng ta có thể sử dụng lệnh `npm install <tên gói>` để cài đặt một gói JavaScript từ kho lưu trữ NPM.

## 2. Các lệnh NPM cơ bản:
- npm init: Tạo một tệp package.json mới cho dự án của bạn. Lệnh này sẽ hỏi bạn về các chi tiết của dự án của bạn, bao gồm tên, phiên bản, tác giả, mô tả, các gói phụ thuộc, và nhiều tùy chọn khác.
- npm install <tên gói>: Cài đặt một gói JavaScript từ kho lưu trữ NPM vào dự án của bạn. Bạn có thể sử dụng tùy chọn --save hoặc --save-dev để lưu gói vào tệp package.json của bạn, tùy thuộc vào việc gói đó có phải là một phụ thuộc runtime (được sử dụng trong quá trình chạy ứng dụng) hay là một phụ thuộc phát triển (chỉ được sử dụng trong quá trình phát triển).
- npm update: Cập nhật các gói đã cài đặt trong dự án của bạn lên phiên bản mới nhất.
- npm uninstall <tên gói>: Gỡ bỏ một gói đã cài đặt khỏi dự án của bạn.
- npm search <tên gói>: Tìm kiếm các gói JavaScript trên NPM theo tên hoặc từ khóa.
- npm ls hoặc npm list: Liệt kê tất cả các gói đã cài đặt trong dự án của bạn, cùng với phiên bản và phụ thuộc của chúng.
- npm help: Hiển thị trợ giúp về các lệnh khác của NPM.
- npm publish: Đăng ký một gói JavaScript của riêng bạn trên NPM.

## 3. Các tệp quan trọng trong NPM:
- .package.json: Tệp này chứa các thông tin về dự án của bạn, bao gồm tên, phiên bản, tác giả, mô tả, các gói phụ thuộc, và nhiều tùy chọn khác. Nó được tạo ra bởi lệnh npm init. Nó được sử dụng để cài đặt các gói phụ thuộc cho dự án của bạn.
- .package-lock.json: Tệp này chứa thông tin về các gói phụ thuộc của dự án của bạn, bao gồm phiên bản, tên, và các thông tin khác. Nó được tạo ra bởi lệnh npm install. Nó được sử dụng để cài đặt các gói phụ thuộc cho dự án của bạn.
- .node_modules: Thư mục này chứa các gói phụ thuộc của dự án của bạn. Nó được tạo ra bởi lệnh npm install. Nó được sử dụng để cài đặt các gói phụ thuộc cho dự án của bạn.
npmrc: Tệp này chứa các tùy chọn cấu hình cho npm, bao gồm cài đặt proxy, bật / tắt cache, tùy chỉnh đường dẫn và nhiều hơn nữa.
- .npmignore: Tệp này được sử dụng để chỉ định các tệp và thư mục sẽ không được đóng gói và cài đặt trong một package. Điều này có thể hữu ích khi bạn muốn loại bỏ các tệp không cần thiết trong sản phẩm cuối cùng.
- .npmrc: Tệp này có thể được sử dụng để cấu hình tùy chọn mặc định cho npm cho tất cả các dự án trên máy tính của bạn.
- README.md: Tệp này chứa thông tin về dự án, bao gồm cách sử dụng, tạo động lực phát triển và cách cài đặt. Đây là một phần quan trọng của dự án, giúp cho người sử dụng có thể hiểu được cách sử dụng sản phẩm của bạn.

Tất cả các tệp này là rất quan trọng trong quá trình phát triển 

## 4. Các tùy chọn cài đặt NPM:
- --save hoặc -s: Lưu gói vào tệp package.json của bạn, trong phần dependencies.
- --save-dev hoặc -D: Lưu gói vào tệp package.json của bạn, trong phần devDependencies.
- --global hoặc -g: Cài đặt gói toàn cục, có nghĩa là nó sẽ được cài đặt cho toàn hệ thống của bạn, thay vì chỉ cài đặt cho dự án hiện tại của bạn.
* --no-save: Tùy chọn này sẽ cài đặt package mà không thêm nó vào phần "dependencies" hoặc "devDependencies" trong package.json.
* --dry-run: Tùy chọn này sẽ không cài đặt package, nhưng sẽ hiển thị những gì sẽ xảy ra nếu bạn cài đặt package đó.
* --force: Tùy chọn này sẽ buộc cài đặt package, ngay cả khi phiên bản của package không tương thích với phiên bản của npm hoặc node.

## 5. Các tùy chọn cập nhật NPM:
Có một số tùy chọn để cập nhật NPM:
- Cập nhật NPM lên phiên bản mới nhất: Sử dụng lệnh npm install -g npm để cập nhật NPM lên phiên bản mới nhất.
- Cập nhật phụ thuộc của dự án lên phiên bản mới nhất:
Sử dụng lệnh npm update để cập nhật phụ thuộc của dự án lên phiên bản mới nhất. Nếu bạn muốn chỉ cập nhật một phụ thuộc cụ thể, hãy sử dụng npm update <package_name>.
- Cập nhật phiên bản của phụ thuộc của dự án: Sử dụng lệnh npm install <package_name>@<version> để cài đặt phiên bản cụ thể của một phụ thuộc.
- Kiểm tra sự khả dụng của phiên bản mới:
Sử dụng lệnh `npm outdated` để xem các phụ thuộc trong dự án có phiên bản mới không.
- Cài đặt phiên bản beta hoặc phiên bản thử nghiệm:
Sử dụng lệnh `npm install <package_name>@beta` hoặc `npm install <package_name>@next` để cài đặt phiên bản beta hoặc phiên bản thử nghiệm của một phụ thuộc.
- Xóa phụ thuộc không sử dụng: Sử dụng lệnh npm prune để xóa các phụ thuộc không sử dụng từ thư mục node_modules.
- Các tùy chọn này có thể giúp bạn duy trì các phụ thuộc của dự án của bạn luôn cập nhật và đảm bảo tính ổn định của ứng dụng của bạn.

## 6. DevDependencies và Dependencies:
Trong file package.json của một ứng dụng Node.js, có hai thuộc tính quan trọng để quản lý các phụ thuộc của ứng dụng đó: dependencies và devDependencies. Cả hai thuộc tính này đều liệt kê các gói phần mềm được sử dụng trong ứng dụng của bạn, nhưng chúng có một số khác biệt như sau:

- dependencies: Đây là danh sách các gói phần mềm cần thiết cho ứng dụng của bạn hoạt động đúng. Các gói phần mềm này sẽ được cài đặt khi bạn chạy lệnh `npm install` để cài đặt các phụ thuộc cho ứng dụng. Các gói này thường là các thư viện JavaScript cần thiết để thực hiện các chức năng trong ứng dụng của bạn, ví dụ như Express.js, React, hoặc lodash.

- devDependencies: Đây là danh sách các gói phần mềm được sử dụng để phát triển ứng dụng, chẳng hạn như các trình biên dịch, trình gỡ lỗi, hoặc các gói kiểm tra mã. Các gói này không cần thiết cho ứng dụng chạy, nhưng lại là rất hữu ích trong quá trình phát triển và kiểm thử ứng dụng. Các gói phần mềm này sẽ không được cài đặt khi bạn triển khai ứng dụng của mình, chỉ khi bạn chạy lệnh npm install với tùy chọn `--dev` hoặc `--only=dev`.

Tóm lại, dependencies và devDependencies là hai danh sách các gói phần mềm được sử dụng trong ứng dụng Node.js, tuy nhiên dependencies là các gói cần thiết cho ứng dụng hoạt động đúng, trong khi devDependencies là các gói hữu ích cho quá trình phát triển và kiểm thử ứng dụng.

## 7. Sematic Versioning:
> Sematic Versioning (viết tắt là SemVer) là một quy tắc đánh số phiên bản cho các ứng dụng, các thư viện, các framework hoặc các gói phần mềm khác. SemVer giúp cho người dùng và nhà phát triển hiểu được những thay đổi quan trọng được thực hiện trong phiên bản phần mềm, mà không cần phải đọc toàn bộ các chi tiết kỹ thuật của phiên bản đó.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1627119708278/PXWhudMNx.png)

Theo quy tắc `SemVer`, một số phiên bản có thể được định nghĩa bởi ba thành phần chính:
- Phiên bản chính (major): Được tăng lên khi thực hiện các thay đổi không tương thích ngược với các phiên bản trước đó.
- Phiên bản phụ (minor): Được tăng lên khi thực hiện các tính năng mới, nhưng vẫn đảm bảo tương thích ngược với các phiên bản trước đó.
- Phiên bản sửa lỗi (patch): Được tăng lên khi thực hiện các sửa lỗi, bảo mật hoặc các cập nhật nhỏ khác, vẫn đảm bảo tương thích ngược với các phiên bản trước đó.

Thêm vào đó, một số quy tắc khác cũng có thể được sử dụng trong SemVer, bao gồm:
- Pre-release version: Được đặt tên là rc, beta, alpha, để chỉ phiên bản beta hoặc phiên bản thử nghiệm.
- Build metadata: Được đặt tên là + theo sau là metadata cho phiên bản đó, ví dụ như build time, hash code,...
- Khi sử dụng SemVer, những người dùng và nhà phát triển có thể đánh giá được mức độ phù hợp của phiên bản phần mềm mới nhất với các phiên bản trước đó và quyết định liệu có nên nâng cấp phiên bản mới hay không.

Trong semantic versioning (semver), các dấu * ~ ^ được sử dụng để chỉ định phạm vi phiên bản của một module hoặc package trong file package.json.
- Dấu * được sử dụng để chỉ định bất kỳ phiên bản nào của package. Điều này không nên được sử dụng trong sản phẩm thực tế, vì nó có thể dẫn đến sự không ổn định của ứng dụng.
- Dấu ~ được sử dụng để chỉ định phiên bản gần nhất trong cùng một phiên bản chính của package. Ví dụ: ~1.2.3 có nghĩa là phiên bản 1.2.x, với bản vá (patch) cuối cùng không vượt quá 3.
- Dấu ^ được sử dụng để chỉ định phiên bản gần nhất trong cùng một phiên bản lớn của package. Ví dụ: ^1.2.3 có nghĩa là phiên bản 1.x.x, với bản vá (patch) cuối cùng không vượt quá 3.
- Dấu > được sử dụng để chỉ định phiên bản lớn hơn phiên bản cụ thể. Ví dụ: >1.2.3 có nghĩa là phiên bản lớn hơn 1.2.3.
- Dấu < được sử dụng để chỉ định phiên bản nhỏ hơn phiên bản cụ thể. Ví dụ: <1.2.3 có nghĩa là phiên bản nhỏ hơn 1.2.3.

Trong một file package.json, các phạm vi phiên bản này được sử dụng để chỉ định phiên bản của các phụ thuộc cần thiết cho ứng dụng của bạn. Việc sử dụng chính xác phạm vi phiên bản là rất quan trọng để đảm bảo tính ổn định của ứng dụng của bạn và tránh các xung đột phiên bản không mong muốn.