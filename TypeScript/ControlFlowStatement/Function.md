# TypeScript function

## 1. Default function return types:

```ts
function sayHello() {
  console.log("Hi Easy Frontend");
}
// ts: function sayHello(): void

function sum(a: number, b: number) {
  return a + b;
}
// ts: function sum(a: number, b: number): number
```

## 2. Explicit return type:

```ts
function sum(a: number, b: number): number {
  return a + b;
}
// ts: function sum(a: number, b: number): number
```

```ts
function sum(a: number, b: number): number {
  return a + b.toString();
}
// ts error: Type 'string' is not assignable to type 'number'
```

## 3. Optional parameters:

- Sử dụng dấu `?` để đánh dấu tham số là optional parameter.
- Params không thể có `question mark` và initializer cùng lúc.

```ts
// optional parameter
// this is how ts understand
// function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// default parameter
// this is how ts understand
// function getLength(numberList?: number[]): number
function getLength(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// ts error: Parameter cannot have question mark and initializer.ts(1015)
function getLength(numberList?: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
```

## 4. Void and Never:

```ts
// function noop(): void
function noop() {
  return;
}
// function noop(): void
function noop() {}
```

```ts
type NewType = number & string; // never
```

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

```ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

## 5. Destructuring parameters:

```ts
function createStudent(id: number, name: string, age: number) {
  console.log(id, name, age);
}
createStudent(1, "Bob", 18);
```

```ts
function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: "Bob",
  age: 18,
});
```

```ts
function createStudent({
  id,
  name,
  age,
}: {
  id: number;
  name: string;
  age: number;
}) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: "Bob",
  age: 18,
});
```

```ts
interface Student {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: "Bob",
  age: 18,
} as Student);
```
