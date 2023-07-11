// void
// function func2(): undefined {
//     // 오류 발생!
//     console.log("hello");
// }

// 반환값 타입을 undefined 하는 경우, undefined을 반환해야함
function func3(): undefined {
    console.log("hello");
    return undefined;
}

// 반환값 타입을 null 하는 경우, null을 반환해야함
function func4(): null {
    console.log("hello");
    return null;
}

// return문 자체가 없는 함수의 반환값 타입은 void로 정의해야함
function func5(): void {
    console.log("hello");
}

// never
// 함수가 어떤 값도 반환할 수 없는 상황일 때, 반환값을 타입을 정의할 때 사용
function func6(): never {
    while (true) {}
}

function func7(): never {
    throw new Error();
}

// 변수의 타입을 never로 정의하면 any를 포함해 어떤 타입의 값도 변수에 담을 수 없음
let anyVar: any;

let a: never;
// a = 1; // 예외 발생
// a = null; // 예외 발생
// a = undefined; // 예외 발생
// a = anyVar; // 예외 발생
