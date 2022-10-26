# Types by Inference 타입 추론

TS는 JS의 언어를 알고 있으며 대부분의 경우 타입을 생성해줌.

```
let hello = "hello world";
```

라면 hello타입을 명시하기 위해 추가로 문자를 사용할 필요가 없는 타입 시스템을 제공.

> JS작업을 개선하기 위해 TS가 사용되는 것이니까!

# Defining Types 타입 지정

TS는 타입이 무엇이 되어야 하는지 명시 가능한 JS언어의 확장을 지원.

```
interface User {
  name: string;
  id: number;
}
// ---cut---
const user: User = {
  name: "Hayes",
  id: 0,
};
```

인터페이스로 선언을 해 놓고 새로운 객체를 생성할 수 있음.

해당 인터페이스에 맞지 않는 객체를 생성하면 TS는 경고를 준다.

## JS에서 사용할 수 있는 원시타입

boolean, bigint, null, number, string, symbol, object와 undefined

any (무엇이든 허용합니다)

unknown (이 타입을 사용하는 사람이 타입이 무엇인지 선언했는가를 확인하십시오)

never (이 타입은 발생될 수 없습니다.)

void (undefined를 리턴하거나 리턴 값이 없는 함수).

# Composing Types 타입구성

## Unions 유니언

유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법.

```
type MyBool = true | false;
```

boolean타입을 true, false로 설정할 수 있음.

유니언 타입이 가장 많이 사용된 사례 중 하나는 값이 다음과 같이 허용되는 string 또는 number의 리터럴집합을 설명하는 것입니다:

type WindowStates = "open" | "closed" | "minimized";

type LockStates = "locked" | "unlocked";

type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

유니언은 다양한 타입 처리방법을 제공함.

```
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
//          ^?
  } else {
    return obj;
  }
}
```

예를 들어, typeof obj === "string"을 이용하여 string과 array를 구분할 수 있으며 TypeScript는 객체가 다른 코드 경로에 있음을 알게 됩니다.

# Generics 제네릭

## 제네릭 : 타입에 변수를 제공하는 방법.

-   배열이 일반적인 예시이며, 제네릭이 없는 배열은 어떤 것이든 포함할 수 있음.
-   제네릭이 있는 배열은 배열 안의 값을 설명할 수 있음.

```
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

```
// @errors: 2345
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// 이 줄은 TypeScript에 `backpack`이라는 상수가 있음을 알리는 지름길이며
// const backpack: Backpack<string>이 어디서 왔는지 걱정할 필요가 없습니다.
declare const backpack: Backpack<string>;

// 위에서 Backpack의 변수 부분으로 선언해서, object는 string입니다.
const object = backpack.get();

// backpack 변수가 string이므로, add 함수에 number를 전달할 수 없습니다.
backpack.add(23);
```

# Structural Type System 구조적 타입 시스템

TS의 핵심 원칙 중 하나는 타입 검사가 값이 있는 형태에 집중 한다는 것.

구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주됨.

```
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// "12, 26"를 출력합니다
const point = { x: 12, y: 26 };
printPoint(point);
```

point변수는 Point타입으로 선언된 적이 없지만, TypeScript는 타입 검사에서 point의 형태와 Point의 형태를 비교합니다. 둘 다 같은 형태이기 때문에, 통과합니다

[출처 : TypeScript DOCS](https://typescript-kr.github.io/pages/tutorials/ts-for-js-programmers.html)
