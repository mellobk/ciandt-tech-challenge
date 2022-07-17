import React from "react";
import PropTypes from "prop-types";
import "./PokemonDetailsCard.scss";


const PokemonDetailsCard = ({
    types,
    abilities,
    picture,
    name
}) => {


  return (
    <div className={`pokemon-card-container`}>
        <div className="name"> {name}</div>
        <div className="types">
        {types.map((value, key)=>(
            <div key={key}> {value.type.name}</div>
        ))}
        </div>
      

        {picture && <img src={picture} alt='pokemon picture'/>}

    </div>
  );
};

PokemonDetailsCard.propTypes = {
    types: PropTypes.array,
    abilities: PropTypes.array,
    picture: PropTypes.string,
    name: PropTypes.string,
};

PokemonDetailsCard.defaultProps = {
    name: "",
    picture: "",
    abilities: [],
    types: [],
  };

export default PokemonDetailsCard;
