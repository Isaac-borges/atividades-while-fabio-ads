import { get_number_min, print } from "../functions/io_utils.js";

function calcular_aumento(salario){
    let aumento = 0

    if (salario < 3000){
        aumento = salario*1.25
    } else if (salario < 6000){
        aumento = salario*1.20
    } else if (salario < 10000){
        aumento = salario*1.15
    } else {
        aumento = salario*1.10
    }

    return aumento
}

function get_modulo(numero){
    let modulo 

    if (numero > 0){
        modulo = numero
    } else if (numero < 0){
        modulo = numero * -1
    } else {
        modulo = 0
    }

    return modulo
}

function main() {
    print('Calcular aumento de salário')
    let salario1
    let salario2
    let aumento1, aumento2
    let somasalarioatual1, somasalarioatual2
    let somaaumento1, somaaumento2
    let diferenca, diferencamodulo

    salario1 = get_number_min('Diga seu salário: ',)
    aumento1 = calcular_aumento(salario1)
    print(`Aumento = ${aumento1}`)

    salario2 = salario1
    aumento2 = aumento1

    salario1 = get_number_min('Diga seu salário: ',)
    aumento1 = calcular_aumento(salario1)
    print(`Aumento = ${aumento1}`)
    somasalarioatual1 = salario1 + salario2
    print(`Soma dos salários = ${somasalarioatual1}`)
    somaaumento1 = aumento1 + aumento2
    print(`Soma dos aumentos = ${somaaumento1}`)
    
    salario2 = salario1
    aumento2 = aumento1
    somaaumento2 = somaaumento1
    somasalarioatual2 = somasalarioatual1

    while (salario1 !== 0){
        salario1 = get_number_min('Diga seu salário: ',)
        aumento1 = calcular_aumento(salario1)
        print(`Aumento = ${aumento1}`)
        somasalarioatual1 = salario1 + salario2
        print(`Soma dos salários = ${somasalarioatual1}`)
        somaaumento1 = aumento1 + aumento2
        print(`Soma dos aumentos = ${somaaumento1}`)

        diferenca = somaaumento1-somaaumento2
        diferencamodulo = get_modulo(diferenca)
        print(`Diferença da soma dos aumentos: ${diferencamodulo}`)

        salario2 = salario1
        aumento2 = aumento1
        somaaumento2 = somaaumento1
        somasalarioatual2 = somasalarioatual1
    } 
}

main()
