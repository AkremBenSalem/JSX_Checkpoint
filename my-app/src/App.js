import './App.css';
import "./styles.css";
import willSmithInSrc from "./imageInSrc.jpg"

function App() {
  return (
    <div>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={willSmithInSrc} alt="Will smith in src folder" style={{width : 150}}/>
        <br />
        <img src="/imageInPublic.jpg" alt="Will smith in public folder" style={{width : 150}}/>
      </div>
      <video width="480" height="270" controls >
      <source src="VideoExp.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
