import React from 'react';
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import UploadPreview from '../../assets/images/Upload-video-preview.jpg';

function UploadPage(props) {
    return (
        <main className='upload'>
            <h1 className='upload__header'> Upload Video </h1>
            <div className='upload__thumbnail-container'>
                <p className='upload__thumbnail-label'> video thumbnail </p>
                <img className='upload__thumbnail-img' src={UploadPreview} alt='first person view of a biker looking down'/>
            </div>
            <UploadForm />
        </main>
    );
}

export default UploadPage;