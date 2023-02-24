import React, { useState } from "react";

import { ThemeContext } from "./ThemeContext";
import { Theme } from "./types";

export interface ThemeProps {
    defaultLanguage: Theme["language"];
    children: React.ReactNode;
}

export const ThemeProvider = ({
    children,
    defaultLanguage,
}: ThemeProps): React.ReactElement => {
    const [language, setLanguage] = useState(defaultLanguage);

    return (
        <ThemeContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
