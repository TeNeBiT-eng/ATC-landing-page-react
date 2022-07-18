import "./App.css";
import atcLogo from "./atcLogo.svg";
import womanimg from './womanimg.svg';
import adobe from './adobe.svg';
import anaconda from './anaconda.svg';
import cisco from './cisco.svg';
import creativecloud from './creativecloud.svg';
import facebook from './facebook.svg';
import google from './google.svg';
import ibm from './ibm.svg';
import java from './java.svg';
import Matplotlib from './Matplotlib.svg';
import microsoft from './microsoft.svg';
import python from './python.svg';
import atcdemola from './atcdemola.svg';
import atcmanimg1 from './atcmanimg1.svg';
import atcwomanimg from './atcwomanimg.svg';
import atcmanimg2 from './atcmanimg2.svg';
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

      <section className="section2">
        <div className="img">
          <img src={adobe} alt="adobe" />
        </div>
        <div className="img">
          <img src={anaconda} alt="anaconda" />
        </div>
        <div className="img">
          <img src={cisco} alt="cisco" />
        </div>
        <div className="img">
          <img src={creativecloud} alt="creativecloud" />
        </div>
        <div className="img">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="img">
          <img src={google} alt="google" />
        </div>
        <div className="img">
          <img src={ibm} alt="ibm" />
        </div>
        <div className="img">
          <img src={java} alt="java" />
        </div>
        <div className="img">
          <img src={Matplotlib} alt="Matplotlib" />
        </div>
        <div className="img">
          <img src={microsoft} alt="microsoft" />
        </div>
        <div className="img">
          <img src={python} alt="python" />
        </div>
      </section>

      <section className="section3">
        <div className="employees">
          <div className="employeeImg">
            <img src={atcdemola} alt="atcdemola" />
          </div>
          <div className="employeeImg">
            <img src={atcmanimg1} alt="atcmanimg1" />
          </div>
          <div className="employeeImg woman">
            <img src={atcwomanimg} alt="atcwomanimg" />
          </div>
          <div className="employeeImg">
            <img src={atcmanimg2} alt="atcmanimg2" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
