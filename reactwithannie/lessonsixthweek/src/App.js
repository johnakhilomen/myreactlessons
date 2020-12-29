import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { AnotherContext } from './AnotherContext';
import React, { Component } from 'react'

class App extends Component {
  state = { 
    contentA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam sem. Donec sagittis, neque vitae eleifend tincidunt, tellus neque semper tortor, eget tempus risus orci eu sem. Pellentesque nec neque dapibus, consectetur dolor ac, ultricies ante. Nulla sodales arcu nisi, id gravida erat sagittis a. Aliquam rutrum enim lectus, quis consectetur risus luctus in. Nunc nulla nisi, consectetur eget porta eu, finibus sed ipsum. Curabitur tempus nibh gravida vehicula accumsan. In laoreet maximus dapibus. Aliquam maximus arcu urna, nec egestas sapien luctus non.",
    contentB: "Sed egestas diam a justo lacinia finibus. Nam dictum massa vitae risus tristique venenatis. Ut ornare facilisis luctus. Donec diam magna, molestie a lorem ut, vulputate dignissim erat. Nulla eget ultricies leo, sit amet cursus augue. Mauris convallis ante ipsum, non feugiat nisi tempus laoreet. In condimentum purus non tortor tempus, quis porttitor ante faucibus. Proin velit felis, lobortis consequat pulvinar at, consequat in purus. Aenean hendrerit cursus mi, at tincidunt lacus finibus ut. Pellentesque lacus odio, aliquet ac sodales laoreet, efficitur venenatis tortor. Nullam gravida ut est sit amet tempor. Ut tortor sem, rutrum non nunc in, iaculis sagittis dolor. Maecenas enim eros, efficitur sit amet dignissim et, aliquet et lorem. Vestibulum congue nunc turpis, nec auctor ipsum rutrum et. Donec mollis nisl et lorem tristique, ut porta nunc auctor.",
    menu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    pgTitle: "Welcome to Annie's web",
    subTitle: "We're building a fun site with context"
   }
  render() { 
    return (
      <div className="App">
       <Header myprop={this.state}></Header>
       <h1>Hello there!</h1>
       <AnotherContext.Consumer>{(pgCtx) =>{ 
               console.log(pgCtx);           
             }}
        </AnotherContext.Consumer>
         
      </div>
    );
  }
}
 
export default App;

