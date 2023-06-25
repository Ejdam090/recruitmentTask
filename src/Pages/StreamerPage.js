import React from 'react'
import StreamerSubmissionForm from '../Components/StreamerSubmisionForm';
import styled from 'styled-components';

const StreamerPageContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;

`


const StreamerPage = () =>{


    return<StreamerPageContainer>
        <StreamerSubmissionForm />
    </StreamerPageContainer>
}

export default StreamerPage;