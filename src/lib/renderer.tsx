import { default as SyntaxHighlighter } from 'react-syntax-highlighter';
import { shadesOfPurple as cstyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type RendererProps = {
    code: (props: SyntaxProps) => JSX.Element;
};

type SyntaxProps = {
    language?: string;
    value: JSX.Element;
};

export const MySyntax = (props: SyntaxProps): JSX.Element => {
    return (
        <SyntaxHighlighter style={cstyle} language={props.language} wrapLongLines={true}>
            {props.value}
        </SyntaxHighlighter>
    );
};

export const MyRenderer = (): RendererProps => {
    return {
        code: MySyntax,
    };
};
