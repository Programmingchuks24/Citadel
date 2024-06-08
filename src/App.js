import './App.css';
import Header from './Header.js';
import Body from './Body.js';

function App() {
  return (
    <div className="w-[100%] h-auto">
      <div className = "fixed w-[100%] top-0 left-0 z-10">
        <Header/>
      </div>
      <div className = "mt-[5rem] overflow-hidden">
        <Body/>
      </div>
      
    </div>
  );
}

export default App;
