import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <div>
        <h4>routing with anchor tag -- It reload the given page</h4>
      <button>
        <a href="/about">About</a>
      </button> {''}
      <button>
        <a href="/">Home</a>
      </button> {''}
      <button>
        <a href="/contact">Contact</a>
      </button>
      </div>
      <div>
        <h4>with Link --- It will not reload the the given page</h4>
        <button>
          <Link to='/'>Home</Link>
        </button> {' '}
        <button>
          <Link to='/about'>About</Link>
        </button> {' '}
        <button>
          <Link to='/contact'>Contact</Link>
        </button> {' '}
      </div>
    </div>
  );
}

export default App;
