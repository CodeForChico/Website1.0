import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Code For Chico Yeet
        </p>
        <a
          className="App-link"
          href="mailto: paul.davis@codeforchico.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default Home;
