for(var i = 1; i <= 20; i++){
    console.log(i);
    if (i > 5){
        break;
    }
}

var items = ['bottle', 'mouse', 'pen', 'sunglass', 'notebook']
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
    if (item == 'pen'){
        break;
    }
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41];
for(var i = 0; i< numbers.length; i++){
    var number = numbers[i];
    if (number > 100){
        break;
    }
    console.log(number);
}