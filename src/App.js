import React, { Component } from 'react';
// import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name : 'sajid', age: 25},
      {name : 'Farooq', age: 23},
      {name : 'usama', age: 19}
    ]
  }
  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name : newName, age: 25},
        {name : 'ahmed', age: 23},
        {name : 'bhutto', age: 19}
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
      <h1>I m React</h1>
      <button onClick={() => this.switchNameHandler("Farooq11") }>Switch Name </button>
       <Person 
       name={this.state.persons[0].name}
       age={this.state.persons[0].age}
       click = {this.switchNameHandler.bind(this, "Name1")}
        />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} 
       />
       <Person 
       name={this.state.persons[2].name}
       age={this.state.persons[2].age} 
       />
      </div>
    );
  }
}

export default App;



//React Hooks allow to manage state in functional components
// setPersonState will replace previous state so i should have to check all states are update otherwise it will no longer available after setstate 
//its not good practise good idea is i would have to use multiple useState like below

// const app = props => {
//  const [personState, setPersonState] = useState({
//     persons:[
//       {name : 'sajid', age: 25},
//       {name : 'Farooq', age: 23},
//       {name : 'usama', age: 19}
//     ],
//     otherState : "Some state"
//   });
//   const [otherState, setOtherState] = useState('Some state') // we can pass any type in useState

//   const switchNameHandler = () =>{
//     setPersonState({
//       persons:[
//         {name : 'ali', age: 25},
//         {name : 'ahmed', age: 23},
//         {name : 'amjad', age: 19}
//       ]
//     })
//   }
//     return (
//       <div className="App">
//       <h1>I m React</h1>
//       <button onClick={switchNameHandler} >Switch Name </button>
//        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
// }

// export default app;