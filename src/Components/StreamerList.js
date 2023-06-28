import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';


const StreamerListContainer = styled.div`
    width: 100%;
`


const StreamerList = () =>{
    const [streamers, setStreamers] = useState([]);


    return<StreamerListContainer>
        <h3>Streamer List</h3>
        <ul>
            {streamers.map((streamer)=>(
                <li key={streamer._id}>
                    <p>Name: {streamer.name}</p>
                    <P>Platform: {streamer.platform}</P>
                    <p>UpVotes: {streamer.upvotes}</p>
                    <p>DownVotes: {streamer.downvotes}</p>
                </li>
            ))}
        </ul>
    </StreamerListContainer>
}

export default StreamerList;