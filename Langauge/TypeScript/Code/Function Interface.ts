interface Add {
    (number1: number, number2: number): number;
}

let calc: Add;
calc = (number1: number, number2: number) => {
    return number1 + number2;
};

console.log(calc(10, 10));
