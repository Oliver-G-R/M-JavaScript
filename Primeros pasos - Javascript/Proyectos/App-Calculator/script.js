const buttonNumbers = document.getElementsByName('data-number');
const buttonOpera = document.getElementsByName('data-opera');
const buttonSame = document.getElementsByName('data-same')[0];
                                         /*Se pone [0] para que devulva lo que hay en la 
                                         posicion 0*/
const buttonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');

var operaCurrent = '';
var operaPrevious = '';
var operation = undefined;

buttonNumbers.forEach(function(button){
    button.addEventListener('click', function(){
       addNumber(button.innerHTML);
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

buttonDelete.addEventListener('click',  function(){
    clear();
    toUpdateDis();
});

//////////////////



function selectOpera(op){
    if(operaCurrent === '') return;
    
    if(operaPrevious !== ''){
        calculate();
    }

    operation = op.toString(); 
    operaPrevious = operaCurrent;

    operaCurrent = '';
}

function calculate(){
    var calc;
    const previus = parseFloat(operaPrevious);
    const current = parseFloat(operaCurrent);

    if(isNaN(previus) || isNaN(current)) return;

    switch(operation){
        case '+':
            calc = previus + current;
            break;
        case '-':
            calc = previus - current;
            break;
        case 'x':
            calc = previus * current;
            break;
        case '/':
            calc = previus / current;
            break
        default:
            return;
    }

    operaCurrent = calc;
    operation = undefined;
    operaPrevious = '';
    
}

function addNumber(num){
    operaCurrent = operaCurrent.toString() + num.toString();
    toUpdateDis();
}

function clear(){
    operaCurrent = '';
    operaPrevious = '';
    operation = undefined;
}

function toUpdateDis(){
    result.value = operaCurrent;
}