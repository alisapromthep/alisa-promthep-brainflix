import React from 'react';
import './UploadForm.scss';
import publish from '../../assets/icons/publish.svg';
import UploadPreview from '../../assets/images/Upload-video-preview.jpg';



function UploadForm({handleFormSubmit}) {

    const handleSubmit = (event)=>{
        event.preventDefault();
        handleFormSubmit();

    }


    return (
        <div className='upload__container'>
            <div className='upload__thumbnail-container'>
                <p className='upload__thumbnail-label'> video thumbnail </p>
                <img className='upload__thumbnail-img' src={UploadPreview} alt='first person view of a biker looking down'/>
            </div>
            <form 
            onSubmit={handleFormSubmit}
            className='uploadform'>
                <label className='uploadform__label'>
                    title your video
                    <input className='uploadform__input' type='text' placeholder='Add a title to your video' name='title' />
                </label>
                <label className='uploadform__label'>
                    add a video description
                    <textarea className='uploadform__input uploadform__input--large' type='text' placeholder='Add a description to your video' name='description' />
                </label>
                <div className='uploadform__button-container'>
                    <div className='button__container'>
                        <img className='button__publish-icon' src={publish} alt='arrow up'/>
                        <button type='submit' className='button'>publish</button>
                    </div>
                    <button type='button' className='button button--white'>cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UploadForm;