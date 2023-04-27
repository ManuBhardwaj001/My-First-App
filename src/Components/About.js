// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
export default function About(props) {


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#00060e',
        backgroundColor: props.mode === 'dark' ? '#00060e' : 'white'
    }




    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode");  //For dark mode button
    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Our Mission</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            Our mission is to provide a simple and user-friendly text conversion tool that can assist users in converting their text to different formats, without any hassle.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>How It Works</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            Our text converter app is very easy to use. Simply copy and paste your text into the input box, select the desired conversion option, and click the convert button. The converted text will be displayed in the output box, which you can copy and use anywhere you like.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Why Choose Us</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Our text converter app is fast, reliable, and free to use. We offer a variety of conversion options, including lowercase, uppercase, sentence case, and more. We also ensure that your data is kept safe and secure, and we do not store any of your information on our servers.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2 ">
                <button type="button" onClick={toggleStyle} style={myStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
