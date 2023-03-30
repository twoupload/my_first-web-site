function plus(a,b) {
    console.log(a+b);
}

function divied(a,b) {
    console.log(a/b);
}

plus(5,5);
divied(10,4);

const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("lynn");
player.sayHello("nico");