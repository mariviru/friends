import React, { Component, Fragment} from 'react';
import CardList from './CardList';

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Card user="Phoebe Buffay" date="Miércoles 25 de Julio de 2018" image={image} number="37" heart="fas fa-heart" link="https://es.wikipedia.org/wiki/Phoebe_Buffay"/>

//         <Card user="Joey Tribbiani" date="Miércoles 30 de Julio de 2014" image={image} number="84" heart="far fa-heart"
//         link="https://es.wikipedia.org/wiki/Joey_Tribbiani" />

//       </Fragment>
//     )
//   }
// }

//EJERCICIO 3 (3.5)
const App = (props) => {
    return (
      <CardList/>
    )
  }


export default App;
