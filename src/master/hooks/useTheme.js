import { useEffect, useState } from "react";

// true - muestra el sol || false - muestra la luna
const readLocalTheme = () => {
    if (JSON.parse(localStorage.getItem("theme")) === "dark") {
        return true;
    } else {
        return false;
    }
};

export const useTheme = () => {

    const [dark, setDark] = useState(readLocalTheme);

    useEffect(() => {
        if (dark) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [dark]);

    const handleChangeDarkMode = () => {
        setDark(!dark);
        dark
            ? localStorage.setItem("theme", JSON.stringify("light"))
            : localStorage.setItem("theme", JSON.stringify("dark"));
    };

    return {
        handleChangeDarkMode,
        dark,
    }
}
