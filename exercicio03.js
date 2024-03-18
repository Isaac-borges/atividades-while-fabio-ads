import { print, get_number } from "../functions/io_utils.js";

function calcular_mdc(num1, num2){
    let a, b
    a = num1
    b = num2

    while (b !== 0){
        let resto = a % b
        a = b 
        b = resto
    }

    return a
}

function main(){
    print('   Calcular MDC   ')
    const numero1 = get_number('Insira o primeiro número: ')
    const numero2 = get_number('Insira o segundo número : ')

    const mdc = calcular_mdc(numero1, numero2)

    print(`O MDC é ${mdc}`)
}

main()