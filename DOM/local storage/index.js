
if(typeof(Storage) !== undefined){
    console.log('local storage available');
}else{
    console.log('local storage not available');
}

//Save local storage
localStorage.setItem('title', 'cource')

//save objets
var user ={
    name: "Oliver",
    lastame: 'Guerrero Ruiz',
    main: 'oliverius@mail.com',
    password: '123'
}

//converto to string
localStorage.setItem('user' , JSON.stringify(user))


//retrieve object
console.log(JSON.parse(localStorage.getItem('user')));


//remove
localStorage.removeItem('user');
localStorage.clear();