import { get_number, print } from "../functions/io_utils.js";

function get_lista(num){
    let lista
    let contador = 0
    while (num !== lista){
        lista = get_number(`Insira o ${contador+1}º número da lista: `)
        
        contador ++

    }

    print(`O ${contador}º numero da lista é igual ao primeiro número lido!`)
}

function main(){
    const numero = get_number('Insira um número: ')

    get_lista(numero)
}

main()