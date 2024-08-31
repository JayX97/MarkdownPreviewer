import './App.css';
import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const defaultText = `# Heading 1
## Heading 2
[Link](https://www.freecodecamp.org)
\`<div></div>\`
\`\`\`
function printMessage() {
  console.log("Hello world!");
}
\`\`\`
- List item 1
  - List item 2

> Block Quote

**Bold text**
_Italic text_

![Jason](https://www.shutterstock.com/shutterstock/photos/2061066161/display_1500/stock-vector-jason-voorhees-animated-cartoon-with-his-sharp-knife-halloween-2061066161.jpg)`;
  
  const [markdown, setMarkdown] = useState(defaultText);

  const handleChange = (event) => {
    const input = event.target.value;
    setMarkdown(input);
  };

  return (
    <div className="wrapper">
      <div className="component-wrapper">
        <Editor markdown={defaultText} onChange={handleChange} />
        <Preview output={markdown} />
      </div>
      <div className="footer">
        <p>by <a id="author-link" href="https://github.com/JayX97" target="_blank">JayX97</a></p>
      </div>
    </div>
  );
}

export default App;
