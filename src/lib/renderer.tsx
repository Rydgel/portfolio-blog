import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderCodeSyntax = ({ node, inline, className, children, ...props }): JSX.Element => {
    const match = /language-(\w+)/.exec(className || '');
    const content = String(children).replace(/\n$/, '');
    return !inline && match ? (
        <SyntaxHighlighter style={nord} language={match[1]} wrapLongLines={true} PreTag="div" {...props}>
            {content}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {content}
        </code>
    );
};

export default renderCodeSyntax;
