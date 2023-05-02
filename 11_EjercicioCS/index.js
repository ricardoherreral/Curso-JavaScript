const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let {
        data: { results },
    } = response;
    let characters = results
        .map((character) => {
            return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
            };
        })
        .map((personaje) => Object.values(personaje).join(","))
        .join('\n')

    let headers = 'id,name,state,specie\n'
    let final = headers + characters

    await fs.writeFile(path.join(__dirname, 'data.csv'), final)

    //console.log(path.join(__dirname, 'data.csv')) __dirname = Devuelve el path donde nos encontramos
    // console.log(characters);
};

// Headers de data.csv
//id, nombre, estado, especie


main();
