function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var txthora = window.document.getElementById('Thora')
    var imag = window.document.getElementById('imagem')

    txthora.innerHTML = `Agora são <strong>${hora}</strong> horas.`

    if (hora < 12){
        //imag.setAttribute("src", "bom-dia.jpg")
        imag.src = 'bom-dia.jpg'
        document.body.style.background = "#CDBB91"
    } else if (hora < 18){
        //imag.setAttribute("src", "boa-tarde.jpg")
        imag.src = 'boa-tarde.jpg'
        document.body.style.background = "#A97964"
    }else{
        //imag.setAttribute("src", "boa-noite.jpg")
        imag.src = 'boa-noite.jpg'
        document.body.style.background = "#4A4B4C"
    }
}