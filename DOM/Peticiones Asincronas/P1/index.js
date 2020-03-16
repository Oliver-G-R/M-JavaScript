//  Fetch (ajax) y peticiones a servicios / apis rest

var users = [];
var div_users = document.querySelector('#users');
fetch('https://reqres.in/api/users?page=2') //hace la peticion de los datos
    .then(data => data.json()) //recoge los datos mediante una promesa, esto para convertirlo en un objeto javascript usable
    .then(users => { //Captura la información y se opera 
        users = users.data;
        console.log(users);
        users.forEach((us,i) => {
            let name = document.createElement('h2');
            name.innerHTML = i + "." + us.first_name + " " + us.last_name;
            div_users.appendChild(name);
        });
    })