console.log("Random Name Generator started here");

let adj = {
    "1" : "Crazy",
    "2" : "Amazing",
    "3" : "Fire",
}

let shop = {
    "1" : "Engine",
    "2" : "Foods",
    "3" : "Garments",
}

let word = {
    "1" : "Bros",
    "2" : "Limited",
    "3" : "Hub",
}

let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();

var one,two,three;

if(rand1<=0.33333) one = adj[1];
else if (rand1<=0.66666) one = adj[2];
else one =adj[3];

if(rand2<=0.33333) two = shop[1];
else if (rand2<=0.66666) two = shop[2];
else two =shop[3];

if(rand3<=0.33333) three = word[1];
else if (rand3<=0.66666) three = word[2];
else three =word[3];

alert(one + two + three);