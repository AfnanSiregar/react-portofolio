import React, { useEffect, useState } from 'react'

const Button = (props) => {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button
            type='button'
            onClick={handleThemeSwitch}
            className="fixed z-10 right-4 top-28 py-2 px-2 animate-pulse bg-amber-500 hover:bg-amber-700 text-lg p-1 rounded-md md:ml-4 dark:bg-indigo-500 dark:hover:bg-indigo-700 duration-500"
        >
            {theme === 'dark' ? '🌙' : '🌞'}
        </button>
    )
}

export default Button