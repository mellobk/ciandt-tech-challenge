import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./PokemonDetailsCard.scss";
import { Star } from "phosphor-react";
import Button from "../../../../../shared/presentation/components/Button";
import { favouritesPokemons } from "../../../application/selectors/home";
import { setFavouritePokemon } from "../../../application/slices/home";

const PokemonDetailsCard = ({
  types,
  abilities,
  picture,
  name,
  pokemonData,
}) => {
  const dispatch = useDispatch();
  const myfavouritesPokemons = useSelector(favouritesPokemons);
  const [isFavourite, setItsFavourite] = useState(false);
  useEffect(() => {
    const findPokemon = myfavouritesPokemons?.find(
      (data) => data.name === name
    );

    if (findPokemon) {
      setItsFavourite(true);
    } else {
      setItsFavourite(false);
    }
  }, [myfavouritesPokemons, name]);

  const onClickHandle = () => {
    dispatch(setFavouritePokemon(pokemonData));
  };

  return (
    <div className={`pokemon-card-container`}>
      {isFavourite && <Star size={"16"} color="black" />}
      <div className="name"> {name}</div>
      <div className="types">
        {types.map((value, key) => (
          <div key={key}> {value.type.name}</div>
        ))}
      </div>

      {picture && <img className='picture' src={picture} alt="pokemon picture" />}

      <div className="types">
        {abilities.map((value, key) => (
          <div key={key}> {value.ability.name}</div>
        ))}
      </div>

      <Button
        textButton={isFavourite ? "Remover de favoritos" : "Añadir a favoritos"}
        onClick={onClickHandle}
      />
    </div>
  );
};

PokemonDetailsCard.propTypes = {
  types: PropTypes.array,
  abilities: PropTypes.array,
  picture: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  pokemonData: PropTypes.object,
};

PokemonDetailsCard.defaultProps = {
  name: "",
  picture: "",
  abilities: [],
  types: [],
};

export default PokemonDetailsCard;
