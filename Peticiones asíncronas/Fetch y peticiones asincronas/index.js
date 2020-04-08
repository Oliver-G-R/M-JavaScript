var users = []
var div_users = document.querySelector('#users')
fetch('https://reqres.in/api/users?page=2') //se hace una peticion de los datos
.then(data => data.json()) //se combierten a un objeto de javascript 
.then(data =>{ //se recogen los datos ya formateados y listos 
    users = data.data;
    console.log(users)

    users.map((users, i) =>{
        var h2 = document.createElement('h2')
        h2.innerHTML = users.first_name + " " + users.last_name;
        div_users.appendChild(h2)
    })
})


