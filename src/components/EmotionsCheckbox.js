import React, {useState} from 'react';
import styled from "styled-components";

//Checkbox form for the emotions


const emotions = [
  'Happy',
  'Sad',
  'Confused',
  'Scared'
];

//Map the list of emotions in getDefaultFeelings function
//creates inital state object array and gets intialized when EmotionsCheckbox calls useCheckboxes hook.
const getDefaultFeelings = () => 
emotions.map(checkbox => ({
  name: checkbox,
  checked: false,
}));

export function useCheckboxes(defaultFeelings) {
  const [checkboxes, setCheckboxes] = useState(
    defaultFeelings || getDefaultFeelings()
  );

  function setCheckbox(index, checked) {
    //spread operator creates a copy of the current checkboxes/emotion list
    //sets the checked property of the passed index
    //new array set with setCheckboxes
    const newFeelings = [...checkboxes];
    newFeelings[index].checked = checked;
    setCheckboxes(newFeelings);
  }

  //have the checkboxes hook return list of checkboxes and callback setCheckbox

  return {
    setCheckbox,
    checkboxes,
  };
}

const Checkbox = styled.input`
margin: 0px 10px 0px !important;
cursor: pointer;
`;



//onchange handler is fired and calls the hook to update list of checkboxes
export function Checkboxes({ checkboxes, setCheckbox}) {
  return(
    <>
    {checkboxes.map((checkbox, i) => {
      return (
        <label key = {checkbox.name}>
          <Checkbox
            type="checkbox"
            checked={checkbox.checked}
            onChange={e => {
              setCheckbox(i, e.target.checked);
            } } />
          {checkbox.name}
        </label>
      );
    })}
    </>
  )
}

export default function EmotionsCheckbox(emotions) {
  const checkboxes = useCheckboxes();
  return(<>
    <div onChange = {e => emotions.onChange(
      checkboxes.checkboxes
        .filter(t => t.checked)
        .map(checkbox => checkbox.name)
        .join(', ')
        .toLowerCase())
        }>
       <h3> What did you feel during the dream?</h3>
      <Checkboxes {...checkboxes} />
      <br/>

    </div>
    </>
  );

  
}


