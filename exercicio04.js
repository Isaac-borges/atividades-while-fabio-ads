import { get_positive_number, print } from "../functions/io_utils.js";

function divisoes_sucessivas(num){
    let divisao = num 
    let contador = 0

    print(`[Antes da divisão] ${num}`)
    while (divisao > 1){
        divisao = divisao / 2
        print(`--------------[${contador+1}ª] ${divisao}`)
        contador ++
    }


}

function main(){
    const numero1 = get_positive_number('Insira um número para fazer divisões sucessivas: ')

    divisoes_sucessivas(numero1)
}

main()