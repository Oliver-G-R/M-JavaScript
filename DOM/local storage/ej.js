var player = [
    {
        nameUser: "Jon91",
        score: '100',
        life: '50',
    },

    {
        nameUser: "Alan91",
        score: '100',
        life: '20',
    },

    {
        nameUser: "Pedro1",
        score: '20',
        life: '90',
    },
]

localStorage.setItem('player', JSON.stringify(player))

var playerjs = JSON.parse(localStorage.getItem('player'));

for (index in playerjs){
    console.log(playerjs[index].nameUser + "-" + playerjs[index].score);
}
