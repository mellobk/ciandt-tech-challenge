import React from "react";
import PropTypes from "prop-types";
import "./PokemonDetailsCard.scss";
import { Star  } from "phosphor-react";
import Button from "../../../../../shared/presentation/components/Button";

const PokemonDetailsCard = ({
    types,
    abilities,
    picture,
    name,
    onClick,
    favorite
}) => {
  return (
    <div className={`pokemon-card-container`}>
        <Star  size={'16'}  color='black' />
        <div className="name"> {name}</div>
        <div className="types">
        {types.map((value, key)=>(
            <div key={key}> {value.type.name}</div>
        ))}
        </div>

        {picture && <img src={picture} alt='pokemon picture'/>}

        
        <div className="types">
        {abilities.map((value, key)=>(
            <div key={key}> {value.ability.name}</div>
        ))}
        </div>

        <Button textButton={favorite?'Remover de favoritos':'Añadir a favoritos'} onClick={onClick}/>

    </div>
  );
};

PokemonDetailsCard.propTypes = {
    types: PropTypes.array,
    abilities: PropTypes.array,
    picture: PropTypes.string,
    name: PropTypes.string,
    favorite:PropTypes.bool,
    onClick:PropTypes.func
};

PokemonDetailsCard.defaultProps = {
    name: "",
    picture: "",
    abilities: [],
    types: [],
  };

export default PokemonDetailsCard;
