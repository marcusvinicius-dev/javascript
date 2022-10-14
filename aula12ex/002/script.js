
var agora = new Date()
var anoAtu = Number(agora.getFullYear())
var AnoNasc = window.document.getElementById('AnoNasc')
var AnoN = Number(AnoNasc.value)

var res = window.document.getElementById('textores')


function clicar(){
    var Idade = (AnoN - anoAtu)
    res.innerHTML = `${Idade}`
}