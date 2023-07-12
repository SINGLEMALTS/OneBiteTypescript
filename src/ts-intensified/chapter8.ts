// 서로소 유니온 타입
type Admin = {
    name: string;
    kickCount: number;
};

type Member = {
    name: string;
    point: number;
};

type Guest = {
    name: string;
    visitCount: number;
};

// 합집합 타입
type User = Admin | Member | Guest;

function login(user: User) {
    if ("kickCount" in user) {
        // Admin
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if ("point" in user) {
        // Member
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
        // Guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
}

// 직관적이도록 태그 프로퍼티 추가 정의
type Admin1 = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member1 = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest1 = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User1 = Admin1 | Member1 | Guest1;

// 태그를 사용해 타입가드 조건문 수정
function login1(user: User1) {
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
    }
}
