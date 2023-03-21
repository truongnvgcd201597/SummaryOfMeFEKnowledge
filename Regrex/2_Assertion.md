# Assertion (/^assertions $/m)
> Nhóm assertion trong Regular Expression (Regex) là các ký tự đặc biệt được sử dụng để đặt các ràng buộc về vị trí của các chuỗi ký tự cần tìm kiếm. Các nhóm assertion không tìm kiếm các ký tự nhưng đánh giá vị trí của các chuỗi ký tự mà bạn đang tìm kiếm. Các nhóm assertion cơ bản trong Regex bao gồm:


## 1.1. /^pattern/flags
ký tự ^ được sử dụng để chỉ định rằng một mẫu cần phải được tìm thấy ở đầu của chuỗi ký tự. Cụ thể, khi sử dụng ký tự ^ ở đầu mẫu, nó sẽ tìm kiếm các chuỗi ký tự bắt đầu với mẫu đó.

Ví dụ, mẫu /^hello/ sẽ tìm kiếm các chuỗi ký tự bắt đầu với từ "hello". Các chuỗi ký tự phù hợp có thể là "hello world", "hello there", "hello everyone", nhưng không phù hợp với các chuỗi như "say hello", "saying hello", vì chúng không bắt đầu bằng "hello".

Ngoài ra, ký tự ^ còn được sử dụng trong một số tập ký tự (character class) để chỉ định các ký tự không được phép xuất hiện trong chuỗi ký tự cần tìm kiếm. Ví dụ, mẫu [^aeiou] sẽ tìm kiếm các ký tự không phải là nguyên âm.
  
## 1.2. /pattern$/flags
ký tự $ được sử dụng để chỉ định rằng một mẫu cần phải được tìm thấy ở cuối của chuỗi ký tự. Cụ thể, khi sử dụng ký tự $ ở cuối mẫu, nó sẽ tìm kiếm các chuỗi ký tự kết thúc với mẫu đó.

Ví dụ, mẫu /world$/ sẽ tìm kiếm các chuỗi ký tự kết thúc bằng từ "world". Các chuỗi ký tự phù hợp có thể là "hello world", "goodbye world", "welcome to the world", nhưng không phù hợp với các chuỗi như "world hello", "world of wonder", vì chúng không kết thúc bằng "world".

Ngoài ra, ký tự $ cũng có thể được sử dụng trong một số tập ký tự (character class) để chỉ định các ký tự chỉ được phép xuất hiện ở cuối chuỗi ký tự cần tìm kiếm. Ví dụ, mẫu /[0-9]$/ sẽ tìm kiếm các chuỗi ký tự kết thúc bằng một chữ số.

## 1.3. /\b pattern/flags:
Trong Regular Expression (Regex), ký tự \b (word    ) được sử dụng để chỉ định một ranh giới từ (word) trong chuỗi ký tự cần tìm kiếm. Cụ thể, nó được sử dụng để chỉ định một vị trí trên chuỗi ký tự mà ở đó một từ bắt đầu hoặc kết thúc.

Ví dụ, mẫu /\bworld\b/ sẽ tìm kiếm các chuỗi ký tự chứa từ "world" mà nó phải là một từ đơn và không được chứa trong một từ khác. Các chuỗi ký tự phù hợp có thể là "hello world", "world, hello", "goodbye world", nhưng không phù hợp với các chuỗi như "worldwide", "worldview", "worlds", vì chúng không là một từ đơn chứa "world".

Ngoài ra, ký tự \b cũng có thể được sử dụng để tìm kiếm các từ bắt đầu hoặc kết thúc bằng một mẫu cụ thể. Ví dụ, mẫu /^\bhello/ sẽ tìm kiếm các từ bắt đầu bằng "hello", còn mẫu /\bworld$/ sẽ tìm kiếm các từ kết thúc bằng "worl