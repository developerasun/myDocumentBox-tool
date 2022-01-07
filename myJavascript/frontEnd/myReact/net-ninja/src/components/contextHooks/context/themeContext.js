import React, { createContext } from 'react';

// create a context
export const ThemeContext = createContext()

// create a context provider
class ThemeContextProvider extends React.Component {
    // global state that will be shared
    state = {
        isLightTheme : true,
        light : { syntax : '#555', ui : "#ddd", bg : "#eee" }, 
        dark : { syntax : "#ddd", ui : "#333", bg: "#555"}
    }
    render() { 
        return (
         <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
         </ThemeContext.Provider>   
        );
    }
}
 
export default ThemeContextProvider;