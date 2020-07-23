

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


// Constructor Function
function User(name) {
    // this is set equal to User
    this.name = name;

    // returns this
}

let mac = new User('Mac');
let phil = new User('Phil');
console.log(mac);
console.log(phil);

function NBoobAPlayer(name, boobean, threeNipShooter) {
    this.name = name;
    this.boobean = boobean;
    this.threeNipShooter = threeNipShooter;
}

let cookies = new NBoobAPlayer('Mac', true, "Phil's mouth");
console.log(cookies);
console.log(cookies.threeNipShooter);