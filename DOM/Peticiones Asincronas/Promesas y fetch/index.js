//  Fetch (ajax) y peticiones a servicios / apis rest

var users = [];
var div_users = document.querySelector('#users');

var div_janet = document.querySelector('#janet');


function userList(us) {
    us.forEach((us, i) => {
        let name = document.createElement('h2');
        name.innerHTML = i + "." + us.first_name + " " + us.last_name;
        div_users.appendChild(name);
    });
}

function getUsers() {
    return fetch('https://reqres.in/api/users')

}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}




fetch('https://reqres.in/api/users?page=2') //hace la peticion de los datos
getUsers()
    .then(data => data.json()) //recoge los datos mediante una promesa, esto para convertirlo en un objeto javascript usable
    .then(users => { //Captura la información y se opera 
        // console.log(users.data);
        userList(users.data);
        return getJanet();
    }).then(data => data.json())
    .then(janet => {


    });

function showJanet(usr) {
    let name = document.createElement('h4');
    div_janet.innerHTML =  "." + usr.first_name + " " + usr.last_name;
    div_janet.appendChild(name);
}