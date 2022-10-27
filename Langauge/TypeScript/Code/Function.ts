// 두 번째로 반환 타입입니다. 매개변수 타입들과 반환 타입 사이에
//  '화살표 표기'( => )를 써서 반환 타입을 분명히 할 수 있습니다.
//   이전에 언급했듯이, 함수 표기에 필요한 부분입니다, 그래서 만약
//   함수가 값을 반환하지 않는다면 비워두는 대신 void를 써서 표시합니다.
let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};
