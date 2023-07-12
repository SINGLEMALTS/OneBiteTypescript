// 타입 좁히기
// 조건문 내부에서 변수가 특정 타입임을 보장하면 해당 조건문 내부에서 변수의 타입이 보장된 타입으로 좁혀짐
// 좁히는 표현 => 타입 가드
function func(value: number | string) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

// instanceof 타입가드
function func1(value: number | string | Date | null) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    }
}

// in 타입가드
type Person = {
    name: string;
    age: number;
};

// Person 타입 추론
function func2(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}
