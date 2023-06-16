## What is a Linked List
### Singly Liked List:
![](https://miro.medium.com/max/875/1*LCvUw4JaCiovZWeXb5zrMw.jpeg)

> Linked list là một cấu trúc tuyến tính - linear structure, giống như array. Tuy nhiên, thay vì các mục được đặt tại các chỉ mục, chúng được kết nối với nhau thông qua một chuỗi các tham chiếu, mỗi mục chứa một tham chiếu đến mục tiếp theo.

```
Array:          0: 12    1: 99    2: 37
Linked List:    head → 12 → 99 → 37 → ∅
```
![](https://miro.medium.com/max/875/1*0BFwdktN99jJegMyT1uBBw.png)
Cái này được gọi là liên kết đơn vì mỗi chỉ mục chỉ có liên kết một chiều đến mục tiếp theo của nó. Mỗi mắt xích trong chuỗi được gọi là **node**, mỗi **node** chỉ là một JS Object. 
```
const list = {
    head: {
        value: 12
        next: {
            value: 99
            next: {
                value: 37
                next: null
            }
        }
    }
};
```
Một danh sách liên kết chỉ là những đối tượng lồng nhau - nested object. Thuộc tính tiếp theo của mỗi **node** trong danh sách là một tham chiếu đến **node** tiếp theo. 

Phần head là một node đầu trong chuỗi, Nói cách khác, head trên đối tượng ngoài cùng của danh sách được liên kết trỏ đến mục đầu tiên trong danh sách. Mỗi mục trong danh sách được truy cập thông qua thuộc tính tiếp theo của mục trước nó.

Truy cập giá trị `37` trong array.
```
arr[2]; // -> 37

```
Còn linked list có các mục chỉ có thể truy cập thông quá previous item.