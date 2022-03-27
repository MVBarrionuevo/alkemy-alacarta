import React from 'react';
import photo from '../img/notFoundPage.jpg';

function NotFoundScreen(props) {



    return (
        <React.Fragment>
            <div>
                <div className='container-notFound'>
                    <h1>Oops! No pudimos encontrar la página</h1>
                    <p>ERROR 404</p>
                    <img src={photo} alt='error 404'/>
                </div>
            </div>

        </React.Fragment>

    );
}

export { NotFoundScreen };