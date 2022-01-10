import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json()) // retour de la fonction (ce qui est après les flèches)
        .then(data => setPokemon({data})); // prend en valeur le retour de la fonction

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <h1>{pokemon.data?.name}</h1>
          <h3>Types: {pokemon.data?.types[0].type.name}</h3>  {/* ?: optional shading: si j'ai une valeur undefined, ça ne va pas chercher à trouver une valeur à l'intérieur mais ça va seulement retourner undefined ou nul. Permet d'obtenir le premier type qui est dans type.name*/}
          <h3>Talents: {pokemon.data?.abilities[0].ability.name}, {pokemon.data?.abilities[1].ability.name}</h3> 
        </div>
        <div className="flap"></div>
      </div>
    </div>
  );
}

export default App;
