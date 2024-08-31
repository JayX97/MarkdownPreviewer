import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Editor = (props) => {
    const markdown = props.markdown;
    const onChange = props.onChange;

    return (
        <div className="component card" id="markdown-editor" style={{border: "1px solid black"}}>
            <div className="component-header">Editor</div>
            <textarea onChange={onChange} id="editor">{markdown}</textarea>
        </div>
    );
}

export default Editor;