import { get_positive_number, print} from '../functions/io_utils.js';

function get_cdu(numero, classe){
    if (classe === 'C'){
        return Math.floor(numero / 100)
    } else if (classe === 'D'){
        return Math.floor((numero % 100) / 10)
    } else if (classe === 'U'){
        return Math.floor((numero % 100) % 10)
    }
}

function to_romano(numero){
    if (numero < 10){
        return to_romano_unidade(numero)
    } else if (numero < 100) {
        return to_romano_dezena(numero)
    } else if (numero < 1000){
        return to_romano_centena(numero)
    }
}

function to_romano_unidade(numero){
    if (numero === 0){
        return ''
    } else if (numero === 1){
        return 'I'
    } else if (numero === 2){
        return 'II'
    } else if (numero === 3){
        return 'III'
    } else if (numero === 4){
        return 'IV'
    } else if (numero === 5){
        return 'V'
    } else if (numero === 6){
        return 'VI'
    } else if (numero === 7){
        return 'VII'
    } else if (numero === 8){
        return 'VIII'
    } else if (numero === 9){
        return 'IX'
    } 
}

function to_romano_dezena(numero){
    if (numero === 10){
        return 'X'
    } else if (numero === 20){
        return 'XX'
    } else if (numero === 30){
        return 'XXX'
    } else if (numero === 40){
        return 'XL'
    } else if (numero === 50){
        return 'L'
    } else if (numero === 60){
        return 'LX'
    } else if (numero === 70){
        return 'LXX'
    } else if (numero === 80){
        return 'LXXX'
    } else if (numero === 90){
        return 'LC'
    } 
}

function to_romano_centena(numero){
    if (numero === 100){
        return 'C'
    } else if (numero === 200){
        return 'CC'
    } else if (numero === 300){
        return 'CCC'
    } else if (numero === 400){
        return 'CD'
    } else if (numero === 500){
        return 'D'
    } else if (numero === 600){
        return 'DC'
    } else if (numero === 700){
        return 'DCC'
    } else if (numero === 800){
        return 'DCCC'
    } else if (numero === 900){
        return 'CM'
    } 
}


function main(){
    const numero = get_positive_number('Insira um número: ') //number_in_range

    const unidade = get_cdu(numero, 'U')
    const dezena = get_cdu(numero, 'D')
    const centena = get_cdu(numero, 'C')

    const romano_unidade = to_romano(unidade)
    const romano_dezena = to_romano(dezena * 10)
    const romano_centena = to_romano(centena * 100)

    const stringr = `${romano_centena}${romano_dezena}${romano_unidade}`

    print (stringr)
}

main()