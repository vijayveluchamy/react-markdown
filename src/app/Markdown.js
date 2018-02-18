import React, { Component } from 'react';
import marked from 'marked';

export default class Markdown extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
            rawHtmlOutput: ''
        }
    }

    update(e) {
        let code = e.target.value;
        this.setState({
            rawHtmlOutput: marked(code)
        });
    }

    render() {
        return (
            <div>
                <header>React Markdown Compiler</header>
                <div className="container">
                    <textarea
                        onChange={(e) => this.update(e)}
                        defaultValue={this.state.input}
                    />
                    <pre
                        id="preview"
                        dangerouslySetInnerHTML={{ __html: this.state.rawHtmlOutput }}
                    />
                </div>
            </div>
        )
    }
}


