import React from 'react';
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';

function UploadPage(props) {
    return (
        <main className='upload'>
            <h1 className='upload__header'> Upload Video </h1>
            <UploadForm />
        </main>
    );
}

export default UploadPage;