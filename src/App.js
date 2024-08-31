import './App.css';
import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [markdown, setMarkdown] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    setMarkdown(input);
  };

  return (
    <div className="wrapper">
      <div className="component-wrapper">
        <Editor onChange={handleChange} />
        <Preview output={markdown} />
      </div>
      <div className="footer">
        <p>by <a id="author-link" href="https://github.com/JayX97" target="_blank">JayX97</a></p>
      </div>
    </div>
  );
}

export default App;
