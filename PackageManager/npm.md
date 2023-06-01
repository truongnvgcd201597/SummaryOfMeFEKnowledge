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
- --prefix <đường dẫn>: Chỉ định thư mục cài đặt package.
- --production: Cài đặt các package cần thiết cho production.
- --ignore-scripts: Không thực thi bất kỳ script postinstall nào.
- --no-optional: Không cài đặt package optional.

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

## 8. NPM Scripts:
> NPM Scripts là một tính năng của NPM, cho phép bạn thực thi các lệnh trong file package.json. NPM Scripts có thể được sử dụng để thực thi các lệnh trong quá trình phát triển ứng dụng, như chạy các lệnh kiểm tra mã, biên dịch mã, hoặc triển khai ứng dụng.

Trong file package.json, bạn có thể thêm một thuộc tính scripts để chứa các lệnh cần thực thi. Ví dụ:
```
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```
Trong ví dụ trên, chúng ta có hai lệnh được định nghĩa trong thuộc tính scripts:
- Lệnh start: Chạy lệnh node index.js.
- Lệnh test: Chạy lệnh echo "Error: no test specified" && exit 1.

Để thực thi các lệnh này, bạn có thể sử dụng câu lệnh npm run <tên lệnh>. Ví dụ:
```
npm run start
npm run test
```

## 9. Các lệnh NPM:
> NPM cung cấp một số lệnh hữu ích để quản lý các package trong ứng dụng của bạn. Các lệnh này có thể được sử dụng để cài đặt, cập nhật, xóa các package, hoặc kiểm tra các thông tin về các package.

Các lệnh NPM thường được sử dụng:
### 9.1. Lệnh khởi tạo:
| Lệnh | Mô tả |
| --- | --- |
| npm init | Khởi tạo file package.json |
| npm init -y | Khởi tạo file package.json với các giá trị mặc định |
| npm init --yes | Khởi tạo file package.json với các giá trị mặc định |
| npm init --scope=<tên scope> | Khởi tạo file package.json với tên scope |
| npm init --scope=<tên scope> --yes | Khởi tạo file package.json với tên scope và các giá trị mặc định |

## 9.2. Lệnh cài đặt:
| Lệnh | Mô tả |
| --- | --- |
| npm install | Cài đặt các package được liệt kê trong file package.json |
| npm install <tên package> | Cài đặt một package |
| npm install <tên package>@<phiên bản> | Cài đặt một package với phiên bản cụ thể |
| npm install <tên package>@<phiên bản> --save | Cài đặt một package với phiên bản cụ thể và lưu vào file package.json, trong phần dependencies. |
| npm install <tên package>@<phiên bản> --save-dev | Cài đặt một package với phiên bản cụ thể và lưu vào file package.json, trong phần devDependencies. |
| npm install <tên package>@<phiên bản> --save-optional | Cài đặt một package với phiên bản cụ thể và lưu vào file package.json, trong phần optionalDependencies. |
| npm install <tên package>@<phiên bản> --save-exact | Cài đặt một package với phiên bản cụ thể và lưu vào file package.json, trong phần dependencies. |
| npm install <tên package>@<phiên bản> --no-save | Cài đặt một package với phiên bản cụ thể, nhưng không lưu vào file package.json. |
| npm install <tên package>@<phiên bản> --global | Cài đặt một package với phiên bản cụ thể, nhưng không lưu vào file package.json. |
| npm install <tên package>@<phiên bản> --no-package-lock | Cài đặt một package cụ thể (tên và phiên bản được chỉ định) và tắt tính năng khóa package lock. |
| npm install <tên package>@<phiên bản> --dry-run | Để kiểm tra xem việc cài đặt một package cụ thể sẽ diễn ra như thế nào, mà không thực sự cài đặt gói đó. |
| npm install <tên package>@<phiên bản> --force | Cài đặt một package cụ thể trong phiên bản cụ thể và ghi đè lên bất kỳ version nào hiện có của package đó, bất kể phiên bản đó có được yêu cầu bởi các package khác hoặc không. |
| npm install <tên package>@<phiên bản> --legacy-bundling | Dùng để bật chế độ "đóng gói cũ" (legacy bundling) khi cài đặt package. Chế độ này giúp tránh xung đột giữa các phiên bản của package và phụ thuộc vào các gói cài đặt trước đó. |
| npm install <tên package>@<phiên bản> --no-shrinkwrap | Cài đặt một package với phiên bản cụ thể, một package cụ thể và không tạo file npm-shrinkwrap.json. |
| npm install <tên package>@<phiên bản> --only=prod | Cài đặt các dependencies được liệt kê trong phần "dependencies" của tệp package.json, bỏ qua các dependencies trong phần "devDependencies". |
| npm install <tên package>@<phiên bản> --only=dev | Cài đặt  các dependencies cần thiết cho môi trường phát triển (development environment) của một ứng dụng.  |
| npm install <tên package>@<phiên bản> --package-lock-only | Được sử dụng để tạo lại file package-lock.json mà không cài đặt bất kỳ gói nào. |
| npm install <tên package>@<phiên bản> --production | Cài đặt một package cụ thể cùng với tất cả các dependencies của nó, nhưng chỉ bao gồm các dependencies được liệt kê trong mục "dependencies" của package.json. |
| npm install <tên package>@<phiên bản> --registry=<địa chỉ registry> | Cài đặt một package cụ thể từ một registry cụ thể. Mặc định, npm sử dụng registry chính thức của nó tại https://registry.npmjs.org/. |

## 9.3. Lệnh cập nhật:
| Lệnh | Mô tả |
| --- | --- |
| npm update | Cập nhật tất cả các package được liệt kê trong file package.json |
| npm update <tên package> | Cập nhật một package |
| npm update <tên package>@<phiên bản> | Cập nhật một package với phiên bản cụ thể |
| npm update <tên package>@<phiên bản> --save | Cập nhật một package với phiên bản cụ thể và lưu vào file package.json, trong phần dependencies. |
| npm update <tên package>@<phiên bản> --save-dev | Cập nhật một package với phiên bản cụ thể và lưu vào file package.json, trong phần devDependencies. |
| npm update <tên package>@<phiên bản> --save-optional | Cập nhật một package với phiên bản cụ thể và lưu vào file package.json, trong phần optionalDependencies. |
| npm update <tên package>@<phiên bản> --save-exact | Cập nhật một package với phiên bản cụ thể và lưu vào file package.json, trong phần dependencies. |
| npm update <tên package>@<phiên bản> --no-save | Cập nhật một package với phiên bản cụ thể, nhưng không lưu vào file package.json. |
| npm update <tên package>@<phiên bản> --global | Cập nhật một package với phiên bản cụ thể, nhưng không lưu vào file package.json. |
| npm update <tên package>@<phiên bản> --no-package-lock | Cập nhật một package cụ thể (tên và phiên bản được chỉ định) và tắt tính năng khóa package lock. |
| npm update <tên package>@<phiên bản> --dry-run | Để kiểm tra xem việc cập nhật một package cụ thể sẽ diễn ra như thế nào, mà không thực sự cập nhật gói đó. |
| npm update <tên package>@<phiên bản> --force | Cập nhật một package cụ thể trong phiên bản cụ thể và ghi đè lên bất kỳ version nào hiện có của package đó, bất kể phiên bản đó có được yêu cầu bởi các package khác hoặc không. |

## 9.4. Lệnh gỡ bỏ:
| Lệnh | Mô tả |
| --- | --- |
| npm uninstall <tên package> | Gỡ bỏ một package |
| npm rm <tên package> | Gỡ bỏ một package |
| npm uninstall <tên package> --save | Gỡ bỏ một package và lưu vào file package.json, trong phần dependencies. |
| npm uninstall <tên package> --save-dev | Gỡ bỏ một package và lưu vào file package.json, trong phần devDependencies. |
| npm uninstall <tên package> --save-optional | Gỡ bỏ một package và lưu vào file package.json, trong phần optionalDependencies. |
| npm uninstall <tên package> --save-exact | Gỡ bỏ một package và lưu vào file package.json, trong phần dependencies. |
| npm uninstall <tên package> --no-save | Gỡ bỏ một package, nhưng không lưu vào file package.json. |
| npm outdated | Liệt kê các package đã cài đặt và có phiên bản mới hơn. |
| npm install -g npm-check-updates && ncu -u | Cài đặt npm-check-updates và sử dụng nó để cập nhật tất cả các package trong file package.json lên phiên bản mới nhất. |
| npm install -g npm-check | Cài đặt npm-check và sử dụng nó để kiểm tra tất cả các package đã cài đặt và thông báo về những package cần cập nhật lên phiên bản mới nhất. | 
| npm install -g npm-check | Cài đặt npm-check và sử dụng nó để kiểm tra tất cả các package đã cài đặt và thông báo về những package cần cập nhật lên phiên bản mới nhất. |

## 9.5. Lệnh tìm kiếm:
| Lệnh | Mô tả |
| --- | --- |
| npm search <tên package> | Tìm kiếm một package |
| npm search <tên package> --json | Tìm kiếm một package và trả về kết quả dưới dạng JSON. |
| npm search <tên package> --parseable | Tìm kiếm một package và trả về kết quả dưới dạng parseable. |
| npm search <tên package> --long | Tìm kiếm một package và trả về kết quả dưới dạng long. |
| npm search <tên package> --unicode | Tìm kiếm một package và trả về kết quả dưới dạng unicode. |
| npm search <tên package> --no-unicode | Tìm kiếm một package và trả về kết quả dưới dạng không unicode. |
| npm search <tên package> --global | Tìm kiếm một package và trả về kết quả dưới dạng global. |
| npm search <tên package> --no-global | Tìm kiếm một package và trả về kết quả dưới dạng không global. |
| npm search <tên package> --production | Tìm kiếm một package và trả về kết quả dưới dạng production. |
| npm search <tên package> --no-production | Tìm kiếm một package và trả về kết quả dưới dạng không production. |

## 9.6. Lệnh xem thông tin:
| Lệnh | Mô tả |
| --- | --- |
| npm info <tên package> | Xem thông tin một package |
| npm info <tên package> --json | Xem thông tin một package 

## 9.7. Lệnh xem danh sách:
| Lệnh | Mô tả |
| --- | --- |
| npm list | Xem danh sách các package đã cài đặt |
| npm ls | Xem danh sách các package đã cài đặt |
| npm list --depth=0 | Xem danh sách các package đã cài đặt và không hiển thị các package con của các package đã cài đặt. |
| npm list --depth=1 | Xem danh sách các package đã cài đặt và hiển thị các package con của các package đã cài đặt. |
| npm list --depth=2 | Xem danh sách các package đã cài đặt và hiển thị các package con của các package đã cài đặt, và các package con của các package con đã cài đặt. |

## 9.8. Lệnh xem chi tiết:
| Lệnh | Mô tả |
| --- | --- |
| npm view <tên package> | Xem chi tiết một package |
| npm view <tên package> --json | Xem chi tiết một package và trả về kết quả dưới dạng JSON. |

## 9.9. Lệnh xem tài liệu:
| Lệnh | Mô tả |
| --- | --- |
| npm help | Xem tài liệu |
| npm help <tên lệnh> | Xem tài liệu của một lệnh |
| npm help <tên lệnh> --json | Xem tài liệu của một lệnh và trả về kết quả dưới dạng JSON. |
| npm help <tên lệnh> --parseable | Xem tài liệu của một lệnh và trả về kết quả dưới dạng parseable. |
| npm help <tên lệnh> --long | Xem tài liệu của một lệnh và trả về kết quả dưới dạng long. |
| npm help <tên lệnh> --unicode | Xem tài liệu của một lệnh và trả về kết quả dưới dạng unicode. |

## 9.10. Lệnh set:
| Lệnh | Mô tả |
| --- | --- |
| npm set <tên package> | Set một package |
| npm set <tên package> --json | Set một package và trả về kết quả dưới dạng JSON. |
| npm set init.author.name "Nguyễn Văn A" | Set tên tác giả cho package. |
| npm set init.liscense "MIT" | Set giấy phép cho package. |
| npm set init.version "1.0.0" | Set phiên bản cho package. |

## 9.11. Lệnh:
- npm get: Lệnh này được sử dụng để lấy giá trị của một biến cấu hình trong NPM. Ví dụ, nếu bạn muốn xem giá trị của biến registry, bạn có thể sử dụng lệnh sau: npm get registry.
- npm set: Lệnh này được sử dụng để thiết lập giá trị cho một biến cấu hình trong NPM. Ví dụ, nếu bạn muốn thiết lập giá trị cho biến registry thành http://registry.npmjs.org/, bạn có thể sử dụng lệnh sau: npm set registry http://registry.npmjs.org/.
- npm delete: Lệnh này được sử dụng để xóa một biến cấu hình đã được thiết lập trong NPM. Ví dụ, nếu bạn muốn xóa giá trị của biến registry, bạn có thể sử dụng lệnh sau: npm delete registry.