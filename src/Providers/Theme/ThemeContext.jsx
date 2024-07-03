import { createContext, useReducer } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const initialState = {
        mode : true,
    }

    // reducer Function 

    const ThemeReducer = (state , action) => {
        switch(action.type){
            case "Change_Theme" :
                return({
                     mode : state.mode ? false : true
                    })
            default:
                return state;
        }

    }

    const [state , dispatch] = useReducer(ThemeReducer , initialState)

    return(
        <ThemeContext.Provider value={{...state , dispatch}}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContext;