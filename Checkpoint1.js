//"Menu de microndas"


function microondas (prato, temp) {

    let tempoPadrao;

    if (prato == "macarrao") {
        tempoPadrao=8;
    }

    else if (prato == "carne") {
        tempoPadrao=15;
    }

    else if (prato == "feijao") {
        tempoPadrao=12;
    }

    else if (prato == "pipoca") {
        tempoPadrao=10;
    }


    else if (prato == "brigadeiro") {
        tempoPadrao=8;
    }

    else {
        return "Esse Prato não existe";
    }
    
    if (temp < tempoPadrao) {
        return "Tempo Insuficiente, tente novamente";
    }

    else if (temp == tempoPadrao) {
        return "Acabou!";
    }

    else if (temp > (2* tempoPadrao) && temp<= (3* tempoPadrao)) {
    return "Queimou!";
    }

    else if (temp > 3* tempoPadrao) {
        return "Kabummmmmmmmmmmmm"
    }
}

console.log (microondas ("macarrao", 10) + "Prato Pronto!")