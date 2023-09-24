import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="cardcontainer" id="cardcontainer">
        <div className="card" id="card" style={{ backgroundColor: 'pink' }}>
          {/* header */}
          <h2 id="heading">Jing-Ting Dong at the Library</h2>
          {/* img */}
          <img src="https://i.imgur.com/XPC2j0i.jpg" alt="Card Image" />
          <div className="card-content">
            {/* body paragraph */}
            <p id="paragraph">
              Hi, my name is Jing-Ting Dong. This is an image of me giving a
              thumbs up at the library while working on this coding project. I
              like cabbage. I also like bacon. I really like eating, but it
              gives me food coma. By golly, what a dilemma.
            </p>
            {/* hide paragraph button */}
            <button className="button" id="hideButton">
              Details
            </button>
          </div>
        </div>
      </div>

      <button id="duplicateButton">Duplicate Card</button>
      <button id="toggleButton">Toggle Background</button>
      <button id="changeHeadingButton">Change Heading</button>
      <button id="removeDuplicate">Remove A Card</button>
    </div>

  );
}

export default App;
