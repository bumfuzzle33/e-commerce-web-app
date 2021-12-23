import './App.css';
//importing bulma framework css file
import './css framework(s)/bulma.css'
//side note: most of the file names will tell in itself what i'm trying to import!
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <div id="App_container">
      <div id="display_area">
        <Navbar/>
      </div>
    </div>
    
  );
}

export default App;
