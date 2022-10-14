function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fAno.value <= 0 || fAno.value > ano){
       window.alert(`Preencha um Ano Válido!`)
    } else {
       var fsex = window.document.getElementsByName('radsex')
       var idade = (ano - fAno.value)    

       var genero = ''

       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade < 8) {
            //Criança
            img.setAttribute('src','crianca-h.jpg')
        } else if (idade < 18) {
            //Jovem
            img.setAttribute('src','jovem-h.jpg')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src','adulto-h.jpg')
        } else {
            //Idoso
            img.setAttribute('src','idoso-h.jpg')
        }
        
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade < 8) {
            //Criança
            img.setAttribute('src','crianca-m.jpg')
        } else if (idade < 18) {
            //Jovem
            img.setAttribute('src','jovem-m.jpg')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src','adulto-m.jpg')
        } else {
            //Idoso
            img.setAttribute('src','idoso-m.jpg')
        }

       }
       img.style.width = '300px'
       img.style.height = '300px'
       img.style.borderRadius = '50%'
       img.style.padding = '20px'
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos o Gênero ${genero} <strong>com ${idade} anos</strong> de idade.`
       res.appendChild(img)
    }


}