import "./App.css";
import atcLogo from "./atcLogo.svg";
import womanimg from './womanimg.svg';
// import section1bg from './section1bg.svg';

function App() {
  return (
    <main>
      <header className="App-header">
        <nav>
          <div className="logo">
            <img src={atcLogo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#tech">Tech acad</a>
            </li>
            <li>
              <a href="#qhse">QHSE</a>
            </li>
            <li>
              <a href="#stem">Stem acad</a>
            </li>
            <li>
              <a href="#workstation">Workstation</a>
            </li>
            <li>
              <a href="#contact">
                <button>Contact</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="section1">
        <div className="section1-text">
          <p className="section1-firstParagraph">It's time to learn and acquire digital Tech skills.</p>
          <p className="section1-secondParagraph">
            Acquire the 21st century skills so as to improve your relevance and
            employability in this ever changing world.
          </p>
          <div className="getstarted-btn">
            <button>Get Started</button>
          </div>
        </div>

        <div className="section1-img">
          <img src={womanimg} alt="woman img" />
        </div>
      </section>
    </main>
  );
}

export default App;
