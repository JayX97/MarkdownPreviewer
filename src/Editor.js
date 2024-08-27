const Editor = () => { // add props for textarea input
    const markdown = "Hello world!";

    return (
        <div className="component" id="markdown-editor">
            <div className="component-header">Editor</div>
            <textarea id="editor">{markdown}</textarea>
        </div>
    );
}

export default Editor;