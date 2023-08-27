import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import PageContent from './PageContent/PageContent';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  );
}

export default App;
