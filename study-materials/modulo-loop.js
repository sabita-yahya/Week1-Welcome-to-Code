for (let i = 1; i <= 100; i++) {
    if (i % 28 === 0) {
        console.log("FOURSEVEN");
    } else if (i % 4 === 0) {
        console.log("FOUR");
    } else if (i % 7 === 0) {
        console.log("SEVEN");
    } else {
        console.log(i);
    }
}``