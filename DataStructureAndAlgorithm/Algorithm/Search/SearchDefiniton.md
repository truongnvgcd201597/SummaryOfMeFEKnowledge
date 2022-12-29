## Linear Search Algorithm.
> Linear Search hay `Tìm kiếm tuyến tính` là một trong những thuộc tính tìm kiếm đơn giản nhất để tìm một phần tử cụ thể trong tập dữ liệu. Nó sẽ kiểm tra từng phần tử với đối tượng tìm kiếm để tìm vị trí của phần tử đang tìm kiếm. Nếu phần tử phù hợp được tìm thấy, thì vị trí của mục sẽ được trả về; nếu không, thuật toán trả về NULL.

Tìm kiếm tuyến tính còn được gọi một kiểu khác là **Thuật toán tìm kiếm tuần tự** (sequential search algorithm) 

Nó được sử dụng rộng rãi để tìm kiếm một danh sách không sắp xếp. Và độ phức tạp thời gian trong trường hợp xấu nhất là O(n). \
![](https://miro.medium.com/max/876/1*m6Ni_Ry4iRIPMHY44uy49A.gif)

Algorithm :
```
Linear_Search(a, n, val)
Step 1: set pos = -1
Step 2: set i = 1
Step 3: repeat step 4 while i <= n
Step 4: if a[i] == val
set pos = i
print pos
go to step 6
[end of if]
set ii = i + 1
[end of loop]
Step 5: if pos = -1
print “value is not present in the array “
[end of if]
Step 6: exit
```
## Binary Search Algorithm.
Tìm kiếm nhị phân tuân theo việc chia và đạt được. Khi thực hiện, phần danh sách sẽ được chia thành hai nửa và mục giữa được so sánh với chi tiết ở giữa của danh sách. Nếu khớp được tìm thấy thì vị trí của phần tử đó, phần tử ở giữa khớp với target sẽ được trả về.

Tìm kiếm nhị phân là một kỹ thuật tìm kiếm nhanh có time complexity là Ο(log n). Để thuật toán hoạt động tốt, các phần tử phải được sắp xếp theo thứ tự tăng dần hoặc giảm dần.
![](https://miro.medium.com/max/1400/1*qWeafEiagnVmBziGQJ4YYw.gif)
```
Algorithm :
Binary_Search(a, lower_bound, upper_bound, val)
Step 1: set beg = lower_bound, end = upper_bound, pos = — 1
Step 2: repeat steps 3 and 4 while beg <=end
Step 3: set mid = (beg + end)/2
Step 4: if a[mid] = val
set pos = mid
print pos
go to step 6
else if a[mid] > val
set end = mid — 1
else
set beg = mid + 1
[end of if]
[end of loop]
Step 5: if pos = -1
print “value is not present in the array”
[end of if]
Step 6: exit
```

## So sánh giữa Binary Search và Linear Search:
`Linear search` chính là tìm kiếm một phần tử trong danh sách tuần tự cho đến khi tìm thấy. Ngược lại, `binary search` là kiểu tìm kiếm tìm phần tử giữa trong danh sách một cách đệ quy cho đến khi phần tử giữa được so khớp với phần tử được tìm kiếm.

### Working:
- `Linear search` bắt đầu tìm kiếm từ chi tiết chính và quét từng phần tử một mà không chuyển sang phần tử sau. 
- Tuy nhiên, `Binary search` chia mảng thành một nửa bằng cách sử dụng tính toán phần tử ở giữa của mảng.

- `Linear search` lặp lại tất cả các phần tử và so sánh chúng với khóa để tìm kiếm.
- `Binary search` làm giảm kích thước của cùng một thành viên được tìm kiếm một cách khôn ngoan và thường xuyên so sánh khóa với đối tượng trung tâm.

### Implementation:
- `Linear search` có thể được thực hiện trên các cấu trúc dữ liệu tuyến tính khác nhau như vector, danh sách liên kết đơn, danh sách liên kết đôi. 
- Ngược lại, tìm kiếm nhị phân cũng có thể được thực hiện trên các cấu trúc dữ liệu đó với khả năng truyền tải hai chiều, tức là truyền tải về phía trước và phía sau của tập hợp.

### Complexity:
- `Linear search` rất dễ sử dụng và chúng ta có thể nói rằng nó ít phức tạp hơn vì các phần tử của `Linear search` có thể được sắp xếp theo bất kỳ thứ tự nào. 
- Nhưng trong `binary search`, các phần tử phải được sắp xếp theo một thứ tự cụ thể có thể thứ tự tăng dần hoặc giảm dần. 

- Độ phức tạp thời gian của tìm kiếm tuyến tính là ***O(N)*** và độ phức tạp thời gian của tìm kiếm nhị phân là ***O(log2N)***.

### Sắp xếp;
- Các phần tử cho một tìm kiếm tuyến tính có thể được sắp xếp theo thứ tự ngẫu nhiên.
- Trong tìm kiếm nhị phân, các phần tử chỉ được sắp xếp theo thứ tự đã sắp xếp. Ngược lại, tìm kiếm tuyến tính không cần một mảng đã được sắp xếp, do đó, phần tử mới có thể dễ dàng chèn vào cuối mảng hoặc có thể chèn vào bất kỳ vị trí nào.

### Cách tiếp cận:
- Tìm kiếm tuyến tính sử dụng phương pháp lặp lại (vòng lặp) để tìm phần tử từ tập hợp. - Mặt khác, tìm kiếm nhị phân tính toán phần tử ở giữa của mảng, vì vậy nó sử dụng cách tiếp cận chia và chinh phục.

### Điều kiện tiên quyết:
- Tìm kiếm tuyến tính có thể được thực hiện trên tất cả các loại dữ liệu, dữ liệu có thể được sắp xếp hoặc lọc thuật toán vẫn giữ nguyên. Vì vậy, không cần phải thực hiện bất kỳ công việc nào trước đó. 
- Tìm kiếm nhị phân chỉ áp dụng cho danh sách. Do đó, sắp xếp các thành viên giống nhau là một yêu cầu của thuật toán này.

### Dataset:
- Tìm kiếm tuyến tính không phù hợp với tập dữ liệu lớn. 
- Tìm kiếm nhị phân phù hợp với một tập dữ liệu lớn vì nó tốn ít thời gian hơn. 

### Tốc độ: 
- Nếu tập dữ liệu lớn trong tìm kiếm tuyến tính, tốc độ sẽ trở nên chậm. 
- Nếu tập dữ liệu lớn hơn trong tìm kiếm nhị phân, chi phí tính toán sẽ thấp hơn so với tìm kiếm theo dòng và tốc độ sẽ nhanh hơn.

## Kích thước:
- Tìm kiếm tuyến tính có thể được sử dụng trên cả mảng đơn và mảng đa chiều.
- Tìm kiếm nhị phân chỉ có thể được thực hiện trên mảng một chiều.

## Độ hiệu quả:
- `Linear search` kém hiệu quả hơn nếu chúng ta có một tập dữ liệu lớn. 
- Tìm kiếm nhị phân hiệu quả hơn khi so sánh với tìm kiếm tuyến tính nếu tập dữ liệu lớn. Nhưng tìm kiếm nhị phân chỉ có thể được thực hiện trên một dữ liệu đã được sắp xếp. Tìm kiếm nhị phân sẽ chỉ mất một nửa thời gian so với tìm kiếm tuần tự.
![](https://miro.medium.com/max/1200/1*4poxx4vMDQfGEq3HeswJoA.gif)

#### _💦Uống nước nhớ source tại: [Linear Search vs Binary Search](https://medium.com/interviewnoodle/linear-search-vs-binary-search-845fd09dbde3)_

