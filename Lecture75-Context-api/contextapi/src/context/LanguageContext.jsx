import { useState } from "react";
import { createContext } from "react";

export const languageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentlang, setCurrentlang] = useState("english");

  const lang = {
    english: {
      welcome: "welcome",
      msg: "we are so happy you're here.",
    },
    hindi: {
      welcome: "स्वागत है",
      msg: "हमें बहुत खुशी है कि आप यहाँ हैं।",
    },
  };

  const toogleLanguage = () => {
    setCurrentlang((prev) => (prev == "english" ? "hindi" : "english"));
  };

  return (
    <languageContext.Provider
      value={{ text: lang[currentlang], toogleLanguage, currentlang }}
    >
      {children}
    </languageContext.Provider>
  );
}
