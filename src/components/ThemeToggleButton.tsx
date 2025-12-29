import { useEffect } from "react";
import assets from "../assets/assets";

export const ThemeToggleButton = ({theme, setTheme}:{theme: any, setTheme:any}) => {
    
    // Dark Mode Preferences
    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    // Toogle Button 
    useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex"
      aria-label="Toggle theme"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        alt=""
      />
    </button>
  );
};