import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './main/components/NavBar'
import CustomerRouter from './main/components/CustomerRouter'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	
  state = {};
  
  componentDidMount() {
    setInterval(this.hello, 250);
	}
  
  hello = () => {
      fetch('/customer-profile/api/hello')
          .then(response => response.text())
          .then(message => {
              this.setState({message: message});
          });
  };
	
  render() {
    return (
      <div id="content">
          <NavBar value={this.state.message}/>
          <main>
             <div class="container">
                <div class="row">
                  <div class="col-xl-8 col-lg-8 col-md-8 offset-xl-2 offset-lg-2 offset-md-2">
                    <div class="App">
                      <CustomerRouter />
                    </div>
                  </div>  
                </div>
             </div> 
          </main>  

      </div>  
    );
  }
}

export default App;
