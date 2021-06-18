import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"

function App() {
  return (
    <div>
    <Header title="Todos-List" searchBar={true}/>
    <Todos/>
    <Footer/>
    </div>
   );
}

export default App;
