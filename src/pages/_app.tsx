import { FC, useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../components/theme/themeContext';
import Umami from '../components/analytics/umami';

// global css, useful for loading fonts
import '../../styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <ThemeProvider>
            <Umami />
            {isMounted && <Component {...pageProps} />}
        </ThemeProvider>
    );
};

export default App;
