import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query' // import useQuery hook
import { ReactQueryDevtools } from "react-query/devtools";
import nameContainer from "./stateNames/nameContainer";
import Person from "./person";

const queryClient = new QueryClient()

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/')
    return res.json()
}

const People = () => {
    // data : shows the query data
    // status : shows query status(loading, sucess, error)
    const { data, status } = useQuery(nameContainer.setPageConst.people, fetchPeople)
    console.log(data)
    return ( 
        <div style={{"textAlign":"center"}}>
            <p>List of People You Should Research</p>
            { status === "loading" && <p>loading ...</p>}
            { status === "success" && (
                <div className="pepleContainer">
                    {console.log("data succesfully fetched ...")}
                    {data.results.map((item)=> {
                        return <Person key={item.name} person={item} />
                    })}
                </div>)
            }
            { status === "error" && <p>error occurs ...</p>}
        </div>
     );
}
 
// RenderPlanet component renders the planet with QueryClient/provider
const RenderPeople = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
            <People />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
     );
}
 
export default RenderPeople;