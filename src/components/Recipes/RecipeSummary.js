import React from 'react';

const RecipeSummary =(props)=>{
    return(
        <div>
             {props.recipeSummary.map((recipeSummary)=>(
          <div key ={recipeSummary.id}>
              {/* <div>{recipeSummary.summary}</div> */}
             
          </div>
      ))}
        </div>
    )
}

export default RecipeSummary;