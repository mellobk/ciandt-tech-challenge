import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "../../../../../shared/application/helpers/common-functions";
import {
  favouritesPokemons,
  fecthedPokemon,
  suggestedSearch,
} from "../../../application/selectors/home";
import SkillDetailsCard from "../../components/SkillDetailsCard";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";
import PokemonLayauot from "../../components/PokemonLayauot";
import "./Home.scss";
import { setSelectdPokemon } from "../../../application/slices/home";

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(suggestedSearch);
  const selectedPokemon = useSelector(fecthedPokemon);
  const myfavouritesPokemons = useSelector(favouritesPokemons);

  useEffect(() => {
    return () => {
      dispatch(setSelectdPokemon([]));
    };
  }, []);

  return (
    <PokemonLayauot pokemons={pokemons} placeholder='Busca tu pokemon'>
      {!isEmptyObject(selectedPokemon) && (
        <div className="cards">
          <PokemonDetailsCard
            pokemonData={selectedPokemon}
            favourite={myfavouritesPokemons}
            name={selectedPokemon?.name}
            types={selectedPokemon?.types}
            picture={selectedPokemon?.sprites?.other.dream_world.front_default}
            abilities={selectedPokemon?.abilities}
          />

          <SkillDetailsCard stats={selectedPokemon?.stats} />
        </div>
      )}
    </PokemonLayauot>
  );
};

export default HomePage;
