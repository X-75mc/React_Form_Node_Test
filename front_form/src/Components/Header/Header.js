import React, { useState } from 'react';
import vector1 from './img/Vector_1.png';
import Captura from './img/Capture.png';
import sunSmallEllow from './img/sun_small_ellow.png';
import eclipseEllow from './img/Ellipse_ellow.png';
import sunBigFiollet from './img/sun_big_fiolet.png';
import sunEllowRot from './img/sun_ellow_rot.png';
import './style.css';


const Header = () => {

    const [data, setData] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
    
        fetch('http://localhost:8000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
          body: JSON.stringify({
            "name": event.target.name.value,
            "mail" : event.target.mail.value,
             "message" : event.target.message.value
          }),
        })
          .then((response) => response.text())
          .then((result) => {
            setData(result);
          });
      };

    return (
        <header>
            <div className="container">
                <div className="bg">
                  <img className="vector_1" src={vector1} alt="Vector" />
                  <img className="vector_2" src={Captura} alt="Captura" />
                  <img className="vector_3" src={sunSmallEllow} alt="Vector" />
                  <img  className="vector_4" src={eclipseEllow} alt="" />
                  <img  className="vector_5" src={sunBigFiollet} alt="" />
                  <img className="vector_6" src={sunEllowRot} alt="" />
                  <div className="form_div">
                    <form onSubmit={handleSubmit}>
                        <h3 className='text_top'>Reach out to us!</h3>
                        <input className="inp_text_name" type="text" name="name"   />
                        <input className="inp_text_mail" type="text" name="mail" />
                        <textarea className="textarea" name="message"></textarea>
                        <button className="btn" type="submit">Message</button>
                      </form>
                  </div>
                    
                </div>
            </div>
        </header>
      
    );
}

export default Header;