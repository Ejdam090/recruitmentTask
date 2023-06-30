import React from "react";
import StreamerSubmissionForm from "../Components/StreamerSubmisionForm";
import styled from "styled-components";
import StreamerList from "../Components/StreamerList";

const StreamerPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StreamerPage = () => {
  return (
    <StreamerPageContainer>
      <StreamerSubmissionForm />
      <StreamerList />
    </StreamerPageContainer>
  );
};

export default StreamerPage;
