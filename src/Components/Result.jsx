import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value} )=>{
  
  //const {user,active,value} = props; //destructurin 
 // console.log(props);

  /*console.log("el usuario es: ",user);
  console.log("el usuario esta activo: ",active);
  console.log("el valor es: ",value);*/

    return(
      <div className="result">
         <span>{value}</span> 


      </div>
    )
}
    
Result.propTypes ={
  value : PropTypes.string.isRequired,
 
}

Result.defaultProps ={
  value : "0",
}
export default Result