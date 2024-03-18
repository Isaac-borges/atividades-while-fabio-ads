import { print, get_number } from "../functions/io_utils.js";

function capturar_num_digitos(num){
    let ordem = 10
    let digito = 1

    while (ordem <= Math.abs(num)){
        digito ++
        ordem = ordem * 10

    }

    return digito
}

function main(){
    const numero = get_number('Digite um número: ')

    const digito = capturar_num_digitos(numero)
    const txt_digito =  digito > 1 ? 'dígitos' : 'dígito' 
    print(`${digito} ${txt_digito}!`)
}

main()
