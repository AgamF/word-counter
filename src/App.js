import { useState } from "react";
import { checkForLetters } from "./Algorithm";
import count from "word-count";
import Buffer from "./Buffer";
import './styles/App.css';
import 'animate.css';

const url = 'https://agamfaraj.netlify.app';
 
const App = () => {
  const [words, setWords] = useState('');

  return (
    <div>
      <h1 className="animate__animated animate__bounceInDown">Word counter</h1>
      <div className="animate__animated animate__fadeInUp">
        <textarea
         autoFocus
         placeholder="Type something" 
         onChange={(e) => setWords(e.target.value)}>
        </textarea>
        <h3>This phrase contains {count(words)} words and {checkForLetters(words)} characters.</h3>
      </div>
      <button className="animate__animated animate__fadeInUp" onClick={() => window.location.reload()}>Reset</button>
      <Buffer />
      <a href={url}>More about the developer</a>
    </div>
  );
}

export default App;