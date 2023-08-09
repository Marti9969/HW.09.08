function NumberAfterTen(numbers) {
    for (let num of numbers) {
        if (num > 10) {
            console.log(num);
        };
    }
}
let numbers = [2, 13, 20, 3, 6, 11];
NumberAfterTen(numbers)