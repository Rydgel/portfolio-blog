import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type RendererProps = {
    code: (props: SyntaxProps) => JSX.Element;
};

type SyntaxProps = {
    language?: string;
    value: JSX.Element;
};

export const MySyntax = (props: SyntaxProps): JSX.Element => {
    return (
        <SyntaxHighlighter style={nord} language={props.language} wrapLongLines={true}>
            {props.value}
        </SyntaxHighlighter>
    );
};

export const MyRenderer = (): RendererProps => {
    return {
        code: MySyntax,
    };
};
