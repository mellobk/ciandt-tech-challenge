import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDebounce from "../../../../../shared/application/constants/customHooks";
import SearchBar from "../../../../../shared/presentation/components/SearchBar";
import { suggestedSearch } from "../../../application/selectors/home";
import "./Home.scss";

const HomePage = () => {

    const  pokemons = useSelector(suggestedSearch); 
    const [debounceValue, setDebounceValue] = useState('');
    const [suggestedData, setSuggestedData] = useState([]);
    const queryDebounce = useDebounce(debounceValue, 500);

    useEffect(() => {
        const pokemonsFilter = pokemons.filter(data => data.name.includes(debounceValue));
        setSuggestedData(pokemonsFilter)
      }, [queryDebounce]);


    const HandleOnchange = (value)=>{
        setDebounceValue(value)
    }
  return (
    <div className="home-main-container">

         <SearchBar  onChangeInput={(e)=>{HandleOnchange(e.target.value)}}  seuggets={suggestedData}/>
    </div>
  );
};

export default HomePage;
