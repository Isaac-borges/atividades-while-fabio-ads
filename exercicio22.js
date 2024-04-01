import { get_positive_number, print } from "../functions/io_utils.js";

function calcular_quociente (dividendo, divisor){
    let quociente 
    let contador = 0
    
    while ( dividendo >= divisor){
        dividendo = dividendo - divisor
        
        contador++
    }

    quociente = contador
    return quociente
}

function calcular_resto (dividendo, divisor){
    let divisaodividendo = dividendo
    
    let contador = calcular_quociente(dividendo, divisor)

    let resto = divisaodividendo - (divisor * contador)

    return resto
}


function main(){
    const dividendo = get_positive_number('Insira um número: ')
    const divisor = get_positive_number('Insira o Divisor: ')

    const quociente = calcular_quociente(dividendo, divisor)
    const resto = calcular_resto(dividendo, divisor)

    const mensagembonita = `
-------------------------------------------------------------
    Dividendo : ${dividendo}
    Divisor   : ${divisor}
    Quociente : ${quociente}
    Resto     : ${resto}
-------------------------------------------------------------
    `

    print(mensagembonita)
}

main ()