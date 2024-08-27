import './App.css';
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  return (
    <div className="wrapper">
      {/* add components here */}
      <Editor />
      <Preview />
      <div className="footer">
        <p>by <a id="author-link" href="https://github.com/JayX97" target="_blank">JayX97</a></p>
      </div>
    </div>
  );
}

export default App;
