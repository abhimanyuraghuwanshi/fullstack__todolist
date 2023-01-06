import ItemList from "./Itemlist.js"
import { Display } from "./display.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemList />
        </div>

        <div className="container">
          <h2>Data is fetched from Mongodb and displayed</h2>
       <Display />
       </div>
    </div>
  );
}

export default App;
