import './App.css';
// import Footer from './Components/Footer';
// import {Main, Main1} from './Components/Main';
// import NavBar from "./Components/NavBar"
import User from './Components/User';
import UsersList from './Components/UsersList';

function App() {

  let name = "Jack"

  const display = () => {
    alert("Hello")
  }

  let persons=[
    {
      name:"Amin",
      email:"amin@gmail.com",
      phone:123654
    },
    {
      name:"Oussema",
      email:"oussema@gmail.com",
      phone:100054
    },
    {
      name:"Wided",
      email:"wided@gmail.com",
      phone:1025654
    },
    {
      name:"Hela",
      email:"hela@gmail.com",
      phone:1236540369
    },
  ]

  return (
    <div className="App">
      {/* <NavBar />
      <Main />
      <Main1 />
      <Footer /> */}
      {/* <User age={10} name={name} email="jack@gmail.com" display={display} >
        <span>Bonjour</span>
      </User> */}
      <UsersList persons={persons} />
    </div>
  );
}

export default App;
