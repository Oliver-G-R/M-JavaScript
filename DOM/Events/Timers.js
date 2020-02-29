window.addEventListener('load', () => {
    function SInterval() {
        var time = setInterval(() => {
            console.log('Set Interval executed');
            var h1 = document.querySelector('h1');
            if (h1.style.fontSize == '50px') {
                h1.style.fontSize = '20px';
            } else {
                h1.style.fontSize = '50px'
            }
        }, 1000) //Se ejecuta infinitamente

        return time;
    }

    var time_f = SInterval();
    var stop = document.querySelector('#stop');
    var start = document.querySelector('#start');
    /*
    var time = setTimeout(() =>{
        console.log('Set Interval executed');
        var h1 = document.querySelector('h1');
        if(h1.style.fontSize == '50px'){
            h1.style.fontSize = '20px';
        }else{
            h1.style.fontSize = '50px'
        }
    }, 3000); //Se ejecuta una vez*/
    start.addEventListener('click', () => {
        alert('Se ha iniciadoo el intervalo del bucle');
        SInterval();
    });
    stop.addEventListener('click', () => {
        //alert('Se ha parado el intervalo del bucle');
        clearInterval(time_f); //Para el bucle de setInterval
    });
})