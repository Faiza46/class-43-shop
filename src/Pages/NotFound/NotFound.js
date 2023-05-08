import React from 'react';
import './NotFound.module.css'


const NotFound = () => {
    return (

        <div class="container">
            <h1 class="error-code">404</h1>
            <p class="error-message">Oops!requested url not found, please try again<br></br><a className='text-decoration-none homepage' href="/">Go to Homepage</a></p>


        </div>


    );
};

export default NotFound;