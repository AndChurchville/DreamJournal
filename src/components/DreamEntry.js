import React from 'react'

// component where the user can enter in a new dream
export default function DreamEntry() {
    return ( <>
        <div className='container'>
            <input className='dream-title' type='text' placeholder='Give your dream a title'/>
            {/* User can enter in their dream */}
            <textarea className='dream-text' type='text' placeholder='What did you dream about?' rows='5' cols='10'></textarea>

            {/* checkbox form for what emotions user had during the dream */}
            <div className='dream-feelings'>
                <form>
                    <h3> What did you feel during the dream?</h3>
                  
                    <input type='checkbox' name='feeling-1' id='1' value='confused'/>
                    <label>Confused</label>
                    <input type='checkbox' name='feeling-2' id='2' value='scared'/>
                    <label>Scared</label>
                    <input type='checkbox' name='feeling-3' id='3' value='happy'/>
                    <label>Happy</label>
                    <input type='checkbox' name='feeling-4' id='4' value='sad'/>
                    <label>Sad</label>
                </form>
            </div>
            <button type='submit'>Submit</button>
        </div>
        </>
    )
}
