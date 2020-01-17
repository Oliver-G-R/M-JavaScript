const buttonNumbers = document.getElementsByName('data-number');
const buttonOpera = document.getElementsByName('data-opera');
const buttonSame = document.getElementsByName('data-same')[0];
const buttonClear = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result'); 
var operaCurrent = '', operaPrevius = '', operation = undefined;


buttonNumbers.forEach(function(button){
    button.addEventListener('click', function(){
        addNumbers(button.innerHTML);
    })
});

buttonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        selectOpera(button.innerHTML);
    })
});

buttonSame.addEventListener('click', function(){
    calculate();
    toUpdateDis();
});

buttonClear.addEventListener('click', function(){
    clear();
    toUpdateDis();
});


//---------------------Métods de la app
function addNumbers(num){
    operaCurrent = operaCurrent.toString() + num.toString();
    toUpdateDis();
}

function selectOpera(oper){
    if(operaCurrent === '') return;

    if(operaPrevius !== ''){
        calculate();
    }

    operation = oper.toString();
    operaPrevius = operaCurrent;
    operaCurrent = '';
}

function calculate(){
    var calc;
    var current = parseFloat(operaCurrent);
    var previus = parseFloat(operaPrevius);

    if(isNaN(current) || isNaN(previus)) return;

    switch(operation){
        case '+':
            calc = previus + current;
            break;
        case '-':
            calc = previus - current;
            break;
        case '/':
            calc = previus / current;
            break;
        case 'x':
            calc = previus * current;
            break;
        default:
            return;     
    }

    
    operaCurrent = calc;
    operation = undefined;
    operaPrevious = ''
}

function toUpdateDis(){
    result.value = operaCurrent;
}

function clear(){
    operaCurrent = '';
    operaPrevius = ''; 
    operation = undefined;
}
