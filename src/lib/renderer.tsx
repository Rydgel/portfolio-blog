import type { CodeProps } from 'react-markdown/lib/ast-to-react';

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

const renderCodeSyntax = ({ inline, className, children }: CodeProps): JSX.Element => {
    const match = /language-(\w+)/.exec(className || '');
    const content = String(children).replace(/\n$/, '');
    return !inline && match ? (
        <SyntaxHighlighter style={cstyle} language={match[1]} wrapLongLines={true}>
            {content}
        </SyntaxHighlighter>
    ) : (
        <code className={className}>{content}</code>
    );
};

export default renderCodeSyntax;
