import rangeParser from 'parse-numeric-range';
import React from 'react';
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';

const SyntaxHighlighter = Prism as typeof React.Component<SyntaxHighlighterProps>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderCodeSyntax = ({ node, inline, className, children, ...props }): JSX.Element => {
    const match = /language-(\w+)/.exec(className || '');
    const hasMeta = node?.data?.meta;
    const content = String(children).replace(/\n$/, '');

    const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
            const RE = /{([\d,-]+)}/;
            const metadata = node.data.meta?.replace(/\s/g, '');
            const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
            const highlightLines = rangeParser(strlineNumbers);
            const highlight = highlightLines;
            const data: string = highlight.includes(applyHighlights) ? 'highlight' : null;
            return { data };
        } else {
            return {};
        }
    };

    return match ? (
        <SyntaxHighlighter
            style={nord}
            language={match[1]}
            PreTag="div"
            className="codeStyle"
            showLineNumbers={true}
            wrapLines={hasMeta ? true : false}
            wrapLongLines={true}
            useInlineStyles={true}
            lineProps={applyHighlights}
            {...props}
        >
            {content}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {content}
        </code>
    );
};

export default renderCodeSyntax;
