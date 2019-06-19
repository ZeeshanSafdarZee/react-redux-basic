import React from 'react';

const user = (props) => {
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h3>User Name : {props.username}</h3>
                    </div>
                </div>
            </div>
        );
    };

export default user;