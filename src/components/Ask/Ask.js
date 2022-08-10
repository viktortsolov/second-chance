import React, { Component } from 'react';

import { createNewQuestion } from '../../services/Ask-Service';
import notificationContext from "../../contexts/notificationContext";

import Checkbox from '../../shared/checkBox';
import { InputError } from '../../shared/inputError';

import './Ask.css';

class Ask extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);

        this.emailInput = React.createRef();
        this.nameInput = React.createRef();
        this.textInput = React.createRef();

        this.state = {
            checked: false,
            emailShow: '',
            nameShow: '',
            textShow: '',
        };
    }

    componentDidMount() {
        //this.context[1]({type: 'SUCCESS', payload: 'Yess'});
    }

    goBack() {
        this.props.history.goBack();
    }

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked })

    onAskFormSubmitHandler(e) {
        e.preventDefault();

        let name = e.target.name.value;
        let email = e.target.email.value;
        let text = e.target.text.value;
        let checked = this.state.checked;

        if (email === '') {
            this.emailInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: 'Please fill your email!' }));
            this.context[1]({ type: 'ERROR', payload: 'Please fill your email!' });
            return;
        }

        if (name === '') {
            this.nameInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: '', nameShow: 'Please fill your name!' }));

            this.context[1]({ type: 'ERROR', payload: 'Please fill your name!' });
            return;
        }

        if (text === '') {
            this.textInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: '', nameShow: '', textShow: 'Please ask your question!' }));
            this.context[1]({ type: 'ERROR', payload: 'Please fill your question!' });
            return;
        }

        if (!checked) {
            this.context[1]({ type: 'ERROR', payload: 'Please accept the Terms and Conditions!' });
            return console.log('Please accept the Terms and Conditions!');
        }

        createNewQuestion(name, email, text)
            .then(res => {
                this.context[1]({ type: 'SUCCESS', payload: 'Your question has been submited!' });
                this.props.history.push('/Catalogue');
            });


    }

    render() {
        return (
            <div className='Ask-Main'>
                <div className='Ask-wrapper'>
                    <h1 className='title'>ASK US</h1>
                    <div className='login'>
                        <input type='text' className="input" placeholder='Your Name' />
                        <input type='text' className="input" placeholder='Your Email Address' />
                    </div>

                    <div className='subject'>
                        <input type='text' className="input" placeholder='Subjct' />
                    </div>

                    <div className='msg'>
                        <textarea className='area' placeholder='Leave a Message'></textarea>
                    </div>

                    <a className='submitBtn'>Send Message</a>
                </div>
            </div>
        )
    };
}

export default Ask; 