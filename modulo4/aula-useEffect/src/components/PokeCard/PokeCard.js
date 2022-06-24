import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemons = pokemon;

  return (
    <div>
      <p>{pokemons.name}</p>
      <p>{pokemons.weight} Kg</p>
      {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
      {pokemons.sprites && (
        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
      )}
    </div>
  );
};

export default PokeCard;
