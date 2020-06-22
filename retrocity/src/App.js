import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

class App extends Component {
  state = {  }

  render() { 
    return ( 
      <div className="App">
        <BrowserRouter>
          <Route path='/' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}
 
export default App;
