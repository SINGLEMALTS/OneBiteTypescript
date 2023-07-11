// any
let anyVar: any = 10;
anyVar = "hello";

// 할당해도 컴파일 오류발생하지 않음
// 런타임 시에 오류 발생 -> 사용 자제
let num: number = 10;
num = anyVar;

// unknown
// 어떤 값이든 할당 가능
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 어떤 타입의 변수에도 저장할 수 없음
let num1: number = 10;
let unknownVar1: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num1 = unknownVar1; // 오류 !
