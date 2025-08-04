() => {
    interface Person<N, A> {
    type: 'human',
    race: 'yellow',
    name: N,
    age: A
}

interface Zero extends Person<'zero', 28>{}
interface Nero extends Person<'nero', 32>{}

 interface Array<T> {
    [key: number]: T;
    length: number;
    // 기타 속성들
 }

 interface StringArray {
    [key: number]: string;
    length: number;
    // 기타 속성들
 }

 interface BooleanArray {
    [key: number]: boolean;
    length: number;
    // 기타 속성들
    }
}