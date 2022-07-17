import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../../../../shared/application/constants/customHooks";
import { isEmptyObject } from "../../../../../shared/application/helpers/common-functions";
import Loader from "../../../../../shared/presentation/components/Loader";
import SearchBar from "../../../../../shared/presentation/components/SearchBar";
import {
  fecthedPokemon,
  pokemonFetchLoading,
  suggestedSearch,
} from "../../../application/selectors/home";
import { getFetchPokemon } from "../../../application/slices/home";
import PokemonDetailsCard from "../../components/PokemonDetailsCard";
import SkillDetailsCard from "../../components/SkillDetailsCard";
import "./Home.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(suggestedSearch);
  const selectedPokemon = useSelector(fecthedPokemon);
  const loading = useSelector(pokemonFetchLoading);
  const [debounceValue, setDebounceValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [suggestedData, setSuggestedData] = useState([]);
  const queryDebounce = useDebounce(debounceValue, 500);

  useEffect(() => {
    const pokemonsFilter = pokemons.filter((data) =>
      data.name.includes(debounceValue)
    );
    setSuggestedData(pokemonsFilter);
  }, [queryDebounce]);

  const handleSelectItem = (value) => {
    setSearchValue(value.name);
    dispatch(getFetchPokemon(value.url));
    setSuggestedData([]);
  };

  const handleOnchange = (value) => {
    setSearchValue(value);
    setDebounceValue(value);
  };

  return (
    <div className="home-main-container">
      <SearchBar
        onChangeInput={(e) => {
          handleOnchange(e.target.value);
        }}
        seuggets={suggestedData}
        onSelectItem={handleSelectItem}
        searchValue={searchValue}
      />

      {loading && <Loader />}
      {!isEmptyObject(selectedPokemon) && (
        <>
          <PokemonDetailsCard
            name={selectedPokemon?.species?.name}
            types={selectedPokemon?.types}
            picture={selectedPokemon?.sprites?.other.dream_world.front_default}
          />

          <SkillDetailsCard  stats={selectedPokemon?.stats}/>
        </>
      )}
    </div>
  );
};

export default HomePage;
