import React, { Component } from 'react';
import './App.scss';
import { ParallaxDemo } from './component/parallax/ParallaxDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxDemo>
          <h1>Hello world</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum neque nisi voluptatum. Aperiam asperiores consequatur earum fuga itaque modi quibusdam reiciendis repudiandae vero voluptate? Amet earum odit perspiciatis recusandae voluptatum.</p>
        </ParallaxDemo>
      </div>
    );
  }
}

export default App;
