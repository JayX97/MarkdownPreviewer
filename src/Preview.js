import { marked } from 'marked';
import Prism from 'prismjs';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Marked library
marked.use({
    breaks: true,
    highlight: (code) => {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript')
    }
});

const Preview = (props) => {
    const output = props.output;

    return (
        <div className="component card" id="markdown-preview" style={{border: "1px solid black"}}>
            <div className="component-header">Preview</div>
            <div className="card-body" id="preview" dangerouslySetInnerHTML={{
                __html: marked(output)
            }}></div>
        </div>
    );
}

export default Preview;