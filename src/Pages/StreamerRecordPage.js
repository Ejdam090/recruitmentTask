import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Circles } from "react-loader-spinner";

const RecordPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 35, 35);
  width: 100%;
  height: 100vh;
  .TagsStreamer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-right: 5px;
  }
  .NameStreamer,
  .PlatformStreamer,
  .TagsStreamer_platform,
  .TagsStreamer__Name {
    padding: 10px;
    color: white;
    font-size: 1.5em;
  }
  .Streamer-photo {
    margin-left: 10px;
  }
`;

const StreamerRecordPage = () => {
  const location = useLocation();
  let userId = location.state.userId;
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStreamer = async () => {
      try {
        setIsLoading(true);
        const host = "http://localhost:5000";
        const resp = await axios.get(`${host}/api/streamer/${userId}`);
        setRecords(resp.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchStreamer();
  }, []);

  return (
    <RecordPageContainer>
      {isLoading ? (
        <Circles />
      ) : (
        <>
          <div className="TagsStreamer">
            <p className="TagsStreamer__Name">Name:</p>
            <p className="TagsStreamer_platform">Platform: </p>
          </div>
          <div className="InfoStreamer">
            <p className="NameStreamer">{records.name}</p>
            <p className="PlatformStreamer">{records.platform}</p>
          </div>
          <img
            className="Streamer-photo"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
            alt="image-boy"
          />
        </>
      )}
    </RecordPageContainer>
  );
};

export default StreamerRecordPage;
