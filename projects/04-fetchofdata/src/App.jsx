import "./App.css";
import useApi from "./hooks/useApi";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import { useState, useEffect } from "react";

export default function App() {
  const { data } = useApi("https://pokeapi.co/api/v2/pokemon");
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    if (data) {
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((response) => response.json())
      );
      Promise.all(promises).then((pokemonData) =>
        setPokemonDetails(pokemonData)
      );
    }
  }, [data]);

  return (
    <div className="app">
      <h1>Pokemon</h1>
      <Search setPokemonDetails={setPokemonDetails}/>
      {pokemonDetails.length > 0 ? (
        pokemonDetails.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p>No Pokemon found</p>
      )}
    </div>
  );
}
