import './App.css';
import Chat from './pages/Chat'
import 'bulma/css/bulma.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Chat>

        </Chat>
      </div>
    <ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider>
  );
}

export default App;
