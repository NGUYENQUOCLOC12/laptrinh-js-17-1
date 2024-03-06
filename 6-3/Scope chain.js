function step1() {
    var te = "Local variable"; // Define te before using it
    console.log(te);
}

function step2() {
    var te = 2;
    step1();
}

step2(); // Call step2 once to start the execution
