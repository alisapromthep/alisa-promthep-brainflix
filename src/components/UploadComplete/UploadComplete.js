import './UploadComplete.scss';
import {Link} from 'react-router-dom';

import React from 'react';

function UploadComplete() {

    return (
        <div className='uploadcomplete__container'>
            <p className='uploadcomplete__text'>Your video is uploaded successfully</p>    
            <p className='uploadcomplete__text'>Thank you</p>
            <div className='button__container button__container--small'>
                <Link to='/'>
                    <button className='button'>Go to HomePage</button>
                </Link>         
            </div>
        </div>
    );
}

export default UploadComplete;