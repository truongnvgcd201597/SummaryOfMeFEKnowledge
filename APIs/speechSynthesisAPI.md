# 1. speechSynthesis là gì?
> window.speechSynthesis là một API trong trình duyệt web HTML5 cho phép các trang web tạo ra giọng nói tự động và dễ dàng điều khiển bằng JavaScript. Nó cho phép truy cập đến các tính năng của trình tổng hợp giọng nói của hệ thống hoặc các dịch vụ bên ngoài để tạo ra các thông báo, chỉ dẫn và lời nhắc trong ứng dụng web. API này hỗ trợ các tính năng như lựa chọn giọng nói, tốc độ và âm lượng, cùng với các sự kiện để phát hiện và điều khiển quá trình nói.

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

# 2. Cách thức triển khai:
 __Step 1:__  Tạo một đối tượng SpeechSynthesisUtterance để thiết lập nội dung giọng nói:
```
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello, world!";
```

__Step 2:__ Một hàm tạo ra để phát giọng nói:
```
function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
```
__Option__: Các tuỳ chọn cho giọng nói:
```
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello, world!";
msg.voice = window.speechSynthesis.getVoices()[0];
msg.rate = 1.5;
msg.pitch = 1;
window.speechSynthesis.speak(msg);
```

(⚠️):  *Các tính năng window.speechSynthesis có thể không được hỗ trợ trên tất cả các trình duyệt và thiết bị.*

__Step 3:__ Lấy danh sách các giọng nói được hỗ trợ bởi hệ thống:
```
var voices = window.speechSynthesis.getVoices();
```
__Step 4:__ Đăng ký sự kiện để theo dõi quá trình phát giọng nói:
```
var msg = new SpeechSynthesisUtterance();
msg.text = "Hello, world!";
msg.onstart = function(event) {
  console.log("Speech started");
};
msg.onend = function(event) {
  console.log("Speech ended");
};
window.speechSynthesis.speak(msg);
```

__Step 5:__ Dừng hoặc tạm dừng quá trình phát giọng nói:
```
window.speechSynthesis.pause();
window.speechSynthesis.resume();
window.speechSynthesis.cancel();
```

# 3. 101 Questions of me:
### 1. synth.onvoiceschanged là gì:
> là một sự kiện trong API window.speechSynthesis của trình duyệt web HTML5. Sự kiện này xảy ra khi danh sách các giọng nói được hỗ trợ bởi hệ thống được cập nhật.

Khi xảy ra sự kiện synth.onvoiceschanged, ta có thể lấy danh sách các giọng nói hiện có thông qua window.speechSynthesis.getVoices(). Ta có thể sử dụng danh sách này để định cấu hình giọng nói cho ứng dụng của mình, chẳng hạn như thiết lập giọng nói mặc định hoặc cung cấp cho người dùng các tùy chọn giọng nói.
```
// Thiết lập sự kiện onvoiceschanged
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  // Lấy danh sách giọng nói
  const voices = synth.getVoices();
  // Định cấu hình giọng nói ở đây...
}
```
