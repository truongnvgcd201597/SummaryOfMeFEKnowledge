# 1. Static Type Checking

Các lợi ích chính của static type checking trong TypeScript bao gồm:

- **Phát hiện lỗi sớm**: TypeScript kiểm tra kiểu dữ liệu trong quá trình biên dịch, giúp phát hiện lỗi kiểu dữ liệu như gán sai kiểu, gọi hàm với tham số không đúng kiểu, v.v. ngay từ lúc viết mã.
- **Tự động hoàn thành mã (IntelliSense)**: Với thông tin kiểu dữ liệu được cung cấp trong mã TypeScript, các trình biên dịch và trình biên tập mã có thể hiển thị gợi ý và tự động hoàn thành mã (IntelliSense) một cách thông minh.
- **Tăng tính dễ đọc và dễ hiểu**: Thông qua kiểm tra kiểu dữ liệu rõ ràng, mã TypeScript trở nên dễ đọc và dễ hiểu hơn.
- **Tích hợp mã dễ dàng**: Static type checking trong TypeScript giúp dễ dàng tích hợp mã giữa các thành viên trong nhóm phát triển.
- **Tiết kiệm thời gian debug**: Với các lỗi kiểu dữ liệu được phát hiện sớm, bạn sẽ tiết kiệm được thời gian debug.

# 2. TypeScript compiler

```ts
npm install -g typescript
```

```ts
# Run a compile based on a backwards look through the fs for a

tsconfig.json
tsc

# Emit JS for just the index.ts with the compiler defaults

tsc index.ts

# Emit JS for any .ts files in the folder src, with the default settings

tsc src/\*.ts

# Emit files referenced in with the compiler settings from

tsconfig.production.json
tsc --project tsconfig.production.json

# Emit d.ts files for a js file with showing compiler options which are

booleans
tsc index.js --declaration --emitDeclarationOnly
```
