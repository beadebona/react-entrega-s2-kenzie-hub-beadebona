import './App.css';
import Routes from './routes';
import GlobalStyle  from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
      <ToastContainer/>
    </div>
  );
}

export default App;
