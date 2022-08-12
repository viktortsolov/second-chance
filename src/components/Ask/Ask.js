import React, { Component } from 'react';

import { createNewQuestion } from '../../services/Ask-Service';

import './Ask.css';

class Ask extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);

        this.emailInput = React.createRef();
        this.nameInput = React.createRef();
        this.subjectInput = React.createRef();
        this.textInput = React.createRef();

        this.state = {
            checked: false,
            emailShow: '',
            nameShow: '',
            subjectShow: '',
            textShow: '',
        };
        
    }

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked })

    onAskFormSubmitHandler(e) {
        e.preventDefault();

        let name = e.target.name.value;
        let email = e.target.email.value;
        let subject = e.target.subject.value;
        let text = e.target.text.value;

        if (email === '') {
            this.emailInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: 'Please fill your email!' }));
            return;
        }

        if (name === '') {
            this.nameInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: '', nameShow: 'Please fill your name!' }));
            return;
        }

        if (subject === '') {
            this.subjectInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: '', nameShow: 'Please fill your subject!' }));
            return;
        }

        if (text === '') {
            this.textInput.current.focus();
            this.setState(oldState => ({ ...oldState, emailShow: '', nameShow: '', textShow: 'Please ask your question!' }));
            return;
        }

        createNewQuestion(name, email, subject, text)
            .then(res => {
                alert("Question is successfully submitted!")
            });
    }

    goBack() {}

    render() {
        return (
            <div className='Ask-Main'>
                <div className='Ask-wrapper'>
                    <h1 className='title'>ASK US</h1>
                    <form onSubmit={(e) => this.onAskFormSubmitHandler(e)}>
                        <div className='login'>
                            <input type="name" name="name" ref={this.nameInput} className="input" placeholder='Your Name' />
                            <input type='email' name="email" ref={this.emailInput} className="input" placeholder='Your Email Address' />
                        </div>

                        <div className='subject'>
                            <input type='text' name="subject" ref={this.subjectInput} className="input" placeholder='Subject' />
                        </div>

                        <div className='msg'>
                            <textarea className='area' type="text" name="text" ref={this.textInput} placeholder='Leave a Message'></textarea>
                        </div>

                        <input type="submit" className='submitBtn' value="Send Message" />
                    </form>
                </div>
            </div>
        )
    };
}

export default Ask; 