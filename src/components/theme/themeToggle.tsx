import { ThemeContext } from '@components/theme/themeContext';
import React, { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

const Toggle: FC = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    if (!theme) {
        return <></>;
    }

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <HiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                <HiMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;
