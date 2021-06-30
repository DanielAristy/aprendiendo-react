import React, { useState, useEffect, Fragment } from 'react'

const API = 'https://rickandmortyapi.com/api/character/'

export function Characters() {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    const style = {
        width: '18rem'
    };
    const cards = {
        margin: '20px',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridGap: '20px 20px',
    }
    return (
        <div style={cards}>
            { characters.map(character => (
                <div className="card" style={style} key={character.id}>
                <img class="card-img-top" src={character.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{character.name}</h5>
                    <p class="card-text">Especie: {character.species}</p>
                </div>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            ))}
        </div>
    );
};
