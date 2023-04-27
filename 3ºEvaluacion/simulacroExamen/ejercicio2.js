var combination = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function equals(num1) {
    for (var i = 0; i < combination.length; i++) {
        if (num1 == combination[i]){
        return true;
        }
    
    }
    return false;
}

for (var i = 0; i < 6; i++) {
    newNum = 0
    valid = false
    do {
        valid = true
        newNum = random(1, 49)
        if (equals(newNum)) {
            valid = false;
        }
    } while (!valid);
    combination.push(newNum);
}
combination.push(random(0, 9));


dialog = "Esta es la combinación que te va a hacer rico: \n";
for (var i = 0; i < combination.length; i++) {
    if (i < combination.length - 1) {
        dialog += combination[i] + ", ";
    } else {
        dialog += " y reintegro " + combination[i];
    }
}
alert(dialog);

