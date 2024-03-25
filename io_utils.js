import { question } from 'readline-sync';


export function print(message){
    return console.log(message)
}

export function get_number(message){
    return Number(question(message))
}

export function get_positive_number(message){
    const numero = get_number(message)

    if (numero <= 0){
        print('Valor inválido!')
        return get_positive_number(message)
    }

    return numero
}

export function padStart(texto, tamanho_alvo, fill){
    let novo_texto = texto
    let tamanho = novo_texto.lenght 

    while(tamanho < tamanho_alvo){
        texto = fill + novo_texto
        tamanho = novo_texto.lenght
    }

    return novo_texto
}