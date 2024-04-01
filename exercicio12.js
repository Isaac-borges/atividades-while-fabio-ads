import {get_number, print, get_entry} from '../functions/io_utils.js'

function contabilizar_ponto(jogador){
    print(`Ponto do ${jogador} !`)
}


function main(){
    const jogador1 = get_entry('Qual o nome do jogador 1? : ')
    const jogador2 = get_entry('Qual o nome do jogador 2? : ')
    
    print(`Bom jogo, ${jogador1} e ${jogador2}!`)
    let pontojogador1 = 0
    let pontojogador2 = 0
    let pontuou 

    let diferenca = Math.abs(pontojogador1 - pontojogador2)

    while((pontojogador1 < 21 && pontojogador2 < 21) || diferenca > 2){
        print(`${jogador1} ${pontojogador1} - ${pontojogador2} ${jogador2}`)
        pontuou = get_number('Quem marcou ponto? :')

        if (pontuou === 1){
            contabilizar_ponto(jogador1)
            pontojogador1++

        }

        if (pontuou === 2){
            contabilizar_ponto(jogador2)
            pontojogador2++

            
        }
    }

    if (pontojogador1 > pontojogador2){
        print(`Vitória do ${jogador1}!`)

    } else {
        print(`Vitória do ${jogador2}`)
    }
}

main()