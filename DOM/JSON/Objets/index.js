//objet
var movie = {
    title: "Batman vs superman",
    year: "2018",
    country: "U.S"
};

//array objets
var movies = [
    {
        title: "Batman vs superman",
        year: "2018",
        country: "U.S"
    },
    {
        title: "Superman",
        year: "2008",
        country: "U.S"
    },
    {
        title: "Batman",
        year: "2002",
        country: "U.S"
    }

]

const box = document.querySelector('#box');

for(index in movies){
    p = document.createElement('p');
    p.append(movies[index].title + "-" + movies[index].year);

    box.append(p);
}

