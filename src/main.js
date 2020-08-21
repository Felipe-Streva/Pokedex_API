let form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()
    PokeController.newSearch(this.elements)
})