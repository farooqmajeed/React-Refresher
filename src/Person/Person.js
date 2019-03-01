import React  from 'react';

const Person = (props) =>{
    return(
        <div>
            <p onClick={props.click}> my name is {props.name} and my age is {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default Person;
// stateless, dump and presentational component