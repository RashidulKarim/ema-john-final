import './App.css';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Foods></Foods>
     <Footer></Footer>
    </div>
  );
}

export default App;
