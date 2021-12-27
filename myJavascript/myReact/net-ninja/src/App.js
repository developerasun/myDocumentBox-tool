import React from "react";
import { useState } from "react";
import Navbar from "./components/query/navbar";
import People from "./components/query/people";
import Planets from "./components/query/planets";
import nameContainer from "./components/query/stateNames/nameContainer";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


function App() {
  const [page, setPage] = useState(nameContainer.setPageConst.planet)

  return (
    <div className="App">
      <Navbar setPage={setPage}/>
      <main>
        <h1>Hello React Again</h1>
        <QueryClientProvider client={queryClient}>
        { page===nameContainer.setPageConst.planet 
              ? <Planets /> : <People /> }
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default App;
