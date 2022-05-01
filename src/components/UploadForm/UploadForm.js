import React from 'react';
import './UploadForm.scss';
import publish from '../../assets/icons/publish.svg';
import UploadPreview from '../../assets/images/Upload-video-preview.jpg';
import {Link} from 'react-router-dom';



function UploadForm({handleFormSubmit,handleChange , isTitleFilled, isDescriptionFilled}) {


    return (
        <form 
        onSubmit={handleFormSubmit}
        className='uploadform'>
        <div className='uploadform__container'>
            <div className='uploadform__thumbnail-container'>
                <p className='uploadform__thumbnail-label'> video thumbnail </p>
                <img className='uploadform__thumbnail-img' src={UploadPreview} alt='first person view of a biker looking down'/>
            </div>
            <div className='uploadform__input-container'>
                <label className='uploadform__label'>
                    title your video
                    <input 
                    className={`uploadform__input 
                    ${!isTitleFilled ? 'uploadform__input--error':''}
                    `} 
                    type='text' 
                    placeholder='Add a title to your video' 
                    name='title'
                    onChange={handleChange} />
                </label>
                <label className='uploadform__label'>
                    add a video description
                    <textarea 
                    className={`uploadform__input uploadform__input--large
                    ${!isDescriptionFilled ? 'uploadform__input--error':''}
                    `}
                    type='text' 
                    placeholder='Add a description to your video' name='description'
                    onChange={handleChange}/>
                </label>
            </div>
        </div>
            <div className='uploadform__button-container'>
                <div className='button__container'>
                    <img className='button__publish-icon' src={publish} alt='arrow up'/>
                    <button type='submit' className='button'>publish</button>
                </div>
                <Link to='/'>
                <button type='button' className='button button--white'>cancel</button>
                </Link>
            </div>
        </form>
    );
}

export default UploadForm;