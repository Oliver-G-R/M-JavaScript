class userContent {
    constructor(ty_c, name, gen, year) {
        this.ty_c = ty_c;
        this.name = name;
        this.gen = gen;
        this.year = year;
    }
    saveContent(id) {
        const list_c = document.querySelector(id);
        const li = document.createElement('li');

        li.innerHTML = /*html*/ `

               <span class="card" style="font-weight: bold; font-size: 15px;">
                    ${this.name} - tipo: ${this.ty_c} - Genero: ${this.gen} - año: ${this.year} 
               </span>
  
            `
        list_c.appendChild(li);
    }

}

class userFavorite extends userContent {
    constructor(ty_c, name, gen, year) {
        super(ty_c, name, gen, year);
    }

}


function radioCh(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) return element[i].value;
    }
}

document.querySelector('#form-content').addEventListener('submit', (e) => {
    var type_c = document.getElementsByName('category');
    type_c = radioCh(type_c);
    var fav = document.getElementsByName('fav');
    fav = radioCh(fav);
    var name = document.querySelector('#name').value;
    var gender = document.querySelector('#gender').value;
    var year = document.querySelector('#year').value;

    //add class
    if (fav == 'si') {
        const us_fav = new userFavorite(type_c, name, gender, year);
        us_fav.saveContent('#list_content_fav');

    }
    const usr_c = new userContent(type_c, name, gender, year);
    usr_c.saveContent('#list_content');

    e.preventDefault();
})