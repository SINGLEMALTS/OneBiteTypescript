// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];
let boolArr: Array<boolean> = [true, false, true]; // 제네릭

// 다양한 타입 요소
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플은 배열처럼 다루기 가능하므로 주의
tup2.push(1);
