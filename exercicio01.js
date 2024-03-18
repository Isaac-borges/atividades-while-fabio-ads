import {get_number, print} from '../functions/io_utils.js';

function main(){
    print ("-------------------------------")
    while (true) {
        print('   Descobrir os divisores de um número   ')
        const numero = get_number('Insira um número (insira 0 para encerrar): ')


        if (numero === 0){
            break
        } else {
            capturar_divisores(numero)
    }
    print ("-------------------------------")
}
    
    
}

function capturar_divisores(num){
    let contador = 1
    let divisor = num

    while (divisor > 0) {
        if (num % divisor === 0){
            print(`[${contador}º] divisor de ${num} --> ${divisor}`)
            contador++
        }
        --divisor
    }
}

main()