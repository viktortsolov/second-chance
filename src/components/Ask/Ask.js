import { Component } from 'react';

import styles from './Ask.css';

class Ask extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {

        };
    }

    goBack() {
        this.props.history.goBack();
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