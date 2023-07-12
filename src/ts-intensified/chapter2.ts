// unknown 타입 할당
let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

// unknown의 할당
let unknownValue: unknown;
// let a: number = unknownValue; // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

// never 사용
function errorFunc(): never {
    throw new Error();
}

// never의 할당
// let a: never = 1;                 // number -> never ❌
// let b: never = "hello";           // string -> never ❌
// let c: never = true;              // boolean -> never ❌
// let d: never = null;              // null -> never ❌
// let e: never = undefined;         // undefined -> never ❌
// let f: never = [];                // Array -> never ❌
// let g: never = {};                // Object -> never ❌

// void 사용
let voidVar: void;

voidVar = undefined; // undefined -> void (ok)

let neverVar: never;
// voidVar = neverVar; // never -> void (ok)

// any 사용
let anyValue: any;

let num: number = anyValue; // any -> number (다운 캐스트)
let str: string = anyValue; // any -> string (다운 캐스트)
let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

anyValue = num; // number -> any (업 캐스트)
anyValue = str; // string -> any (업 캐스트)
anyValue = bool; // boolean -> any (업 캐스트)
