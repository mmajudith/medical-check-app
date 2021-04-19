import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Notification from './menuCompont/Notification';
import Profile from './menuCompont/Profile'

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

        <Route exact path="/notification" component={Notification }/>
        <Route exact path="/profile" component={Profile} />
    </div>
  );
}

export default App;
