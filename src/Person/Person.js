import React  from 'react';

const Person = (props) =>{
    return(
        <div>
            <p onClick={props.click}> my name is {props.name} and my age is {props.age} </p>
        </div>
    )
}
export default Person;
// stateless, dump and presentational component