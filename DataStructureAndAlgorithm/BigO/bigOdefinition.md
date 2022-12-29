## Big 0 là gì?
Ký hiệu Big O mô tả độ phức tạp (complexity) của mã của bạn bằng cách sử dụng các thuật ngữ đại số.
### Ví dụ:
O(n²) sẽ là thuật toán `Selection Sort`. Nó là một thuật toán sắp xếp lặp qua danh sách để đảm bảo mọi phần tử tại index i là phần tử nhỏ nhất hoặc lớn nhất thứ i của danh sách.
```
SelectionSort(List) {
  for(i from 0 to List.Length) {
    SmallestElement = List[i]
    for(j from i to List.Length) {
      if(SmallestElement > List[j]) {
        SmallestElement = List[j]
      }
    }
    Swap(List[i], SmallestElement)
  }
}
```
Trong trường hợp này, chúng ta coi biến **List** là đầu vào, do đó kích thước đầu vào n là **number of elements inside List**. Giả sử câu lệnh **if** và phép gán giá trị được giới hạn bởi câu lệnh **if**. Nên chúng ta có thể tìm ký hiệu big O cho hàm SelectionSort bằng cách phân tich số lần các câu lệnh được thực thi.
![](https://www.freecodecamp.org/news/content/images/2021/06/1_1ajbPJXjt3z7CofVODlaCw.png)

| X  | Name | Desc   |      
| -- |:-------------:|--------|
| 1  | O(1)     |  fixed number of times no matter how big the input is |
| 2  | O(log(n) |  reduce half on every step    |
| 3  | O(n)     |  one loop     |
| 4  | O(n^2)   |  two nested loop    |
| 5  | O(n^3)   |  three nested loop     |