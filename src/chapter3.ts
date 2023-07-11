// 객체 리터럴 타입 : 프로퍼티를 기준으로 객체의 구조를 따라 정의
let user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

user.id;

// Optional Property
let user1: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

user1 = {
    name: "홍길동",
};

// Readonly Property
let user2: {
    id?: number;
    readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
    id: 1,
    name: "이정환",
};

// user2.name = "dskfd"; // 오류 발생
