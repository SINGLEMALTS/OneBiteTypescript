// 열거형
enum Role1 {
    ADMIN, // 0 할당(자동)
    USER, // 1 할당(자동)
    GUEST, // 2 할당(자동)
}

// 시작 위치 할당
enum Role2 {
    ADMIN = 10, // 10 할당
    USER, // 11 할당(자동)
    GUEST, // 12 할당(자동)
}

// 명시
enum Role3 {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// 사용
const user1 = {
    name: "이정환",
    role: Role3.ADMIN, //관리자
};

// 문자열 열거형
enum Role {
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user2 = {
    name: "이정환",
    role: Role.ADMIN, // 0
    language: Language.korean, // "ko"
};
