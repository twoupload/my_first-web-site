const cal = {
    add: function(a,b) {
        return a+b;
    },

    min: function(a,b) {
        return a-b;
    },

    div: function(a,b) {
        return a/b;
    },

    mul: function(a,b) {
        return a*b;
    },

    pow: function(a,b) {
        return a**b;
    },
};

const plusResult = calculator.add(2,3);
const minusResult = calculator.min(plusResult,10);
const timeResult =  calculator.mul(10,minusResult);
const divdeResult = calculator.div(timeResult,plusResult);
const powerResult = calculator.pow(divdeResult,minusResult);