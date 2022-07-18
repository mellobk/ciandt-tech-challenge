import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SkillDetailsCard.scss";
import BarChart from "../../../../../shared/presentation/components/BarChart";


const SkillDetailsCard = ({
    stats,
}) => {
  
  const [dataChart , setDataChart] = useState([])

  useEffect(() =>{
   
   const labelsStats = stats?.map((value)=>{
      return {name: value.stat.name,
              stats: value.base_stat}
    })

    setDataChart(labelsStats)
  },[stats])


  return (
    <div className={`pokemon-skill-container`}>
     <BarChart dataChart={dataChart}/>
    </div>
  );
};

SkillDetailsCard.propTypes = {
    stats: PropTypes.array,
};

SkillDetailsCard.defaultProps = {
    stats: [],
  };

export default SkillDetailsCard;
