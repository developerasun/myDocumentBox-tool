import React, { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query' // import useQuery hook
import { ReactQueryDevtools } from 'react-query/devtools'
import nameContainer from "./stateNames/nameContainer"
import Planet from "./planet"

const queryClient = new QueryClient()
const btnStyle = {
    "fontSize" : "1rem", 
    "padding": "0.5rem", 
    "backgroundColor": "rgb(76, 172, 204)", 
    "borderCollapse":"collapse",
    "border": 0,
    "cursor":"pointer",
    "color":"white"
}

const fetchPlanet = async (page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
    return res.json()
}

const Planets = () => {
    // useQuery hook : useQuery(query_key(string), callback(fetch), option )
    // data : shows the query data
    // status : shows query status(loading, sucess, error)
    const [page, setPage] = useState(1)
    const { data, status } = useQuery([nameContainer.setPageConst.planet, page],
         () => fetchPlanet(page),

        // Query options
        {
        // data is in fresh status for 2000ms(2 sec)
        staleTime: 2000, 
        cacheTime: 500000, // data cached for 5 mins
        onSuccess: ()=>console.log("data succesfully fetched ...")
    })
    console.log(data)
    return ( 
        <div style={{"textAlign":"center"}}>
            <p>List of Planets You Should Explore</p>
            { status === "loading" && <p>loading ...</p>}
            { status === "success" && (
                <div className="planetContainer">
                    <div className="buttons" style={{
                        "display":"flex",
                        "flexFlow" : "row nowrap",
                        "gap":"0.3rem",
                        "justifyContent":"center",
                        "marginTop":"1rem", 
                    }}>
                        <button style={btnStyle} onClick={()=>setPage(1)}>1</button>
                        <button style={btnStyle} onClick={()=>setPage(2)}>2</button>
                        <button style={btnStyle} onClick={()=>setPage(3)}>3</button>
                        <button style={btnStyle} onClick={()=>setPage(4)}>4</button>
                        <button style={btnStyle} onClick={()=>setPage(5)}>5</button>
                    </div>
                    {data.results.map((item)=> {
                        return <Planet key={item.name} planet={item} />
                    })}
                </div>)
            }
            { status === "error" && <p>error occurs ...</p>}
        </div>
     );
}
 
// RenderPlanet component renders the planet with QueryClient/provider
const RenderPlanet = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
            <Planets />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
     );
}
 
export default RenderPlanet;