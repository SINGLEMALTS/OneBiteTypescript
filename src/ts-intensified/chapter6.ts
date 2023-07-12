// 타입 단언
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23;

// 다중 단언
let num3 = 10 as unknown as string;

// const 단언
// 10 Number Literal 타입으로 단언됨
let num4 = 10 as const;

// 모든 프로퍼티가 readonly를 갖도록 단언됨
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// Non null 단언
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
};

const len: number = post.author!.length;
