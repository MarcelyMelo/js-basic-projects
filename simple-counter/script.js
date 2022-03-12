inc = document.getElementById('inc')
    dec = document.getElementById('dec')
    num = document.getElementById('num')
    reset = document.getElementById('reset')
    var val = 0;
    inc.addEventListener('click', incrementar)
    dec.addEventListener('click', decrementar)
    reset.addEventListener('click', ()=>{
        val = 0;
        num.innerText = val
        num.style.color = 'rgb(32, 32, 32)'
    })
    function incrementar(){
        val++
        num.innerText = val
        if(val == 0){
        num.style.color = 'rgb(32, 32, 32)'
    }else if(val > 0){
        num.style.color = 'green'
        }
    }
    function decrementar(){
        val--
        num.innerText = val
        if(val == 0){
        num.style.color = 'rgb(32, 32, 32)'
    }else if(val < 0){
        num.style.color = 'red'
    }
    }