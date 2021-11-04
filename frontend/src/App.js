import {
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Footer from './components/Footer';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';

function App() {
  return (
      <>
          <Sidebar />
          <div className="md:ml-64">
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/tables" component={Tables} />
              </Switch>
              <Footer />
          </div>
      </>
  );
}

export default App;
