import React, { useState, useEffect, useReducer } from 'react'

const API = 'https://rickandmortyapi.com/api/character/'

/**1. Estado inicial
 * 2. Reducer
 * 3. dispatch para enviar la informacion
 */

//Estado inicial
const initialState = {
    favorites: []
}

//Reducer
const favoriteReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
            default:
                return state;
    }
}

export function Characters() {

    const [ characters, setCharacters ] = useState([]);
    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});
        console.log(favorite);
    }

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
        <div>
            {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}
            <div style={cards}>
                { characters.map(character => (
                    <div className="card" style={style} key={character.id}>
                        <img className="card-img-top" src={character.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">Especie: {character.species}</p>
                            <button 
                            type="button"
                             onClick={() => handleClick(character)}
                             >
                                Agregar a Favoritos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
