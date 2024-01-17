
import './App.css';
import View from './components/View';
import DisplayHabit from './components/DisplayHabit';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <div className='view'>
         <View />
      </div> 
      <div className='displayHabit'>
         <DisplayHabit />
      </div>
       
      </div>
     
    </>
    
  );
}

export default App;
