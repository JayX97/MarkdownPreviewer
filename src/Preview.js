import { marked } from 'marked';
import Prism from 'prismjs';

//Marked library
marked.use({
    breaks: true,
    highlight: (code) => {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript')
    }
});

//initialize Renderer
const renderer = new marked.Renderer();

const Preview = (props) => {
    const output = props.output;

    return (
        <div className="component" id="markdown-preview">
            <div className="component-header">Preview</div>
            <div id="preview" dangerouslySetInnerHTML={{
                __html: marked(output, { renderer: renderer })
            }}></div>
        </div>
    );
}

export default Preview;