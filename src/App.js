import React from 'react';
import EmailEditor from 'react-email-editor';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedData: null,
        };
        this.emailEditorRef = React.createRef();
    }

    saveData = () => {
        this.emailEditorRef.current.editor.exportHtml((data) => {
            const {design} = data;
            this.setState({
                savedData: design,
            });
        });
    };

    loadData = () => {
        // you can load your template here;
        this.emailEditorRef.current.editor.loadDesign(this.state.savedData);
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.saveData}>Save Template Data</button>
                </div>
                <div>
                    <button onClick={this.loadData}>Load Template Data</button>
                </div>

                <EmailEditor
                    ref={this.emailEditorRef}
                    onLoad={() => null}
                />
            </div>
        );
    }
}

export default App;
