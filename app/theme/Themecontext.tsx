"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
    isDark: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme: Theme = "light";
    const isDark = false;
    const toggleTheme = () => { };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            <div className="">
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
