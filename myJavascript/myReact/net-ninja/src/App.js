import React from "react";
import { useState } from "react";
import Navbar from "./components/query/navbar";
import nameContainer from "./components/query/stateNames/nameContainer";
import RenderPlanet from "./components/query/planets";
import RenderPeople from "./components/query/people";

function App() {
  const [page, setPage] = useState(nameContainer.setPageConst.planet)

  return (
      <div className="App">
        <Navbar setPage={setPage}/>
        <main>
          <h1 style={{"textAlign":"center"}}>React Query Exercise</h1>
          { page===nameContainer.setPageConst.planet 
                ? <RenderPlanet/> : <RenderPeople /> }
        </main>
      </div>
  );
}

export default App;
