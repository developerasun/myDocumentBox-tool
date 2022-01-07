import React from 'react';
import { ThemeContext } from './context/themeContext';

class BookList extends React.Component { 
    render() {
        return( 
            // You can use Context.Consumer instead of the static contextType.
            // The Context.Consumer takes a function with a context parameter, which is 
            // a global state from its context provider.
            <ThemeContext.Consumer>{(context)=>{
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark
                return (
                    <ul style={{"backgroundColor" : theme.bg, "color" : theme.syntax, "padding": "1rem"}}>
                        <li style={{"backgroundColor" : theme.ui}}>my book</li>
                        <li style={{"backgroundColor" : theme.ui}}>your book</li>
                        <li style={{"backgroundColor" : theme.ui}}>his book</li>
                    </ul>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default BookList