import React from 'react'
import DesMoines from './desmoines.jpg'

//house image from https://www.flickr.com/photos/w4nd3rl0st/5371338419
export const FrontEnd = () => {
    return (
        <div>
            <img src={DesMoines} className='des-moines-image' alt='nothing'/>
        </div>
    );
}