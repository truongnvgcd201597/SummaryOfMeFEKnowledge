## Bubble Sort
Bubble sort là thuật toán so sánh và có **time complexity** bằng **O(n^2)**. Nó không thực sự hiểu quả cho các danh sách lớn và hường thì trong thực tế, các thuật toán sắp xếp bậc hai sẽ hoạt động tốt hơn các thuật toán nâng cao hơn trên các danh sách rất nhỏ. `Bubble sort` không hiệu quả trên **small input** khi so sánh với `insertion sort`. 

### How is work?
Tưởng tương bạn có một chuỗi `[5, 3, 8, 2]` và nhiệm vụ đó là sắp xếp chúng. \
Ý tưởng đằng sau `bubble sort` đó chính là so sánh hai giá trị liền kề với một giá trị khác. Nếu giá trị bên trái lớn hơn, bạn hoán đổi nó với giá trị bên phải.
![](https://miro.medium.com/max/665/1*BYJjZZAu7vUBpCZOqG8frw.jpeg)\
Và sẽ làm tương tự xuyên suốt cho đến khi kết thúc **dataset** và giá trị maximum sẽ đưa lên đầu. 
![](https://miro.medium.com/max/665/1*_ptUoGl0l43VCZv9dkXqDg.jpeg) \
Và đây là vòng thứ 2 khi thực hiện thuật toán bubble sort.
![](https://miro.medium.com/max/516/1*Qgg6MuEaFQ19CorVME45iA.jpeg) \
Thuật toán vẫn chạy cho đến khi tất cả giá trị đã được sắp xếp. Và đây là một animated version mà tôi đã tạo để giúp minh họa quá trình này.
![](https://miro.medium.com/max/875/1*p_wD00rbc6RkA8w6lqqCkg.gif)

### Code:
Với `pseudo-code` thì nó sẽ như này:
```
for i from 1 to N
   for j from 0 to N -1
     if a[j] > a[j + 1]
        swap( a[j], a[j + 1])
```

Hiểu hơn qua ví dụ về hình ảnh:
![](https://miro.medium.com/max/875/1*yG5c__ST806Eb1tq4Ft31Q.jpeg)

#### Nhìn qua code Javascript:
```
let bubbleSort = (yourArray) => {
   let arrSize = yourArray.length; //this will give you the first N 
   let swapped;
   do {
      swapped = false; 
      for(let i = 0; i < arrSize; i++){ 
          if(yourArray[i] > yourArray[i + 1]){  
            //where the swap happens
            let tmp = yourArray[i]; 
             yourArray[i] = yourArray[i+1];   
             yourArray[i+1] = tmp;   
             swapped = true;
          }  
      }
   } while(swapped); 
   return yourArray;
}
```

### When & Where:
`Bubble sort` làm việc tốt ở vùng dataset rộng, ví dụ: bạn có thể có một danh sách 1000 trẻ em đi học. Mỗi đứa trẻ thuộc một lớp - có nghĩa là theo độ tuổi, chúng đã được phân loại một nửa.

