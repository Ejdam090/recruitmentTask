import React, { useState } from "react";
import styled from "styled-components";

const SubmissionFormContainer = styled.div`
width: 600px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
padding: 10px;
border-radius: 10px;
border: 1px solid white;
form{
    color:white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    label,select, input, textarea {
        width: 100%;
        text-align: left;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
    }
    textarea{
        width: 100%;
        height: 200px;
        resize: none;
    }
    button{
        width: 300px;
        padding: 10px;
        margin-top: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        color: white;
        font-weight: bold;
        font-size: 1.1em;
        background-color: rgb(255, 116, 0);
        transition: all .3s ease-in-out;
        &:hover{
            background-color: rgb(198, 90, 0);
            scale: calc(1.1);
            
        }
    }
}
`;
const StreamerSubmissionForm = () => {
  /// initial values
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [description, setDescription] = useState("");
  /// list of platforms
  const platforms = ["Twitch", "YouTube", "TikTok", "Kick", "Rumble"];

  ///  submit form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SubmissionFormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Name:</label>
          <input
          placeholder="Type name.."
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        
        <label>
          Platform:</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value={""}>Select Platform</option>
            {platforms.map((pltform, index) => (
              <option key={index} value={pltform}>
                {pltform}
              </option>
            ))}
          </select>
        
        <label>
          Description:</label>
          <textarea
          placeholder="Type description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </SubmissionFormContainer>
  );
};

export default StreamerSubmissionForm;
