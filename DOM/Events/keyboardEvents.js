window.addEventListener('load', () => { //Ayuda a poder cargar los eventos o funciones desde el head

    //keyboard events
    var Name_input = document.querySelector('#name');

    //Focus
    Name_input.addEventListener('focus', () => {
        console.log('[Focus]Dentro del input');
    });

    //Blur

    Name_input.addEventListener('blur', () => {
        console.log('[Blur]Fuera del input');
    });

    //Keydown

    Name_input.addEventListener('keydown', (e) => {
        console.log('[Keydown]Pulsando tecla', String.fromCharCode(e.keyCode));
    })

    //Keypress

    Name_input.addEventListener('keypress', (e) => {
        console.log('[Keypress]Tecla precionada', String.fromCharCode(e.keyCode));
    })

    //Keyup
    Name_input.addEventListener('keyup', () => {
        console.log('Tecla soltada');
    })
});