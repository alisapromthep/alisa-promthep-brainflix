import React from 'react';
import './UploadForm.scss';
import publish from '../../assets/icons/publish.svg';

function UploadForm(props) {
    return (
        <form className='uploadform'>
            <label className='uploadform__label'>
                title your video
                <input className='uploadform__input' type='text' placeholder='Add a title to your video' name='title' />
            </label>
            <label className='uploadform__label'>
                add a video description
                <textarea className='uploadform__input uploadform__input--large' type='text' placeholder='Add a description to your video' name='description' />
            </label>
            <div className='button__container'>
                <img className='button__publish-icon' src={publish} alt='arrow up'/>
                <button className='button'>publish</button>
            </div>
            <button className='button button--white'>cancel</button>

            
        </form>
    );
}

export default UploadForm;