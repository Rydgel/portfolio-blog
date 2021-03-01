import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { getInitialTheme } from '../components/theme/themeContext';

function setInitialColorMode() {
    const rawTheme = getInitialTheme();

    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
}

// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: blockingSetInitialColorMode,
                        }}
                    ></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
