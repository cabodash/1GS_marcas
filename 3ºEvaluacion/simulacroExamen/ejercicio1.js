var spents = [];
var opt = 1
var valid = false


function mainAlert() {
    var opt = parseFloat(prompt(
        "Selecciona una opción: \n" +
        "  1. Añadir un gasto. \n" +
        "  2. Mostrar los gastos. \n" +
        "  3. Eliminar un gasto. \n" +
        "  4. Modificar un gasto. \n" +
        "  5. Salir. \n"));
    return opt;
}

function addSpent() {
    var spent = parseFloat(prompt("Introduce el gasto"));
    return spent;
}

function seeSpents() {
    var dialog = "";
    for (var i = 0; i < spents.length; i++) {
        dialog += "ID Movimiento: " + (i + 1) + " Gasto: " + spents[i] + " €\n";
    }
    alert(dialog);
}

function changeSpent(type) {
    var dialog = "";
    for (var i = 0; i < spents.length; i++) {
        dialog += "ID Movimiento: " + (i + 1) + " Gasto: " + spents[i] + " €\n";
    }
    var spent = parseFloat(prompt(
        dialog + "\n" +
        "Introduce el id del gasto a " + type));
    return spent;
}

while (opt != 5) {
    valid = false;
    do {
        opt = mainAlert();
        if (opt >= 1 && opt <= 5) {
            valid = true;
        } else {
            alert("Debes elegir una opcion valida (1-5)");
        }
    } while (!valid);

    switch (opt) {
        case 1:
            spents.push(addSpent());
            break;

        case 2:
            seeSpents();
            break;

        case 3:
            validateID = false
            id = 0
            do {
                id = changeSpent("eliminar") - 1;
                if (id >= 0 && id <= spents.length - 1) {
                    validateID = true;
                } else {
                    alert("Debes elegir una opcion valida (1-" + spents.length + ")");
                }
            } while (!validateID);
            spents.splice(id, 1);
            break;

        case 4:
            validateID = false
            id = 0
            do {
                id = changeSpent("modificar") - 1;
                if (id >= 0 && id <= spents.length - 1) {
                    validateID = true;
                } else {
                    alert("Debes elegir una opcion valida (1-" + spents.length  + ")");
                }
            } while (!validateID);
            var newSpent = parseFloat(prompt("Introduce la nueva cantidad:"));
            spents[id]=newSpent;
            break;

        case 5:
            alert("Fin del programa.");
            break;

    }

}
