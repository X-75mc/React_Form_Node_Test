import React, { useState } from 'react';


const Header = () => {

    const [data, setData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        fetch('http://example.com/api/endpoint', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
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