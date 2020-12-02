import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';

import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

function App() {
  

  return (
    <BrowserRouter>
      
      <Route path='/' exact component={Home}/>
      
      <Route path='/createInVoice' exact component={CreateScreen}/>
      <Route path='/edit/:id' exact component={EditScreen}/>
     
    
    </BrowserRouter>
  );
}

export default App;
