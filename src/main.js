function elementFactory(type, id, classe, content){
    let elementCreated = document.createElement(`${type}`);
    elementCreated.setAttribute('id', `${id}`);
    elementCreated.classList.add(`${classe}`);
    elementCreated.innerHTML = `${content}`;

    return elementCreated;
}

function deleteElement(id, classePai){
    let element = document.getElementById(`${id}`);
    classePai.removeChild(element)
}



let form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()
    PokeController.newSearch(this.elements)
})

let pokeShiny = document.querySelector('#pokeShiny');
pokeShiny.addEventListener('click', ()=>{
    let imgPoke = document.querySelector('#pokePhoto')
    if(imgPoke == null) return true
    if(imgPoke.src == normal) {
        imgPoke.src = shiny
    } else if(imgPoke.src == shiny) {
        imgPoke.src = normal
    }
})

let dex1 = document.querySelector('#dex1')
let dex2 = document.querySelector('#dex2')
let poke1 = document.querySelector('#poke1')
let poke2 = document.querySelector('#poke2')

dex1.addEventListener('click', ()=>{
    poke1.classList.add('hidden')
    poke2.classList.remove('hidden')
})

dex2.addEventListener('click', ()=>{
    poke2.classList.add('hidden')
    poke1.classList.remove('hidden')
})


let back = document.querySelector('#back')
back.addEventListener('click', ()=>{
    let pokeSprite = document.querySelector('#pokeSprite');
    pokeSprite.innerHTML = ''
    let name = document.querySelector('#name')
    name.innerHTML = ''
    let number = document.querySelector('#number')
    number.innerHTML =''
    let type1 = document.querySelector('#pokeType1')
    type1.innerHTML = ''
    let type2 = document.querySelector('#pokeType2')
    type2.innerHTML = ''
    let weight = document.querySelector('#pokeWeight')
    weight.innerHTML = ''
    let height = document.querySelector('#pokeHeight')
    height.innerHTML = ''
    let pokedex = document.querySelector("#pokeName");
    pokedex.value = "";
})
