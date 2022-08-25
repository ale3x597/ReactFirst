import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import FirstComponent from './Components/examples/FirstComponent';
import SecondComp from './Components/examples/SecondComponent';
import ThirdComp from './Components/examples/ThirdComponent';
import Counter from './Components/CounterComponents/Counter';

/*function App() {   
  return (  
     original formating from create-react-app now uses a function component
     I changed it to a class component for the time being
*/

class App extends Component {
  render (){
    return (

    <div className="App">
   
    <Counter/>

    </div>
    
  );
}
}
//have to include class in App class to render it 
// to render practice just add  <PracticeComponents></PracticeComponents> to App Class
class PracticeComponents extends Component {
  render (){
    return(
      <div ClassName ="Practice">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HEllo World!
        </p>
      
       <FirstComponent></FirstComponent>
       <SecondComp></SecondComp>
       <ThirdComp></ThirdComp>
      </header> 
      </div>
    )
  }
}




export default App;
