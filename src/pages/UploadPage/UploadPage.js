import React from 'react';
import './UploadPage.scss';
import UploadForm from '../../components/UploadForm/UploadForm';
import {Component} from 'react';
import UploadComplete from '../../components/UploadComplete/UploadComplete';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import { API_URL, API_KEY } from '../HomePage/HomePage';


class UploadPage extends Component {

    state = {
        isFormSubmit: false,
    }


    handleFormSubmit= (event) => {
        event.preventDefault();

        const uploadTitle = event.target.title.value;
        const uploadDescription = event.target.description.value;

        axios
            .post(`${API_URL}/videos/${API_KEY}`, {
                title: uploadTitle,
                description: uploadDescription 
            })
            .then((response)=>{

                //once post is complete, notify user
                this.setState ({
                    isFormSubmit: true,
                })

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
                <Helmet>
                    <title>Brainflix | Upload Video</title>
                </Helmet>
                <h1 className='upload__header'> Upload Video </h1>
                <UploadForm handleFormSubmit={this.handleFormSubmit}/>
            </main>
        );
    }

}

export default UploadPage;