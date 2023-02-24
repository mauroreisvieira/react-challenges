import React from "react";
import { messages } from "../../locales/index";

export type Language = keyof typeof messages;

export type Theme = {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
};
