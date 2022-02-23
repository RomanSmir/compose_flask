import './App.css';
import {DocumentsList} from './components/DocumentsList'
import axios from "axios";
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
        <div className="App">
            <header className="App-header">Список Бастионов
            </header>
            <DocumentsList />
        </div>
    </QueryClientProvider>
    );
}

export default App;