const FizzBuzz = Number(process.argv[2]);
if (FizzBuzz === undefined){
    console.log("Invalid input")
}
    for (let i = 1; i <= FizzBuzz; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
