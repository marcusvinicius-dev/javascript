function contar(){
    var initxt = window.document.getElementById('txtInicio')
    var ini = Number(initxt.value)
    var fimtxt = window.document.getElementById('txtFim')
    var fim = Number(fimtxt.value)
    var pastxt = window.document.getElementById('txtPasso')
    var pas = Number(pastxt.value)
    var res = window.document.getElementById('txtRes')
    
    
    if(ini <= 0){
        window.alert(`O valor INICIO deve ser Maior que 0`)
    } 
    
    if(fim <= ini){
        window.alert(`O valor FIM deve ser Maior que o valor INICIO`)
    }

    if(pas < 1){
        window.alert(`O Valor PASSO deve ser Maior que 0! Vamos considerar como 1`)
        pas = 1
    }

    res.innerHTML = `Contando: <br> &#x1F3C1; `

    while (ini <= fim){
        res.innerHTML += `${ini} &#x1F449`
        ini += pas
    }

        res.innerHTML += `&#x1F3C1`

    }