
// import { useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Teachers from './Component/Teachers/Teachers';

function App() {

  // checked data in console
 // useEffect (() =>{
  //   fetch('./fakeData.JSON')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // },[])
  return (
    <div >
<Header></Header>
<Teachers></Teachers>
    </div>
  );
}

export default App;
