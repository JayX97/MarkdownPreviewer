const Preview = (props) => {
    const output = props.output;

    return (
        <div className="component" id="markdown-preview">
            <div className="component-header">Preview</div>
            <div id="preview">{output}</div>
        </div>
    );
}

export default Preview;