function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano1 = data.getFullYear()
    var fano = document.getElementById('txtano') //2001
    var res = document.querySelector('div#res')
    var ano1 =  ano1 - 122
    
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Data invalida!')
    } else { if (ano1 > fano.value) {window.alert('[ERRO] Data invalida!')}
        else 
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe M.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem M.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto M.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso M.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe F.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem F.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto F.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa F.png')
            }
        }
        res.style.texAligh = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

} 