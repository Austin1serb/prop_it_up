import logo from './logo.svg';
import './App.css';
import './components/Stylez.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">

<Header firstName={ "Bill" } lastName={ "Justice" } age={20} hairColor={"Blond"}/>
<Header firstName={ "Eddy" } lastName={ "Dark" } age={40} hairColor={"Black"}/>
<Header firstName={ "Christine" } lastName={ "Smith" } age={28} hairColor={"Blond"}/>
<Header firstName={ "Kiley" } lastName={ "Jenner" } age={20} hairColor={"Brown"}/>


    </div>
  );
}

export default App;
