# DOM Property

## 1. Thuộc tính liên quan đến kích thước và vị trí:
- document.width: trả về chiều rộng của trang web.
- document.height: trả về chiều cao của trang web.
- document.documentElement.clientWidth: trả về chiều rộng của phần tử html.
- document.documentElement.clientHeight: trả về chiều cao của phần tử html.
- document.documentElement.scrollTop: trả về khoảng cách từ đỉnh trang web đến đỉnh phần tử html.
- document.documentElement.scrollLeft: trả về khoảng cách từ bên trái trang web đến bên trái phần tử html.

## 2. Phương thức liên quan đến tải tài liệu:
- document.readyState: trả về trạng thái tải tài liệu.
- document.createElementNS(namespaceURI, qualifiedName): tạo một phần tử mới với tên đầy đủ là qualifiedName và namespaceURI.
- document.createAttribute(name): tạo một thuộc tính mới với tên là name.
- document.createComment(text): tạo một đoạn comment mới.
- document.adoptNode(node): chuyển node sang tài liệu hiện tại.
- document.createAttributeNS(namespaceURI, qualifiedName): tạo một thuộc tính mới với tên đầy đủ là qualifiedName và namespaceURI.

## 3. Phương thức liên quan đến khung (frame):
- document.frames: trả về tất cả các khung trên trang web.
- document.parentWindow: trả về cửa sổ cha của khung hiện tại.
- document.defaultView: trả về đối tượng cửa sổ của khung hiện tại.

## 4. Phương thức liên quan đến định dạng và mã hóa:
- document.characterSet: trả về bộ ký tự được sử dụng trong tài liệu.
- document.contentType: trả về kiểu nội dung của tài liệu.
- document.createProcessingInstruction(target, data): tạo một chỉ thị xử lý mới với mục tiêu là target và dữ liệu là data.

## 5. Phương thức liên quan đến tìm kiếm:
- document.getElementById(id): trả về phần tử có id là id.
- document.getElementsByName(name): trả về tất cả các phần tử có thuộc tính name là name.
- document.getElementsByTagName(name): trả về tất cả các phần tử có tên là name.
- document.getElementsByClassName(name): trả về tất cả các phần tử có class là name.
- document.querySelector(selectors): trả về phần tử đầu tiên thỏa mãn selectors.
- document.querySelectorAll(selectors): trả về tất cả các phần tử thỏa mãn selectors.

## 6. Phương thức liên quan đến tiện ích:
- document.close(): đóng tài liệu hiện tại.
- document.open(): mở một tài liệu mới.
- document.getElementById(id).focus(): đặt trỏ chuột tại phần tử có id tương ứng.
- document.getElementById(id).blur(): loại bỏ trỏ chuột khỏi phần tử có id tương ứng.

## 7. Phương thức liên quan đến sự kiện:
- document.addEventListener(type, listener, useCapture): thêm một sự kiện vào tài liệu hiện tại.
- document.removeEventListener(type, listener, useCapture): xóa một sự kiện khỏi tài liệu hiện tại.
- document.createEvent(eventType): tạo một sự kiện mới với kiểu là eventType.

## 8. Phương thức liên quan đến thông tin về tài liệu:
- document.lastModified: trả về thời điểm sửa đổi cuối cùng của tài liệu.
- document.title: trả về tiêu đề của tài liệu.
- document.URL: trả về địa chỉ URL của tài liệu.
- document.domain: trả về tên miền của tài liệu.

## 9.Phương thức liên quan đến chức năng mở rộng:
- document.createNodeIterator(root, whatToShow, filter): tạo một đối tượng NodeIterator để duyệt qua các nút của tài liệu.
- document.createTreeWalker(root, whatToShow, filter): tạo một đối tượng TreeWalker để duyệt qua cây của tài liệu.

## 10. Phương thức liên quan đến CSS:
- document.styleSheets: trả về tất cả các bảng CSS của tài liệu.
- document.createStyleSheet(href, index): tạo một bảng CSS mới với đường dẫn là href và vị trí là index.
- document.createExpression(expression, resolver): tạo một đối tượng XPathExpression để thực hiện các biểu thức XPath.  
document.createElement(tagName).style: trả về một đối tượng
- CSSStyleDeclaration để tương tác với các thuộc tính CSS của phần tử được tạo ra bởi tagName.

## 11. Phương thức liên quan đến điều hướng:
- document.location: đối tượng Location, cung cấp thông tin về URL hiện tại và phương thức để điều hướng đến các URL khác.
- document.redirect(url): chuyển hướng trang web hiện tại đến - URL được chỉ định.
document.reload(): tải lại trang web hiện tại.

## 12: Phương thức liên quan đến việc xử lý và thực thi mã:
- document.write(text): chèn một chuỗi văn bản vào tài liệu HTML.
- document.writeln(text): chèn một chuỗi văn bản vào tài liệu HTML, với thêm một dòng trống sau đó.
- document.evaluate(expression, contextNode, namespaceResolver, resultType, result): thực thi một biểu thức XPath trên tài liệu và trả về kết quả.

## 13. Phương thức liên quan đến lưu trữ dữ liệu:
- document.cookie: đọc hoặc ghi dữ liệu vào cookie.
- document.localStorage: đối tượng localStorage, cung cấp phương thức để lưu trữ và truy xuất dữ liệu trên máy khách.
- document.sessionStorage: đối tượng sessionStorage, cung cấp phương thức để lưu trữ và truy xuất dữ liệu trong phiên làm việc của trình duyệt.

## 14. Phương thức liên quan đến các thẻ HTML:
- document.createElement(tagName): tạo ra một thẻ HTML mới với tên tagName.
- document.createTextNode(text): tạo ra một nút văn bản mới với nội dung text.
- document.createDocumentFragment(): tạo ra một đối tượng - DocumentFragment mới để tạo và xử lý các phần tử tạm thời trước khi chèn chúng vào tài liệu thật sự.
- document.importNode(externalNode, deep): sao chép một nút từ một tài liệu khác vào tài liệu hiện tại.

## 15. Phương thức liên quan đến các đối tượng HTML:
- document.anchors: trả về tất cả các thẻ a có thuộc tính name.
- document.activeElement: trả về phần tử đang được chọn hoặc trả về null nếu không có phần tử nào được chọn.
- document.designMode: thiết lập hoặc truy xuất trạng thái chế độ thiết kế của tài liệu.
- document.dir: trả về hướng văn bản của tài liệu (ltr - left-to-right hoặc rtl - right-to-left).
- document.forms: trả về một mảng chứa tất cả các phần tử form trong tài liệu.
- document.head: trả về phần tử head trong tài liệu.
- document.images: trả về một mảng chứa tất cả các phần tử img trong tài liệu.
- document.links: trả về một mảng chứa tất cả các phần tử a có thuộc tính href trong tài liệu.
- document.scripts: trả về một mảng chứa tất cả các phần tử script trong tài liệu.
- document.styleSheets: trả về một mảng chứa tất cả các đối tượng StyleSheet trong tài liệu.
- document.defaultView: trả về đối tượng Window hiện tại của tài liệu.
- document.createRange(): tạo ra một đối tượng Range mới để chọn vùng văn bản trong tài liệu.
- document.createNodeIterator(root, whatToShow, filter): tạo ra một đối tượng NodeIterator để lặp lại tất cả các nút con của nút root theo các tiêu chí được chỉ định bởi whatToShow và filter.
- document.createTreeWalker(root, whatToShow, filter): tạo ra một đối tượng TreeWalker để lặp lại tất cả các nút con của nút root theo các tiêu chí được chỉ định bởi whatToShow và filter.
