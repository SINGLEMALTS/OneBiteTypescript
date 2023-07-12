// 타입 추론
// number 타입으로 추론
let a = 10;

// string 타입으로 추론
let b = "hello";

// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"],
};

// 구조 분해 할당
// 객체
let { id, name, profile } = c;

// 배열
let [one, two, three] = [1, "hello", true];

// 함수의 반환값
// 반환값이 string 타입으로 추론
function func() {
    return "hello";
}

// 기본값이 있는 매개변수
// 기본값에 따라 string 타입으로 추론
function func1(message = "hello") {
    return "hello";
}

// const 상수의 추론 시 초기화 때 설정한 값을 변경할 수 없으므로 가장 좁은 타입으로 추론됨
// 10 Number Literal 타입으로 추론
const num = 10;

// "hello" String Literal 타입으로 추론
const str = "hello";
