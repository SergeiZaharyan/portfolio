'use strict'
const buttonLightMode = document.querySelector(".conteiner-dark-mode__btn_color-border1");
const buttonDarkMode = document.querySelector(".conteiner-dark-mode__btn_color-border2");
let buttonChange = false;
buttonLightMode.addEventListener('click', (event) => {
event.preventDefault();
const stylesheet = document.styleSheets[0];
if(buttonChange ==! true) {
    
function isСhangeСolor () {
    
    stylesheet.insertRule(`:root {  --color-button: #f7f7f9; --color-background: #fff; 
    --color-font: #000; --color-background-keyboard:#f9f9f9; --color-button-active: #dbdbdb; 
    --color-button-light-off: #000; --color-button-light-on: #e4e4e4;
    }`, stylesheet.cssRules.length);

};
isСhangeСolor ();
buttonChange = true;
};});

buttonDarkMode.addEventListener('click', (event) => {
    event.preventDefault();
    const stylesheet = document.styleSheets[0];
    if(buttonChange ==! false) {
        
    function isСhangeСolor () {
        
        stylesheet.insertRule(`:root {  --color-button: ##272b35; --color-background: #000; 
        --color-font: #fff; --color-background-keyboard:#292d38; --color-button-active: #4e4f51; 
        --color-button-light-off: #6c707b; --color-button-light-on: #d2d4d4;
        }`, stylesheet.cssRules.length);
    
    };
    isСhangeСolor ();
    buttonChange = false;
    };});

    const buttonNumber = document.querySelectorAll(".keybord__btn_color");
    const buttonOperators = document.querySelectorAll(".keybord__btn_color-red");
    const buttonReset = document.querySelector(".keybord__btn_color-aqua");
    const innerConteiner = document.querySelector(".values-conteiner__value-string_size");
    const output = document.getElementById("output");
    const equals = document.getElementById("equals");


        let a = "";
        let b = "";
        let c = "";
        
       
        buttonNumber.forEach(element => { 
        element.addEventListener('click', (event) =>{
        event.preventDefault;
        

        innerConteiner.innerHTML = innerConteiner.innerHTML + element.innerHTML ;
        if( c != "") {
            b = b + element.innerHTML ;
        } else
        {
            a = a + element.innerHTML ;
        };
    
         a = a;
         b = b;
        
});});

buttonReset.addEventListener('click', (event) => {
        event.preventDefault;
        innerConteiner.innerHTML ='';
        a = "";
        b = "";
        c = "";
        output.innerHTML = "";


});

const operator = buttonOperators.forEach(element => {

        element.addEventListener('click', (event) =>{
        event.preventDefault;

        switch(element.innerHTML){

            case '+': 
            
             c = '+';
             innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`;
            break;
        
            case '-': 
            
             c = '-';
             innerConteiner.innerHTML = `${a}` + `${c}` + `${b}`;
            break;
    
            case 'x': 
            
             c = '*';
             innerConteiner.innerHTML = `${a}` + `${`x`}` + `${b}`;
            break;
    
            case '÷': 
            
            c = '/';
            innerConteiner.innerHTML = `${a}` + `${`÷`}` + `${b}`;
            break;
    
            case '=':
            break;
        };

});});
    
equals.addEventListener('click', (event) => {
        event.preventDefault;

        switch(c){
            case '+':        
            c = parseFloat(a) + parseFloat(b);
            output.innerHTML = c;
            break;
        
            case '-': 
            c = parseFloat(a) - parseFloat(b);
            output.innerHTML = c;
            
            break;
    
            case '*': 
            c = parseFloat(a) * parseFloat(b);
            output.innerHTML = c;
            break;
    
            case '/': 
            c = parseFloat(a) / parseFloat(b);
            output.innerHTML = c;
            break;

        };
});
    