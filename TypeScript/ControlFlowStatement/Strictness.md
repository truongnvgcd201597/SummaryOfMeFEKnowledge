# Stricness

## 1. Strictness trong TypeScript:

> Strictness trong TypeScript là một tập hợp các tùy chọn cấu hình để kiểm soát mức độ nghiêm ngặt trong việc kiểm tra kiểu dữ liệu và tuân thủ các quy tắc lập trình trong mã TypeScript.

## 2. Strict flag:

- Nếu `strict=true` sẽ bật tất cả các tùy chọn strictness.
- Default option của strict là false, nhưng recommended là true.
- Config của từng option sẽ có độ ưu tiên cao hơn so với `strict flag`. Tức là `strict=true`, mà `noImplicitAny=false` thì thì giá trị cuối cùng vẫn là `noImplicitAny=false`.

### 2.1 noImplicitAny:

**noImplitcitAny** dùng để kiểm soát việc sử dụng kiểu dữ liệu "any" một cách rõ ràng trong mã TypeScript. Khi tùy chọn này được bật (đặt giá trị là true), TypeScript sẽ yêu cầu bạn phải khai báo kiểu dữ liệu cho tất cả các biến, tham số và giá trị trả về của hàm, ngay cả khi bạn không cung cấp kiểu dữ liệu.

```ts
// tsconfig.json
{
"compilerOptions": {
// ...
"noImplicitAny": true,
}
}
```

````ts
function isEmpty(numberList) {
  return numberList.length === 0;
}
console.log(isEmpty(123));
// js: false
// ts: error Parameter 'numberList' implicitly has an 'any' type.```
````

### 2.2. strictNullChecks:

**strictNullChecks** là một trong các tùy chọn strictness, dùng để kiểm soát việc sử dụng giá trị `null` hoặc `undefined` trong mã TypeScript. Khi tùy chọn này được bật (đặt giá trị là true), TypeScript sẽ áp dụng các quy tắc nghiêm ngặt để đảm bảo rằng các biến và thuộc tính không thể có giá trị null hoặc undefined, trừ khi được khai báo một cách rõ ràng là cho phép.

Khi "strictNullChecks" được bật:

- Kiểu dữ liệu null và undefined không tự động gán: TypeScript sẽ không cho phép gán giá trị `null` hoặc `undefined` cho bất kỳ biến nào nếu bạn không khai báo rõ ràng rằng biến đó có thể chứa giá trị `null` hoặc `undefined`.
- Kiểm tra với kiểu union: Để cho phép một biến có thể chứa giá trị `null` hoặc `undefined`, bạn phải xác định kiểu union với kiểu dữ liệu đó và kiểu `null` hoặc `undefined`. Ví dụ: string | null | undefined.
- Phải kiểm tra giá trị trước khi sử dụng: Nếu bạn có một biến có kiểu `union`, bạn phải kiểm tra giá trị của biến trước khi sử dụng để đảm bảo nó không phải là `null` hoặc `undefined`.

```ts
// tsconfig.json
{
"compilerOptions": {
// ...
"strictNullChecks": true,
}
}
```

````ts
let str;
if (Math.random() > 0.5) {
  str = "";
}
str.toString();
// js: runtime error "Cannot read property 'toString' of undefined"
// ts: type error "Object is possibly 'undefined'"
```
````
