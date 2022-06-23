
import './App.css';
import ComponentPure from './component/ComponentPure';
import ComA from './component/ComA';
import ComB from './component/ComB';
import ComC from './component/ComC';


function App() {
  return (
    <div className="App">
      <div className='cp'>
      <ComponentPure/>
      </div>
      <div className='hoc'>
      <h1>Higher Order Component</h1>
      <h3>A higher-order component (HOC) is an advanced technique in React for reusing component logic and it is used for adding additional functionalities to the existing component.</h3>
      <ComA/>
      <ComB/>
      <ComC/>
      </div>
    </div>
  );
}

export default App;
