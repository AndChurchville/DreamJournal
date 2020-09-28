import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import EmotionsCheckbox from './EmotionsCheckbox';
import firebase from '../firebase'




// component where the user can enter in a new dream
export default function DreamEntry(props) {

  // useState to keep user input
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  // submit set to false initally
  const [isSubmitted, setIsSubmitted] = useState(false);
  //get the state for checked emotions
  const [checked, setIsChecked] = useState("no emotions");


  // message displayed when isSubmitted is set to true
  const message = (
    <>
      <h5>{title}</h5>
      <p> {entry} 
        <br /> 
        You felt {checked} during this dream 
      </p>
    </>
  );

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
    const db = firebase.firestore();
    const entryRef = db.collection("dreams").add({
      title: title,
      entry: entry,
      feelings: checked,
    });
    clearField();
    window.location.replace('/')

  
    // console.log(`Title: ${title}, Dream: ${entry}, Emotions: ${checked}`);
    // // set to true when user clicks submit button
    // setIsSubmitted(true);

  };
  

  return (
    <>
      <div className="container">
        <h1> What did you dream about last night?</h1>
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
            placeholder="What did you dream about?"
            rows="5"
            cols="10"
            value={entry}
          ></textarea>

          <EmotionsCheckbox onChange={handleChange} />

          {/* <Link to="/"> */}
            <button type="submit">Submit</button>
          {/* </Link> */}
        </form>

        <div className="dream-summary">
          {/* if true display message else empty string */}
          {isSubmitted ? message : null}
        </div>
      </div>
    </>
  );
}
