import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';

const App = (props) => {

  return (
    <div className="mainContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
