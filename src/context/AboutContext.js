import { createContext } from "react";

 export const AboutContext=createContext();

function AboutContextProvider({children}){
    const about={
        name:"paul",
        Bio:"am a passionate young and energetic guy.",
        hobbies:["Dancing","Music","Eating"]
    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}
export default AboutContextProvider