import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { Main } from './pages/Main'
import { Services } from './pages/Services'
import { About } from './pages/About'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/main" component={Main} />
        <Route path="/about" component={About} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
