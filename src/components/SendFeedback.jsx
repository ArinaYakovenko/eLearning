import React from 'react'

const SendFeedback = () => {
    return (
        <div id='feedback' className='send-feedback'>
            <div className="container-block">
                <h1>Talk To Us About Your Project</h1>
                <p>We will never send spam or add you to a mailing list</p>
                <form className='feedback-form' action="">
                    <label htmlFor="user-name"></label>
                    <input type="text" name='user-name' id='user-name' placeholder='Enter your Name' />

                    <label htmlFor="user-email"></label>
                    <input type="email" name='user-email' id='user-email' placeholder='Enter your Email Address' />

                    <label htmlFor="user-message"></label>
                    <textarea name="user-message" id="user-message" cols="50" rows="5" placeholder='Your Message' />

                    <input id='feedback-submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default SendFeedback;
