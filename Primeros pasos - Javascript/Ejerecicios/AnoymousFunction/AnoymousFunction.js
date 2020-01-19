const btn_ok = document.getElementsByName('btn_ok')[0];

btn_ok.addEventListener('click', function(){
    TrueFalse(btn_ok.innerHTML);
});

function TrueFalse(Tf){
    if(Tf == 'OK'){
        addNumbers();
    }else{
        alert('of');
    }
}

function addNumbers(){
    var input = document.getElementsByName('input').values;
    
    document.getElementsByName('n1').innerHTML = 8;

    

}

