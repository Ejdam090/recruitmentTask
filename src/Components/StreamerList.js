import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { getRoute } from "../Utils/ApiRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const StreamerListContainer = styled.div`
  width: 600px;
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 35, 35);
  h3 {
    color: white;
    padding: 10px;
  }
  ul {
    list-style: none;
    li {
      padding: 10px;
      p {
        color: white;
        padding: 10px;
      }
      .votes {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background: none;
          outline: none;
          border: none;
          color: white;
          font-size: 1.5em;
          cursor: pointer;
        }
        p {
          margin: 10px;
        }
      }
    }
  }
`;

const StreamerList = () => {
  const [streamers, setStreamers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(getRoute);
        setStreamers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isLoading]);
  const handleClick = async (id, typeVote) => {
    setIsLoading(true);
    try {
      const host = "http://localhost:5000";
      const send = await axios.put(`${host}/api/streamer/${id}/vote`, {
        voteType: `${typeVote}`,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StreamerListContainer>
      <h3>Streamer List</h3>
      <ul>
        {streamers.map((streamer) => (
          <li key={streamer._id}>
            <p>Name: {streamer.name}</p>
            <p>Platform: {streamer.platform}</p>
            <div className="votes">
              <button onClick={() => handleClick(streamer._id, "upvotes")}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <p>{streamer.upvotes}</p>
              <button onClick={() => handleClick(streamer._id, "downvotes")}>
                <FontAwesomeIcon icon={faThumbsUp} rotation={180} />
              </button>
              <p>{streamer.downvotes}</p>
            </div>
          </li>
        ))}
      </ul>
    </StreamerListContainer>
  );
};

export default StreamerList;
