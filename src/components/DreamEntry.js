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
    const [checked, setIsChecked] = useState('no emotions');

    // message displayed when isSubmitted is set to true
    const message = <><h5>{title}</h5> <p>{entry} <br/>  You felt {checked} during this dream</p></>;

  const handleChange = (emotions) => {
    setIsChecked(emotions)
    console.log(emotions);
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Title: ${title}, Dream: ${entry}, Emotions: ${checked}`);
         // set to true when user clicks submit button
        setIsSubmitted(true);
        
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

            <EmotionsCheckbox onChange={handleChange}/>

            <button type="submit">
              Submit
            </button>
          </form>

          <div className='dream-summary'>
          {/* if true display message else empty string */}
          {isSubmitted ? message : null}
          </div>
        </div>
      </>
    );
}
