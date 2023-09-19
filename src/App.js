import './App.css';

//import ThreeDots from './components/Dots/DotsNew.js';
//import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import { Home } from './layouts/home/Home';
import { Stats } from './layouts/stats/Stats';
import { HTLessons } from './layouts/how-to-lessons/HTLessons';
import { HTEducation } from './layouts/how-to-education/HTEducation';
import { Prices } from './layouts/prices/Prices';
//import { Reviews } from './layouts/reviews/Reviews';
import { Teachers } from './layouts/teachers/Teachers';
import { Action } from './layouts/action/Action';
import { FAQ } from './layouts/faq/FAQ';
import { Footer } from './layouts/footer/Footer';
import { Header } from './layouts/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Stats />
      <HTLessons />
      <HTEducation />
      <Prices />
      <Teachers />
      <Action />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
