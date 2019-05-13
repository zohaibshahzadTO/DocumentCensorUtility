import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fileContent: ''
        };

        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('phrases', this.phrases.value);

        fetch('http://localhost:9000/uploadandmask', {
            method: 'POST',
            body: data
        }).then(response => {
            response.json().then(body => {
                this.setState({ fileContent: `${body.modifiedFileContent}` });
            });
        });
    }

    render() {
        return (
            <div className="App">
                <h1>DOCUMENT MASKING UTILITY</h1>
                <hr></hr>
                <form onSubmit={this.handleUpload}>
                    <div>
                        <strong>Document:&nbsp;&nbsp;</strong>
                        <input
                            ref={ref => {
                                this.uploadInput = ref;
                            }}
                            type="file"
                            accept=".txt"
                        />
                    </div>
                    <br />
                    <div>
                        <strong>Keywords/Phrases:&nbsp;&nbsp;</strong>
                        <input
                            ref={ref => {
                                this.phrases = ref;
                            }}
                            type="text"
                            size="100"
                        />
                    </div>
                    <br />
                    <div>
                        <button>Upload and Mask</button>
                    </div>
                    <div class="masked-output">
                        <h3>MASKED OUTPUT</h3>
                        <pre>{this.state.fileContent}</pre>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
