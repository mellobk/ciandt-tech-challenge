import React from "react";
import PropTypes from "prop-types";
import "./SkillDetailsCard.scss";


const SkillDetailsCard = ({
    stats,
}) => {


  return (
    <div className={`pokemon-skill-container`}>
      {stats?.map((value, index)=>(
       <div key={index}> 
         <div> {value.stat.name} </div>
         <div> {value.base_stat}</div>
       </div>
      ))}
 
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
