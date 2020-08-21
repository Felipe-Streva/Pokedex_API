class PokeModels {
    constructor(picture, picture_shiny, name, number, type1, type2, weight, height, statHP, statAttack, statDefense, statSpecialAttack, statSpeed){
        this._picture = picture;
        this._picture_shiny = picture_shiny;
        this._name = name;
        this._number = number;
        this._type1 = type1;
        this._type2 = type2;
        this._weight = weight;
        this._height = height;
        this._statHP = statHP;
        this._statAttack = statAttack;
        this._statDefense = statDefense;
        this._statSpecialAttack = statSpecialAttack;
        this._statSpeed = statSpeed;
    }

    get infos(){
        let infos =  {
            picture: this._picture,
            picture_shiny: this._picture_shiny,
            name: this._name,
            number: this._number,
            type1: this._type1,
            type2: this._type2,
            weight: this._weight,
            height: this._height,
            statHP: this._statHP,
            statAttack: this._statAttack,
            statDefense: this._statDefense,
            statSpecialAttack: this._statSpecialAttack,
            statSpeed: this._statSpeed
        }
        return infos
    }

}

//pokemon-form/{id or name}$.sprites.front_default      IMAGEM