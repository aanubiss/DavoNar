import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

class App extends React.Component {
  state = { 
    posts:[
      {
        title: "qwertgy"
      }
    ]
   }

  render() { 
    return ( 
      <div className="App">
        <BrowserRouter>
          <Route path='/' render={() => <Home prop = {this.state.posts} />} />
        </BrowserRouter>
      </div>
    );
  }
}
 
export default App;
