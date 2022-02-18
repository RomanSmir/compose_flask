import logo from './logo.svg';
import './App.css';


function App() {
const [clock, setClock] = useState(0)


useEffect(() =>{
    const id = setInterval(() => setClock(prev => prev + 1), 1000)
    axios.get('').then.setState({toTa})


  return () => clearInterval(id)
}, [])
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {clock}
    </div>
  );
}

export default App;