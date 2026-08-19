import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

// Custom hooks
export default function useTheme() {
    return useContext(ThemeContext)
}