import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    electric: {
        name: 'Electric Cyan',
        color: '#00f2ff',
        soft: 'rgba(0, 242, 255, 0.15)',
        glow: 'rgba(0, 242, 255, 0.4)',
    },
    violet: {
        name: 'Vivid Violet',
        color: '#7000ff',
        soft: 'rgba(112, 0, 255, 0.15)',
        glow: 'rgba(112, 0, 255, 0.4)',
    },
    cyber: {
        name: 'Cyber Mint',
        color: '#00ff9d',
        soft: 'rgba(0, 255, 157, 0.15)',
        glow: 'rgba(0, 255, 157, 0.4)',
    },
    crimson: {
        name: 'Deep Crimson',
        color: '#ff003c',
        soft: 'rgba(255, 0, 60, 0.15)',
        glow: 'rgba(255, 0, 60, 0.4)',
    },
    solar: {
        name: 'Solar Yellow',
        color: '#ffea00',
        soft: 'rgba(255, 234, 0, 0.15)',
        glow: 'rgba(255, 234, 0, 0.4)',
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('electric');

    useEffect(() => {
        const theme = themes[currentTheme];
        document.documentElement.style.setProperty('--accent-color', theme.color);
        document.documentElement.style.setProperty('--accent-color-soft', theme.soft);
        document.documentElement.style.setProperty('--accent-color-glow', theme.glow);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
