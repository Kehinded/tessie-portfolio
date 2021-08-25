
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
       <Header />
       <Switch>
         <Route path = '/' exact >
           <About />
           <Work />
         </Route>
       </Switch>
       <Footer />
    </div>
  );
}

export default App;
