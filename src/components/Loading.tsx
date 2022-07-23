import React from 'react';

class Loading extends React.Component {
    render() {
        return (
            <div className='col-lg-6 offset-lg-3'>
                <div className='d-flex align-items-center m-4 p-4'>
                    <strong>Loading...</strong>
                    <div className='spinner-border ms-auto text-primary my-4' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;
