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
        uploadTitle: '',
        uploadDescription: '',
        isTitleFilled: true,
        isDescriptionFilled: true,
        isFormSubmit: false,
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    
    handleFormSubmit= (event) => {
        event.preventDefault();
        
        const uploadTitle = event.target.title.value;
        const uploadDescription = event.target.description.value;

         //check if title is filled 
        if (!uploadTitle) {
            this.setState({
                isTitleFilled: false,
            })
        }

        //check if description is filled 

        if(!uploadDescription){
            this.setState({
                isDescriptionFilled: false,
            })
        }

        if (!uploadTitle || !uploadDescription){
            return alert(`Please fill out the missing information`)
        } else {

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
                .catch((error)=>{
                    console.log(`error posting`)
                })
        }



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
                <UploadForm 
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                isTitleFilled={this.state.isTitleFilled}
                isDescriptionFilled={this.state.isDescriptionFilled}
                />
            </main>
        );
    }

}

export default UploadPage;