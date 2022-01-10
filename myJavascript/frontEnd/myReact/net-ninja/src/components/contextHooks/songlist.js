import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

function SongList() {

    const [songs, setSongs] = useState([
        {title : 'hey', id : 1},
        {title : 'wow', id : 2},
        {title : 'hello', id : 3},
        {title : 'newly added', id : 4},
    ])
    const AddSong = () => {
        setSongs([...songs, { title : "working or not", id: uuidV4()}])
    }
    return ( 
        <div>
            <ul>
                {songs.map((song)=>{
                    return <li key={song.id}>{song.title}</li>
                })}
            </ul>
            <button onClick={AddSong}>Add song</button>
        </div>
     );
}

export default SongList;