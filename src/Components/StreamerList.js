import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const StreamerListContainer = styled.div`
  width: 600px;
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 35, 35);
  .Link_Navigate {
    margin: 5px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    background-color: rgb(50, 50, 50);
    outline: none;
    color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
      scale: calc(1.1);
    }
  }
  .Title__list {
    color: white;
    padding: 10px;
  }
  ul {
    list-style: none;
    li {
      padding: 10px;
      .NameStreamer,
      .PlatformName,
      .DownVotes,
      .UpVotes {
        color: white;
        padding: 10px;
      }
      .Link_Navigate {
        cursor: pointer;
      }
      .votes {
        display: flex;
        justify-content: center;
        align-items: center;
        .UpVoteBtn,
        .DownVoteBtn {
          background: none;
          outline: none;
          border: none;
          color: white;
          font-size: 1.5em;
          cursor: pointer;
        }
        .UpVoteBtn {
          color: green;
        }
        .DownVoteBtn {
          color: red;
        }
        .UpVotes,
        .DownVotes {
          margin: 10px;
        }
      }
    }
  }
`;

const StreamerList = ({ streamers }) => {
  /// navigate to different page with params
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/streamer-record-page", {
      state: {
        userId: id,
      },
    });
    console.log(id);
  };
  // send and update votes about streamer
  const handleClick = async (id, typeVote) => {
    try {
      const host = "http://localhost:5000";
      const send = await axios.put(`${host}/api/streamer/${id}/vote`, {
        voteType: `${typeVote}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StreamerListContainer>
      <h3 className="Title__list">Streamer List</h3>
      <ul>
        {streamers.map((streamer) => (
          <li key={streamer._id}>
            <p className="NameStreamer">
              Name:{" "}
              <button
                onClick={() => handleNavigate(streamer._id)}
                className="Link_Navigate"
              >
                {streamer.name}
              </button>
            </p>
            <p className="PlatformName">Platform: {streamer.platform}</p>
            <div className="votes">
              <button
                className="UpVoteBtn"
                onClick={() => handleClick(streamer._id, "upvotes")}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <p className="UpVotes">{streamer.upvotes}</p>
              <button
                className="DownVoteBtn"
                onClick={() => handleClick(streamer._id, "downvotes")}
              >
                <FontAwesomeIcon icon={faThumbsUp} rotation={180} />
              </button>
              <p className="DownVotes">{streamer.downvotes}</p>
            </div>
          </li>
        ))}
      </ul>
    </StreamerListContainer>
  );
};

export default StreamerList;
