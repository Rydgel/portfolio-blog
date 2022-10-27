import rangeParser from 'parse-numeric-range';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import monkey from 'react-syntax-highlighter/dist/cjs/languages/prism/monkey';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import haskell from 'react-syntax-highlighter/dist/cjs/languages/prism/haskell';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('monkey', monkey);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('haskell', haskell);

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
