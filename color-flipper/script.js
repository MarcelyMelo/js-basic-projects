btn = document.getElementById('btn')
    
    
    btn.addEventListener('click', function(){
        textTitle = document.getElementById('textTitle')
        colorNameTxt = document.getElementById('colorNameTxt')
        
        let maxValue = 0xFFFFFF; //Número já formatado em hexadecimal nativamente pelo javascript
        let randomNumber = Math.random() * maxValue; //Gera o número aleatório da cor
        
        
        randomNumber = Math.floor(randomNumber); //arredonda para o inteiro mais próximo pois esse valor virá em float
        randomNumber = randomNumber.toString(16) //converte para string em base hexadecimal, por isso recebe 16 como argumento
        let randomColor = randomNumber.padStart(6,0)//se certifica e preenche as lacunas com valores caso não haja o suficiente deles ou remove caso tenha mais que o esperado, não altera a string original por isso estamos declarando uma string nova
        
        textTitle.style.color = `#${randomColor.toUpperCase()}`
        document.body.style.backgroundColor = `#${randomColor.toUpperCase()}`
        colorNameTxt.innerText = `#${randomColor.toUpperCase()}`
        
        
        return console.log(`#${randomColor.toUpperCase()}`)
    
    })