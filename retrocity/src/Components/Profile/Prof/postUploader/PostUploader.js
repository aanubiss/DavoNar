import React from 'react';

import './PostUploader.css'
import TextField from '@material-ui/core/TextField';

const postUploader = () => {
    return (
        <div className='modalWrap'>
                <h2 style={{ margin: '10px' }} >Add something</h2>
                <TextField 
                id="standard" 
                label="Title" 
                className='textField'/>
                <TextField 
                id="standard-basic" 
                label="URL" 
                className='textField'/>
                <button type="submit">Upload Image</button>

        </div>
    );
}

export default postUploader;