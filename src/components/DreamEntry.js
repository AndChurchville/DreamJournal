import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import EmotionsCheckbox from './EmotionsCheckbox';
import firebase from '../firebase';
import styled from 'styled-components';




// component where the user can enter in a new dream
export default function DreamEntry(props) {
const history = useHistory();
  // useState to keep user input
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  // // submit set to false initally
  // const [isSubmitted, setIsSubmitted] = useState(false);
  //get the state for checked emotions
  const [checked, setIsChecked] = useState("no emotions");

  //clear fields after submit
  const clearField = () => {
    setTitle('');
    setEntry('');
  }

  const handleChange = (emotions) => {
    setIsChecked(emotions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //trying to send dream data to FB database
      firebase.firestore().collection("dreams").add({
      title: title,
      entry: entry,
      feelings: checked,
      timestamp: firebase.firestore.Timestamp.now(),
    })
    .then(() => {
      console.log('Success!');
      clearField();
      history.push('/')

    }).catch((error) => {
      console.log(error);
    });
  
  };
  

  return (
    <>
      <EntryContainer>
        <h1> What did you dream about?</h1>
        <form onSubmit={handleSubmit}>
          {/* set title and entry on change  */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="dream-title"
            type="text"
            name="title"
            placeholder="Give your dream a title"
            value={title}
          />

          {/* User dream entry */}
          <textarea
            onChange={(e) => setEntry(e.target.value)}
            className="dream-text"
            type="text"
            name="entry"
            placeholder="I dreamt that..."
            rows="5"
            cols="10"
            value={entry}
          ></textarea>

          <EmotionsCheckbox onChange={handleChange} />
          
          <button type="submit">Submit</button>
  
        </form>

      </EntryContainer>
    </>
  );
}

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 800px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  background-color: #392757;
  color: white;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;

  .dream-title{
    width: 500px;
    padding: 5px;
  }
  .dream-text{
    margin-top: 2%;
    width: 500px;
    padding: 5px;
  }

  .emo-title{
    white-space: nowrap;

    @media (max-width: 424.99px){
      display: flex;
      padding-top: 5px;
    }
  }

  @media (max-width: 1199.98px){
    width: 600px;

    .dream-title, .dream-text{
      width: 350px;
    }
  }

  @media (max-width: 991.98px){
    width: 350px;

    h1{
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .dream-title, .dream-text{
      width: 250px;
    }
  }
`;


