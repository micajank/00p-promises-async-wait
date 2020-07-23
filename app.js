

const dog = {
    name: "Michael",
    goodBoi: true,
    gender: "girl"
};

const dogTwo = {
    name: "Rocco",
    color: 'brown'
};

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoi);