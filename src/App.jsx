import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllDocs from './Components/AllDocs';
import { Route, Routes } from 'react-router-dom';
import ViewDoc from './Components/ViewDoc';

function App() {
  return (
    <div className="App" style={{backgroundImage:"url('https://c1.wallpaperflare.com/preview/476/30/346/operating-theater-surgery-surgeon-hospital.jpg'),", backgroundAttachment:"fixed"}}>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<AllDocs />} />
          <Route path='/view/:id' element={<ViewDoc />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
