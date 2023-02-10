let color = 'red';

/* switch (color) {
    case 'red':
        console.log("DANGER: don't cross the road");
        break;
    case 'yellow':
        console.log("You should STOP");
        break;
    case 'green':
        console.log("You should CROSS the road");
        break;
    default:
        console.log('Please give a valid color');
} */

switch (color) {
    case 'red':
        color = "DANGER: don't cross the road";
        break;
    case 'yellow':
        color = "You should STOP";
        break;
    case 'green':
        color = "You should CROSS the road";
        break;
    default:
        color = 'Please give a valid color';
}
console.log(color);