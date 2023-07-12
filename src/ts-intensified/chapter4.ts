// 대수 타입
// 합집합 타입 - Union 타입
let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입의 Union 타입
type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

// 사용
let union1: Union1 = {
    // ✅
    name: "",
    color: "",
};

let union2: Union1 = {
    // ✅
    name: "",
    language: "",
};

let union3: Union1 = {
    // ✅
    name: "",
    color: "",
    language: "",
};

// let union4: Union1 = { // ❌
//     name: "",
// };

// Intersection 타입
// never 타입으로 추론된다
let variable: number & string;

// 객체 타입의 Intersection 타입
type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
};
