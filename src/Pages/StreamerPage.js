import React, { useState, useEffect } from "react";
import StreamerSubmissionForm from "../Components/StreamerSubmisionForm";
import styled from "styled-components";
import StreamerList from "../Components/StreamerList";
import axios from "axios";
import { getRoute } from "../Utils/ApiRoutes";

const StreamerPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StreamerPage = () => {
  const [streamers, setStreamers] = useState([]);
  const handleSubmit = (streamer) => {
    setStreamers([
      ...streamers,
      { ...streamer, _id: 0, upvotes: 0, downvotes: 0 },
    ]);
  };

  useEffect(() => {
    ///fetching data
    const fetchData = async () => {
      try {
        const response = await axios.get(getRoute);
        setStreamers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [streamers]);
  return (
    <StreamerPageContainer>
      <StreamerSubmissionForm onSubmit={handleSubmit} />
      <StreamerList streamers={streamers} />
    </StreamerPageContainer>
  );
};

export default StreamerPage;
