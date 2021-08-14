import logo from './logo.svg';
import './App.css';
import Header from './components/block-1/header/Header.jsx';
import Main from './components/block-1/main/Main.jsx';
import InformationBlock from './components/block-1/aboutUs/InformationBlock';
import GalleryOfFriends from './components/block-1/gallery/GalleryOfFriends';
import Footer from './components/block-1/footer/Footer.jsx';

function App() {
  return (

    <div className="App">
      <div className='container'>
      <Header />
      <Main />
      <InformationBlock />
      <GalleryOfFriends />
      <Footer />
      </div>
    </div>

  );
}

export default App;
