function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong> Horas.`
        if (hora >= 0 && hora < 12) {
        //Bom dia!!
        img.src = 'manha.png'
        document.body.style.background = '#ade7b6'
    }   else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#adade7'
    }   else {
        //boa noite!
        img.src = 'noite.png'
        document.body.style.background = "#1B2B47"
    }



}