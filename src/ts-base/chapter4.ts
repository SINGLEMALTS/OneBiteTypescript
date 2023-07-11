// 타입 별칭
// 타입 이름으로는 User 그리고 타입으로는 여러개의 프로퍼티가 있는 객체 타입을 정의했습니다.
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};

// 인덱스 시그니처
// 프로퍼티가 많은 경우 예시
type CountryCodes = {
    Korea: string;
    UnitedState: string;
    UnitedKingdom: string;
    // (... 약 100개의 국가)
    Brazil: string;
};

// 인덱스 시그니처
type IndexCountryCodes = {
    // 키가 string이고, 값이 string인 모든 프로퍼티 포함
    [key: string]: string;
};

let countryCodes: IndexCountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    // (... 약 100개의 국가)
    Brazil: "bz",
};

// 반드시 포함해야하는 프로퍼티가 있는 경우에는 명시
// 시그니처를 사용하는 경우는 추가로 명시하는 프로퍼티와 value의 타입이 호환되어야함
type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};
