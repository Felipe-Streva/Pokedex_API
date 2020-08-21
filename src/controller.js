class PokeController{

    static newSearch(id){

        let nameRequest = new XMLHttpRequest();
            
        nameRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${id.pokeName.value.toLowerCase()}`);

        nameRequest.addEventListener('load', ()=>{
            
            if(nameRequest.status != 200){
                console.log('!200')
                // Tratar erro
            } else {
                console.log('200')
                let nameJSON = JSON.parse(nameRequest.responseText)
                if(nameJSON.types[1] == undefined){
                    nameJSON.types.push(nameJSON.types[0])
                }

                let nameModel = new PokeModels(nameJSON.sprites.front_default,
                    nameJSON.sprites.front_shiny,
                    nameJSON.name,
                    nameJSON.id,
                    nameJSON.types[0].type.name,
                    nameJSON.types[1].type.name,
                    nameJSON.weight,
                    nameJSON.height,
                    nameJSON.stats[0].base_stat,
                    nameJSON.stats[1].base_stat,
                    nameJSON.stats[2].base_stat,
                    nameJSON.stats[3].base_stat,
                    nameJSON.stats[4].base_stat,
                    )
                console.log(nameModel.infos);
            }
        })

        nameRequest.send()


    }
}