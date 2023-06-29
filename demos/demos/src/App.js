import './App.css';
import UseContext from './components/pages/UseContext';
import UseEffect from './components/pages/UseEffect';
import UseMemo from './components/pages/UseMemo';
import UseRef from './components/pages/UseRef';


function App() {
 
  return (
    <div>
     <UseContext/>
     <UseRef/>
     <UseEffect/>
     {/* <UseMemo/> */}
    </div>
  );
}

export default App;
