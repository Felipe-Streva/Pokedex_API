let shiny = '';
let normal = '';

class PokeViews {

    static showInfos(pokeInfos){
        normal = pokeInfos.picture;
        shiny = pokeInfos.picture_shiny;
        let pokeSprite = document.querySelector('#pokeSprite');
        pokeSprite.innerHTML = '';
        let imgPoke = elementFactory('img', 'pokePhoto','poke-photo', '' );
        imgPoke.src = `${pokeInfos.picture}`;
        pokeSprite.appendChild(imgPoke);

        let name = document.querySelector('#name')
        let number = document.querySelector('#number')
        name.innerHTML = `${pokeInfos.name}`
        number.innerHTML = `n.${pokeInfos.number}`

        let type1 = document.querySelector('#pokeType1')
        let type2 = document.querySelector('#pokeType2')
        type1.innerHTML = `<p>${pokeInfos.type1}</p>`
        type2.innerHTML = `<p>${pokeInfos.type2}</p>`

        let weight = document.querySelector('#pokeWeight')
        let height = document.querySelector('#pokeHeight')
        weight.innerHTML = `${(pokeInfos.weight/10)+'kg'}`
        height.innerHTML = `${(pokeInfos.height/10)+'m'}`
    }
}