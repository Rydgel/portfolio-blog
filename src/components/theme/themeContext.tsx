import React, { FC } from 'react';

export const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light';
};

type ContextProps = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = React.createContext<Partial<ContextProps>>({});

type ThemeProviderProps = {
    initialTheme?: string;
    children: React.ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const rawSetTheme = (rawTheme: string) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (props.initialTheme) {
        rawSetTheme(props.initialTheme);
    }

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};
