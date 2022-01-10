import React from "react";
import { useState } from "react";
import Navbar from './components/contextHooks/navbar'
import BookList from './components/contextHooks/bookList'
import ThemeContextProvider from './components/contextHooks/context/themeContext'
import AuthContextProvider from './components/contextHooks/context/authContext'
import ToggleTheme from './components/contextHooks/toggle'
import SongList from './components/contextHooks/songlist'


function App() {
  
  return (
      <div className="App">

        {/***************** React Context API and Hooks ****************/}

        <ThemeContextProvider>
        <AuthContextProvider>
            <Navbar />
            {/* BookList component consumes two states, each of which comes from
            ThemeContextProvider and AuthContextProvider.
            */}
            <BookList />
            <ToggleTheme />  
        </AuthContextProvider>
        </ThemeContextProvider>
        
        <SongList />
      



        {/***************** React Query ****************/}
        {/* // import Navbar from "./components/query/navbar";
        // import nameContainer from "./components/query/stateNames/nameContainer";
        // import RenderPlanet from "./components/query/planets";
        // import RenderPeople from "./components/query/people"; */}
        {/* const [page, setPage] = useState(nameContainer.setPageConst.planet) */}
        {/* <Navbar setPage={setPage}/>
        <main>
          <h1 style={{"textAlign":"center"}}>React Query Exercise</h1>
          { page===nameContainer.setPageConst.planet 
                ? <RenderPlanet/> : <RenderPeople /> }
        </main> */}
      </div>
  );
}

export default App;
