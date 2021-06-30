import React, { useState, useEffect } from 'react'

const API = 'https://rickandmortyapi.com/api/character/'

export function Characters() {

    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    return (
        <div className="Characters">
            {characters.map(character => (
                <h2 key={character.id}>{character.name}</h2>
            ))}
        </div>
    );
};
