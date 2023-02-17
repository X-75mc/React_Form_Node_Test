import React, { useState } from 'react';


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
            'name': event.target.name.value,
            'email' : event.target.email.value,
             'message' : event.target.message.value
          }),
        })
          .then((response) => response.text())
          .then((result) => {
            setData(result);
          });
      };

    return (
        <header>
            <div className='container'>
                <div className='bg'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" />
                        <input type="text" name="email" />
                        <textarea name="message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;