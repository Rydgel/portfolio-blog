import { Component } from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hybrid as cstyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// only import used languages for reduced footprint
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/hljs/cpp';
import haskell from 'react-syntax-highlighter/dist/cjs/languages/hljs/haskell';
import rust from 'react-syntax-highlighter/dist/cjs/languages/hljs/rust';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('haskell', haskell);
SyntaxHighlighter.registerLanguage('rust', rust);

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
