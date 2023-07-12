// 객체 타입 호환성
type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

// book 타입은 ProgrammingBook 타입의 슈퍼타입
let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; // ❌ NO
