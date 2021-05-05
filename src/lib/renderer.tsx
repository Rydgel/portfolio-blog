import { Component } from 'react';

import { default as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hybrid as cstyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type SyntaxProps = {
    language?: string;
    value: JSX.Element;
};

class MySyntax extends Component<SyntaxProps> {
    render(): JSX.Element {
        return (
            <SyntaxHighlighter style={cstyle} language={this.props.language} wrapLongLines={true}>
                {this.props.value}
            </SyntaxHighlighter>
        );
    }
}

export default MySyntax;