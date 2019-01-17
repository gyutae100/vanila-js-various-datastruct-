var numbers = [];

for(var i = 0 ; i < 14 ; i++){

    numbers.push(i);
}

console.log( numbers.length);

for(var i = numbers.length ; i >= 0 ; i--){

    numbers[i] = numbers[i-1];
}

for(var i = 0 ; i < numbers.length ; i++){

    console.log( numbers[i]);
}
