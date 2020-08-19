import React, {useState} from 'react';
import EmotionsCheckbox from './EmotionsCheckbox';


// component where the user can enter in a new dream
export default function DreamEntry(props) {
    // useState to keep user input
    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");
    // submit set to false initally
    const [isSubmitted, setIsSubmitted] = useState(false);
    //get the state for checked emotions
    const [checked, setIsChecked] = useState([]);

    // message displayed when isSubmitted is set to true
    const message = <><h5>{title}</h5> <p>{entry} <br/>  You felt {checked} during this dream</p></>;



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Title: ${title}, Dream: ${entry}`);
       
        // set to true when user clicks submit button
        setIsSubmitted(true);
    };
    
    return (
      <>
        <div className="container">
          <h1> What did you dream about last night?</h1>
          <form>
            {/* set title and entry on change  */}
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="dream-title"
              type="text"
              name="title"
              placeholder="Give your dream a title"
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
            ></textarea>

            {/* checkbox for emotions felt during dream  */}
            {/* <div className="dream-feelings">
              <h3> What did you feel during the dream?</h3>

              <input type="checkbox" onChange={(e)=>setIsChecked(e.target.value)} name="feeling" id="1" value="confused" />
              <label>Confused</label>
              <input type="checkbox" onChange={(e)=>setIsChecked(e.target.value)} name="feeling" id="2" value="scared" />
              <label>Scared</label>
              <input type="checkbox" onChange={(e)=>setIsChecked(e.target.value)} name="feeling" id="3" value="happy" />
              <label>Happy</label>
              <input type="checkbox" onChange={(e)=>setIsChecked(e.target.value)} name="feeling" id="4" value="sad" />
              <label>Sad</label>

            
            </div> */}

            {/* GOAL: Display multiple emotions in the dream-summary if checked by user.*/}
            {/* Else display 'No feelings for this dream'  */}

            <EmotionsCheckbox/>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>

          <div className='dream-summary'>
          {/* if true display message else empty string */}
          {isSubmitted ? message : ''}
          </div>
        </div>
      </>
    );
}
