import React from 'react';

import Wrapper from './../../components/Wrapper';
import './loading.scss';

const Loading = ( ) => {
    return (
        <Wrapper>
            <div className='loading-container'>
                <div>
                    <p className='loader-text'>Almost there</p>
                    <div className="loader">
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                        <div className="dot" />
                    </div>
                </div>
                
            </div>
        </Wrapper>
    );
}

export default Loading;