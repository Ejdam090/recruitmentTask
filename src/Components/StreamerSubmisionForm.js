import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { postRoute } from "../Utils/ApiRoutes";

const SubmissionFormContainer = styled.div`
  background-color: rgb(20, 20, 20);
  width: 600px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 3px solid rgb(50, 50, 50);
  .title_form {
    color: white;
    padding: 5px;
  }
  form {
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    label,
    select,
    input,
    textarea {
      width: 100%;
      text-align: left;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      border: none;
      outline: none;
    }
    .descriptionStreamer {
      width: 100%;
      height: 200px;
      resize: none;
    }
    .FormBtn {
      cursor: pointer;
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
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: rgb(198, 90, 0);
        scale: calc(1.1);
      }
    }
  }
`;
const StreamerSubmissionForm = ({ onSubmit }) => {
  /// initial values
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [description, setDescription] = useState("");
  /// list of platforms
  const platforms = ["Twitch", "YouTube", "TikTok", "Kick", "Rumble"];

  ///  submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(postRoute, {
        name,
        platform,
        description,
      });
      console.log("Streamer submitted:", response.data);
      onSubmit({ name, platform, description });
      // reset form
      setName("");
      setPlatform("");
      setDescription("");
    } catch (error) {
      console.log("Error submitting streamer:", error);
    }
  };

  return (
    <SubmissionFormContainer>
      <h2 className="title_form">Streamer Submission Form</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="label__name">Name:</label>
        <input
          className="Name_input"
          placeholder="Type name.."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label__platform">Platform:</label>
        <select
          className="platform__choose"
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

        <label className="label__description">Description:</label>
        <textarea
          className="descriptionStreamer"
          placeholder="Type description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="FormBtn" type="submit">
          Submit
        </button>
      </form>
    </SubmissionFormContainer>
  );
};

export default StreamerSubmissionForm;
