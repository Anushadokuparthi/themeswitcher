import React, { useContext } from "react";
import ThemeContext  from "../context/ThemeContext";
import Button from 'react-bootstrap/Button';

const ThemeToggler = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext)
    return(
        <Button variant="outline-dark" className="capitalize"
        onClick={() => { setThemeMode(themeMode === "light" ? "dark" : "light")}}
        >Swith to {themeMode === "light" ? "Dark" : "Light"}</Button>
    )
}
export default ThemeToggler;