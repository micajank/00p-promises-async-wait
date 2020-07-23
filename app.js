const fetch = require("node-fetch");


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

// console.log(dog);
// console.log(dogTwo);

// console.log(dogTwo.goodBoi);


// Constructor Function
function User(name) {
    // this is set equal to User
    this.name = name;

    // constructor functions return this automatically
}

let mac = new User('Mac');
let phil = new User('Phil');
// console.log(mac);
// console.log(phil);

function NBoobAPlayer(name, boobean, threeNipShooter) {
    this.name = name;
    this.boobean = boobean;
    this.threeNipShooter = threeNipShooter;
    this.intro = function() {
        console.log(`Welcoming ${this.name}!`);
    }
}

let cookies = new NBoobAPlayer('Mac', true, "Phil's mouth");
let donuts = new NBoobAPlayer('Phil', false, "Mac's mouth");
// console.log(cookies);
// console.log(cookies.threeNipShooter);
// cookies.intro();
// donuts.intro();

class Camp {
    constructor(name, type, housing, fun, degree) {
        this.name = name;
        this.type = type;
        this.houseing = housing;
        this.fun = fun;
        this.degree = degree;
    }

    councelors(){
        console.log("Soliiidddd 🤙")
    }
}

let lakeann = new Camp('Lake Ann', 'Jesus', 'Cabins', false, 'aweful');
let hope = new Camp('Hope Soccer Camp', 'Athletic', 'Dorms', true, 'yup');
let heawenta = new Camp('Camp Heawenta', 'Girlscout/Adventure', 'Paletted Tents', true, 'ish');
// console.log(lakeann);
// console.log(hope);
// console.log(heawenta);
// lakeann.councelors();


class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }

    intro() {
        console.log(`Hello ${this.name}, welcome to github. What shall I help you with today ${this.username}?`)
    }
}
// https://api/github.com/users/micajank
fetch('https://api.github.com/users/micajank')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
    let githubURL = data.url;
    // console.log(githubURL)
    let githubUserName = data.login;
    // console.log(githubUserName)
    let githubName = data.name;
    // console.log(githubName)

    let mac = new GithubProfile(githubUserName, githubName, githubURL);
    console.log(mac);

    mac.intro();
})


// Promises
var isMomHappy = true;

// Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );
// console.log(willGetNewPhone)


let willIGetNewOhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            breand: 'iPhone',
            color: 'pink'
        }
        resolve(phone);
    }
    else {
        reject('No phone for you little boiiiii');
    }
})


willIGetNewPhone.then(result => {
    console.log(result);
}) 