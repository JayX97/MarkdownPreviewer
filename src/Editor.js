const Editor = (props) => {
    const markdown = props.markdown;
    const onChange = props.onChange;

    return (
        <div className="component" id="markdown-editor">
            <div className="component-header">Editor</div>
            <textarea onChange={onChange} id="editor">{markdown}</textarea>
        </div>
    );
}

export default Editor;