const input = Number.process.argv[2];
if (input === undefined || input === ""){
    console.log("Invalid input")
}
if (input >= 80){
    console.log("Grade is A")
}
if (input >= 70){
        console.log("Grade is B")
    }
if (input >= 60){
        console.log("Grade is C")
    }
if (input >= 50){
        console.log("Grade is D")
    }
    else {
        console.log("Grade is F")
    }
