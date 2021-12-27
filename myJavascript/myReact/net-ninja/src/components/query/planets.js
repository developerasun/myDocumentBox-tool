import React from "react";
import { useQuery } from 'react-query' // import useQuery hook
import nameContainer from "./stateNames/nameContainer";

const fetchPlanet = async () => {
    const res = await fetch('http://swapi.dev/api/planets/')
    return res.json()
}

const Planets = () => {
    // data : shows the query data
    // status : shows query status(loading, sucess, error)
    const { data, status } = useQuery(nameContainer.setPageConst.planet, fetchPlanet)
    console.log(data)
    return ( 
        <div>
            I am Planets component
            { status === "loading" && <p>loading ...</p>}
            { status === "success" && (
                <div>
                    <p>data succesfully fetched ...</p>
                    {data.results.map((item)=> <li key={Math.random()*data.results.length}>{item.name}</li> )}
                </div>)
            }
            { status === "error" && <p>error occurs ...</p>}
        </div>
     );
}
 
export default Planets;