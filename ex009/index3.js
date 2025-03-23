var agora = new Date()
var diasen =  agora.getDay()
/*
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta  
   4 = Quinta
   5 = Sexta
   6 = Sábado
*/



switch(diasen){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO]Dia inválido!')
        break //opcional
    }
