function contar(){
    var ini = window.document.getElementById('txtInicio')
    var fim = window.document.getElementById('txtFim')
    var pas = window.document.getElementById('txtPasso')
    var res = window.document.getElementById('txtRes')
    var i = 0
    
    
    if(Number(ini.value <= 0)){
        window.alert(`O valor INICIO deve ser Maior que 0`)
    } 
    
    if(Number(fim.value) <= Number(ini.value)){
        window.alert(`O valor FIM deve ser Maior que o valor INICIO`)
    }

    if(pas.value < 1){
        window.alert(`O Valor PASSO deve ser Maior que 0`)
    }


    res.innerHTML = `Contando: `

    for (i = 1; i <= 5; i++){
        res.innerHTML += `${i}`
    }

    }