import React from 'react';
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import {Component} from 'react';
import {Redirect} from 'react-router-dom';
import UploadComplete from '../../components/UploadComplete/UploadComplete';


class UploadPage extends Component {

    state = {
        isFormSubmit: false,
    }


    handleFormSubmit= () => {

        this.setState ({
            isFormSubmit: true,
        })

    }

    render() {
        if (this.state.isFormSubmit) {
            return (
                <UploadComplete />
                )
        }

        return (
            <main className='upload'>
                <h1 className='upload__header'> Upload Video </h1>
                <UploadForm handleFormSubmit={this.handleFormSubmit}/>
            </main>
        );
    }

}

export default UploadPage;