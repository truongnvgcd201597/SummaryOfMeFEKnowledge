# typeof trong TypeScript

## 1. typeof là gì?

> Trong TypeScript, **typeof** được sử dụng để **có được kiểu dữ liệu của một biến hoặc một biểu thức tại thời điểm compile**. Nó cho phép bạn truy xuất kiểu dữ liệu của một biến hoặc một giá trị và sử dụng kiểu đó trong các phần khác của mã TypeScript.

## 2. Cú pháp:

```ts
const variable = 42;
type TypeOfVariable = typeof variable; // TypeOfVariable sẽ có kiểu dữ liệu là "number"
```

typeof cũng có thể được sử dụng với tên biến, hàm hoặc bất kỳ biểu thức nào khác mà bạn muốn truy xuất kiểu dữ liệu tương ứng. Ví dụ:

```ts
function add(a: number, b: number): number {
  return a + b;
}

type AddFunction = typeof add; // AddFunction sẽ có kiểu dữ liệu là (a: number, b: number) => number
```
