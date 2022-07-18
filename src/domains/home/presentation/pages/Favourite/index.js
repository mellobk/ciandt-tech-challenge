import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "../../../../../shared/application/helpers/common-functions";
import {
  favouritesPokemons, fecthedPokemon,
} from "../../../application/selectors/home";
import SkillDetailsCard from "../../components/SkillDetailsCard";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";
import PokemonLayauot from "../../components/PokemonLayauot";
import "./Favourite.scss";
import { setSelectdPokemon } from "../../../application/slices/home";

const Favourite = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState();
  const myfavouritesPokemons = useSelector(favouritesPokemons);
  const selectedPokemon = useSelector(fecthedPokemon);

  useEffect(() => {
    return () => {
      dispatch(setSelectdPokemon([]));
    };
  }, []);

  useEffect(() => {
    const favouritePokemons = myfavouritesPokemons.map((value) => {
      return {name:value.name, url:`https://pokeapi.co/api/v2/pokemon/${value.id}`};
    });
    setPokemons(favouritePokemons);
  }, [myfavouritesPokemons]);

  return (
  
    <PokemonLayauot pokemons={pokemons} placeholder='Busca entre tus pokemones favoritos'>
          <div className="cards">
        {!isEmptyObject(selectedPokemon)?<>
           <PokemonDetailsCard
            pokemonData={selectedPokemon}
            favourite={myfavouritesPokemons}
            name={selectedPokemon?.name}
            types={selectedPokemon?.types}
            picture={selectedPokemon?.sprites?.other.dream_world.front_default}
            abilities={selectedPokemon?.abilities}
          />

          <SkillDetailsCard stats={selectedPokemon?.stats} />
      
        </>: <>
        {myfavouritesPokemons.map(
        (data, index) =>
          !isEmptyObject(data) && (
            <div key={index}className="cards">
              <PokemonDetailsCard
                pokemonData={data}
                favourite={myfavouritesPokemons}
                name={data?.name}
                types={data?.types}
                picture={
                  data?.sprites?.other.dream_world.front_default
                }
                abilities={data?.abilities}
              />

              <SkillDetailsCard stats={data?.stats} />
            </div>
          )
      )}
        </>}
      

        </div>

    </PokemonLayauot>
  );
};

export default Favourite;
