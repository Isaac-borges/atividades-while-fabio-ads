import { get_number, get_positive_number, print } from "../functions/io_utils.js";

function calcular_progarit(ra, ntermos, primeirotermo){
    print(`A P.A terá ${ntermos} termos, e sua razão, ${ra}`)
    let contador = 0 
    while (ntermos > 0){
        print(`[${contador+1}º] ${primeirotermo+ra}`)
        primeirotermo += ra
        contador++
        ntermos--
    }
    


}

function main(){
    const razaopa = get_number           ('Qual a razão da P.A?       : ')
    const numtermos = get_positive_number('Quantos termos terá a P.A? : ')
    const primeirotermo = get_number     ('Qual o primeiro termo?     : ')

    calcular_progarit(razaopa, numtermos, primeirotermo)
}

main()