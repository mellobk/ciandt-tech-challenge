import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import useDebounce from "../../../../../shared/application/constants/customHooks";
import Loader from "../../../../../shared/presentation/components/Loader";
import SearchBar from "../../../../../shared/presentation/components/SearchBar";
import {
  pokemonFetchLoading,
} from "../../../application/selectors/home";
import { getFetchPokemon } from "../../../application/slices/home";
import "./PokemonLayauot.scss";
import menu from "../../../../../shared/application/constants/menu";

const PokemonLayauot = ({children, pokemons, placeholder}) => {
  const dispatch = useDispatch();


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
    return ()=>{

    }
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
    <div className="menu">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="layout-link"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="header">
       <div className="title">POKEDEX</div>
      <SearchBar
        onChangeInput={(e) => {
          handleOnchange(e.target.value);
        }}
        seuggets={suggestedData}
        placeholder={placeholder}
        onSelectItem={handleSelectItem}
        searchValue={searchValue}
      />
      </div>
    
     
      {loading && <Loader />}

      {children}
  
    </div>
  );
};

PokemonLayauot.propTypes = {
  children: PropTypes.node,
  pokemons: PropTypes.array,
  placeholder : PropTypes.string,

};

PokemonLayauot.defaultProps = {
  pokemons: [],
};
export default PokemonLayauot;
