# Character Classes
> Trong Regular Expression (Regex), character classes (tập ký tự) được sử dụng để chỉ định một nhóm các ký tự có thể xuất hiện trong một chuỗi ký tự cần tìm kiếm.

Các ký tự trong character classes được đặt trong cặp dấu ngoặc vuông [ ] và có thể là một ký tự đơn, một khoảng ký tự (range) hoặc một tập hợp các ký tự.

## 1. Ký tự đơn:

| Regex | Mô tả |
| --- | --- |
| [abc] | Tìm kiếm một ký tự trong tập hợp ký tự "abc" |
| [^abc] | Tìm kiếm một ký tự không nằm trong tập hợp ký tự "abc" |
| [a-zA-Z] | Tìm kiếm một ký tự trong khoảng từ "a" đến "z" hoặc từ "A" đến "Z" |
| [0-9] | Tìm kiếm một ký tự trong khoảng từ "0" đến "9" |
| [a-d[m-p]] | Tìm kiếm một ký tự trong tập hợp ký tự "a", "b", "c", "d", "m", "n", "o", "p" |

## 2. \d:
ký tự \d được sử dụng để tìm kiếm bất kỳ chữ số (digit) nào từ 0 đến 9. Ký tự này tương đương với character class [0-9].

Ví dụ, mẫu /a\d\w/ sẽ tìm kiếm các chuỗi ký tự bắt đầu bằng một ký tự a, tiếp theo là bất kỳ chữ số nào và sau đó là bất kỳ ký tự word (bao gồm chữ cái, số và dấu gạch dưới) nào.

## 3. \w:
 ký tự \w được sử dụng để tìm kiếm bất kỳ ký tự word (bao gồm chữ cái, số và dấu gạch dưới) nào. Ký tự này tương đương với character class [a-zA-Z0-9_].

Ví dụ, mẫu /^\w+$/ sẽ tìm kiếm các chuỗi ký tự bắt đầu và kết thúc bằng bất kỳ ký tự word (bao gồm chữ cái, số và dấu gạch dưới) nào.

## 4. \s:
Ký tự \s được sử dụng để tìm kiếm bất kỳ khoảng trắng (space), tab hoặc newline character nào. Ký tự này tương đương với character class [\t\n\f\r\p{Z}].

Ví dụ, mẫu /Hello\sWorld/ sẽ tìm kiếm các chuỗi ký tự bắt đầu bằng "Hello", sau đó là bất kỳ khoảng trắng nào, và cuối cùng là "World".
