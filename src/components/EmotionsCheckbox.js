import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import DreamEntry from './DreamEntry';


//EmotionsCheckbox.js Trying to separate checkbox UI into its own component

//Setting up a inital object for each emotion. 
const Emotion = ({type = 'checkbox', name, checked = false, onChange}) => {
  return(
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};



export default function EmotionsCheckbox() {
    const [isChecked, setIsChecked] = useState({});
    
// Above: state to track what emotion is checked. Below: what to do when emotion is checked
    const handleCheck = (e) => {
        setIsChecked({...isChecked,[e.target.name]:e.target.checked});
        console.log('Emotions: ', isChecked);
    }

    // List of emotions as objects
  const emotions = [
  { name: "Happy", key: "Happy", label: "Happy" },
  { name: "Sad", key: "Sad", label: "Sad" },
  { name: "Confused", key: "Confused", label: "Confused" },
  { name: "Scared", key: "Scared", label: "Scared" },
];

// TODO: Figure out a way to pass the checked emotions to display in  dream summary in DreamEntry Component
    return (
      <div className="dream-feelings">
        <h3> What did you feel during the dream?</h3>

{/* Map through the emotions array of objects and showcase each item */}
        {emotions.map((item) => (
          <label key={item.key}>
            <Emotion
              name={item.name}
              checked={isChecked[item.name]}
              onChange={handleCheck}
            />
            {item.name}
          </label>
        ))}
      </div>

      // {/* <input
      //   type="checkbox"
      //   onChange={(e) => setIsChecked(e.target.value)}
      //   name="feeling"
      //   id="1"
      //   value="confused"
      // />
      // <label>Confused</label>

      // <input
      //   type="checkbox"
      //   onChange={(e) => setIsChecked(e.target.value)}
      //   name="feeling"
      //   id="2"
      //   value="scared"
      // />
      // <label>Scared</label>

      // <input
      //   type="checkbox"
      //   onChange={(e) => setIsChecked(e.target.value)}
      //   name="feeling"
      //   id="3"
      //   value="happy"
      // />
      // <label>Happy</label>

      // <input
      //   type="checkbox"
      //   onChange={(e) => setIsChecked(e.target.value)}
      //   name="feeling"
      //   id="4"
      //   value="sad"
      // />
      // <label>Sad</label> */}
    );
}
