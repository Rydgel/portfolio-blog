import { FC, useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../components/theme/themeContext';

import '../../styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return <ThemeProvider>{isMounted && <Component {...pageProps} />}</ThemeProvider>;
};

export default App;
