import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <div className="circle">
        <div className="container">
          <Header />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
