import { get_positive_number, print } from "../functions/io_utils.js";

function XporN (X, N){
    let Xnovo = X

    print(`O valor de X é ${X} e N é ${N}`)
    while (N > 2){
        let divisao = (Xnovo/N)
        Xnovo = divisao
        N --
        print(`X por N = ${Xnovo}; O valor de N agora é ${N}`)

    }
}

function main(){
    const X = get_positive_number('Insira o valor de X: ')
    const N = get_positive_number('Insira o valor de N: ')
    print('--------------------------------')
    XporN(X, N)
    print('--------------------------------')
}

main()