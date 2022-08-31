function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var cont = document.querySelector('div#cont')
    
    if (ini.value.length==0 || fim.value.length==0 || pas.value.length==0 || Number(pas.value)==0){
        window.alert('Por favor, preencha todos os campos com dados válidos!')
    } else {
        cont.innerHTML = 'Contando: '
        if (Number(ini.value) < Number(fim.value)) {
            for (c=Number(ini.value); c<=Number(fim.value); c+=Number(pas.value)){
            cont.innerHTML += `${c} \u{1F449} `             
            }
        } else {        
            for (c=Number(ini.value); c>=Number(fim.value); c-=Number(pas.value)){
                cont.innerHTML += `${c} \u{1F449} `             
            }
        }
        cont.innerHTML += ` FIM\u{1F3C1}`
    }
}