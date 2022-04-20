import React from 'react';
import './UploadForm.scss';

function UploadForm(props) {
    return (
        <form className='uploadform'>
            <label className='uploadform__label'>
                title your video
                <input className='uploadform__input' type='text' />
            </label>
            <label className='uploadform__label'>
                add a video description
                <textarea className='uploadform__input uploadform__input--large' type='text' />
            </label>

            
        </form>
    );
}

export default UploadForm;