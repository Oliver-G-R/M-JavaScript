const buttonS = document.querySelector('#formP');

buttonS.addEventListener('submit', () => {
    var title = document.querySelector('#movie').value;
    if (title.length >= 1) {
        localStorage.setItem(title, title);
    }
});


var ul = document.querySelector('#listMovies');
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}